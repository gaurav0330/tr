import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { motion } from "framer-motion";

export default function Signup() {
  const { isDarkMode } = useTheme();
  const [role, setRole] = useState("customer"); // 'customer' | 'vendor'
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    otp: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [otpSent, setOtpSent] = useState(false);

  const themeClass = isDarkMode ? "dark" : "light";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation before sending OTP
  const validateBeforeOtp = () => {
    const { name, phone, email, businessName } = formData;
    if (!name || !phone || !email || (role === "vendor" && !businessName)) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  // Handle OTP send
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!validateBeforeOtp()) return;
    // Simulate OTP sending logic here
    setOtpSent(true);
  };

  // Handle OTP verification
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!formData.otp) {
      alert("Please enter the OTP.");
      return;
    }
    // Simulate OTP verification
    alert("Signup successful!");
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-background text-text transition-colors duration-300 ${themeClass}`}>
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
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
              required
            />
          </div>

          {/* Business Name - Only for Vendors */}
          {role === "vendor" && (
            <div>
              <label className="block mb-1 font-medium">Business Name</label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter your business name"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
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
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
              required
            />
          </div>

          {/* Phone with country code */}
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
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
                required
              />
            </div>
          </div>

          {/* OTP Input - Shown only after sending OTP */}
          {otpSent && (
            <div>
              <label className="block mb-1 font-medium">Enter OTP</label>
              <input
                type="text"
                name="otp"
                placeholder="Enter the OTP"
                value={formData.otp}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-background text-text border-gray-300 dark:border-gray-600"
                required
              />
            </div>
          )}

          {/* Action Button */}
          <button
            type="submit"
            className="w-full bg-accent text-background font-semibold py-2 rounded-md hover:brightness-110 transition"
          >
            {otpSent ? "Verify OTP & Sign Up" : "Send OTP"}
          </button>
        </form>

        {/* Navigation to Login */}
        <p className="text-sm text-center mt-6 text-muted-foreground">
          Already have an account?{" "}
          <a href="/login" className="text-accent hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}
