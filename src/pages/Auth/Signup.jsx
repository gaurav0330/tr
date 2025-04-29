import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth, RecaptchaVerifier } from "../../firebase";
import { signInWithPhoneNumber } from "firebase/auth";
import Cookies from "js-cookie";

export default function Signup() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const [role, setRole] = useState("customer");
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    otp: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const themeClass = isDarkMode ? "dark" : "light";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateBeforeOtp = () => {
    const { name, phone, email, businessName } = formData;
    if (!name || !phone || !email || (role === "vendor" && !businessName)) {
      alert("❌ Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => {},
        "expired-callback": () => {
          alert("⚠️ Recaptcha expired, please try again.");
        },
      });
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!validateBeforeOtp()) return;

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const fullPhone = `${countryCode}${formData.phone}`;

    try {
      setLoading(true);
      const result = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      alert("📩 OTP sent successfully.");
    } catch (error) {
      console.error("OTP error:", error);
      alert("❌ Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!formData.otp) return alert("Please enter the OTP.");

    try {
      setLoading(true);
      await confirmationResult.confirm(formData.otp);
      Cookies.set("userPhone", `${countryCode}${formData.phone}`, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
      alert("✅ Signup successful!");

      if (role === "vendor") {
        navigate("/dashboard");
      } else {
        navigate("/customerdashboard");
      }
    } catch (error) {
      console.error("OTP Verification failed:", error);
      alert("❌ Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-background text-text ${themeClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-card p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-accent">
          Sign up as {role === "customer" ? "Customer" : "Vendor"}
        </h2>

        {/* Role Selector */}
        <div className="flex justify-center mb-6 space-x-4">
          {["customer", "vendor"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                role === r
                  ? "bg-accent text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* Signup Form */}
        <form className="space-y-4" onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Business Name */}
          {role === "vendor" && (
            <div>
              <label className="block mb-1 font-medium">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
                placeholder="Enter your business name"
                required
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="border rounded-md px-3 py-2 bg-background text-text border-gray-300 dark:border-gray-600"
              >
                <option value="+91">+91 (IN)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
                placeholder="Phone number"
                required
              />
            </div>
          </div>

          {/* OTP */}
          {otpSent && (
            <div>
              <label className="block mb-1 font-medium">Enter OTP</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
                placeholder="Enter the OTP"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-accent text-background font-semibold py-2 rounded-md hover:brightness-110 transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-background" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 01-8 8z"
                  />
                </svg>
                Processing...
              </span>
            ) : otpSent ? "Verify OTP & Sign Up" : "Send OTP"}
          </button>
        </form>

        <div id="recaptcha-container" className="mt-2"></div>

        <p className="text-sm text-center mt-6 text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-accent hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
