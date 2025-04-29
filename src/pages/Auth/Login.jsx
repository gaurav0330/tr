import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth, RecaptchaVerifier } from "../../firebase";
import { signInWithPhoneNumber } from "firebase/auth";
import Cookies from "js-cookie";

export default function Login() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const [role, setRole] = useState("customer");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ phone: "", otp: "" });

  const themeClass = isDarkMode ? "dark" : "light";

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
    if (!/^[0-9]{7,15}$/.test(phone)) {
      setErrors({ phone: "Please enter a valid phone number." });
      return;
    }

    setErrors({ phone: "" });

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const fullPhone = `${countryCode}${phone}`;

    try {
      setLoading(true);
      const result = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      alert("📩 OTP sent successfully.");
    } catch (error) {
      console.error("OTP error:", error);
      alert("❌ Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!/^[0-9]{4,6}$/.test(otp)) {
      setErrors({ otp: "Invalid OTP. Must be 4–6 digits." });
      return;
    }

    try {
      setLoading(true);
      await confirmationResult.confirm(otp);
      Cookies.set("userPhone", `${countryCode}${phone}`, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
      alert("✅ Login successful!");
      navigate(role === "vendor" ? "/dashboard" : "/customerdashboard");
    } catch (error) {
      console.error("OTP verification failed:", error);
      setErrors({ otp: "❌ Invalid OTP. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-background text-text ${themeClass} px-4`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-card p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-accent">
          Login as {role === "customer" ? "Customer" : "Vendor"}
        </h2>

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

        <form className="space-y-5" onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <div className="flex space-x-2">
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
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
              />
            </div>
            {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {otpSent && (
            <div>
              <label className="block mb-1 font-medium">Enter OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
              />
              {errors.otp && <p className="text-sm text-red-500 mt-1">{errors.otp}</p>}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold transition bg-accent text-background hover:brightness-110 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Processing..." : otpSent ? "Verify OTP & Login" : "Send OTP"}
          </button>
        </form>

        <div id="recaptcha-container" className="mt-2"></div>

        <p className="text-sm text-center mt-6 text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-accent hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
