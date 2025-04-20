import { Link } from "react-router-dom";
import {
  MoonIcon,
  SunIcon,
  MenuIcon,
  XIcon,
  HomeIcon,
  BriefcaseIcon,
  InfoIcon,
  MailIcon,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useIsMobile } from "../../hooks/use-mobile.js";
import { useState } from "react";
import DarkLogo from "../../assets/Dark.png";
import LightLogo from "../../assets/light.png";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-4 shadow-md bg-background text-text transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={isDarkMode ? DarkLogo : LightLogo} // Conditionally render logo based on theme
            alt="Logo"
            className="h-8"
          />
          <span className="text-2xl font-bold">
            <span className={isDarkMode ? "text-text" : "text-text"}>
              Findy
            </span>
            <span className="text-logoIt">It</span>
          </span>
        </Link>

        {/* Mobile Toggle */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-accent/20 text-text"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        )}

        {/* Navigation */}
        <nav
          className={`md:flex ${
            isMobile
              ? "absolute left-0 w-full bg-background text-text shadow-md top-16"
              : "hidden md:flex"
          } ${isMenuOpen ? "block" : "hidden md:block"} transition-colors`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6">
            {[
              { to: "/", label: "Home", Icon: HomeIcon },
              { to: "/services", label: "Services", Icon: BriefcaseIcon },
              { to: "/about", label: "About Us", Icon: InfoIcon },
              { to: "/contact", label: "Contact", Icon: MailIcon },
            ].map(({ to, label, Icon }) => (
              <Link
                to={to}
                key={label}
                className="flex items-center space-x-2 px-4 py-2 hover:text-accent transition-colors"
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="hover:underline hover:text-accent transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-accent text-background font-semibold px-4 py-2 rounded hover:brightness-110 transition"
          >
            Register
          </Link>
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-accent text-background hover:opacity-80 transition"
          >
            {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
