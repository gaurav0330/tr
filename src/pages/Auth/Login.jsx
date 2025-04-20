import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
  const { isDarkMode } = useTheme();

  // State
  const [role, setRole] = useState("customer"); // 'customer' | 'vendor'
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [errors, setErrors] = useState({ phone: "", otp: "" });

  const themeClass = isDarkMode ? "dark" : "light";

  // Regex for phone validation (basic)
  const isValidPhone = (number) => /^[0-9]{7,15}$/.test(number);
  const isValidOtp = (code) => /^[0-9]{4,6}$/.test(code);

  // Handle OTP send
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!isValidPhone(phone)) {
      setErrors({ phone: "Please enter a valid phone number." });
      return;
    }
    setErrors({ phone: "" });
    setOtpSent(true);
    // Simulate sending OTP
  };

  // Handle OTP verification
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!isValidOtp(otp)) {
      setErrors({ otp: "Invalid OTP. Must be 4–6 digits." });
      return;
    }
    setErrors({ otp: "" });
    alert("✅ OTP Verified!");
    // Simulate OTP verification
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-background text-text transition-colors duration-300 ${themeClass} px-4`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-card p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-accent">
          Login as {role === "customer" ? "Customer" : "Vendor"}
        </h2>

        {/* Role Switcher */}
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

        {/* Login Form */}
        <form className="space-y-5">
          {/* Phone Input */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex space-x-2">
              <select
                id="countryCode"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="border rounded-md px-3 py-2 bg-background text-text border-gray-300 dark:border-gray-600"
              >
                <option value="+91">+91 (IN)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
              </select>
              <input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Send OTP Button */}
          {!otpSent && (
            <button
              onClick={handleSendOtp}
              disabled={!phone}
              className={`w-full py-2 rounded-md font-semibold transition ${
                phone
                  ? "bg-accent text-background hover:brightness-110"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
              }`}
            >
              Send OTP
            </button>
          )}

          {/* OTP Input & Verify */}
          {otpSent && (
            <>
              <div>
                <label className="block mb-1 font-medium" htmlFor="otp">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
                />
                {errors.otp && (
                  <p className="text-sm text-red-500 mt-1">{errors.otp}</p>
                )}
              </div>
              <button
                onClick={handleVerifyOtp}
                disabled={!otp}
                className={`w-full py-2 rounded-md font-semibold transition ${
                  otp
                    ? "bg-accent text-background hover:brightness-110"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Verify OTP
              </button>
            </>
          )}
        </form>

        {/* Footer */}
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
