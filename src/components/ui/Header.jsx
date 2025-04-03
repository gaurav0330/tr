import { Link } from "react-router-dom";
import { 
  MoonIcon, SunIcon, MenuIcon, XIcon, HomeIcon, 
  BriefcaseIcon, InfoIcon, MailIcon, MapPinIcon 
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useIsMobile } from "../../hooks/use-mobile.js";
import { useState } from "react";

/**
 * Header component for the application
 */
export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo and App Name */}
          <Link to="/" className="flex items-center space-x-2">
            <MapPinIcon size={28} className="text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-extrabold text-2xl sm:text-3xl tracking-wide">
              Findy<span className="text-gray-900 dark:text-white">It</span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          )}

          {/* Navigation Links */}
          <nav 
            className={`md:flex space-x-6 ${isMobile ? "absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md md:shadow-none md:relative md:top-0" : "hidden md:flex"}`}
          >
            <div 
              className={`flex flex-col md:flex-row md:space-x-6 ${isMobile && !isMenuOpen ? "hidden" : "block"}`}
            >
              <Link to="/" className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <HomeIcon size={20} />
                <span>Home</span>
              </Link>
              <Link to="/services" className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <BriefcaseIcon size={20} />
                <span>Services</span>
              </Link>
              <Link to="/about" className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <InfoIcon size={20} />
                <span>About Us</span>
              </Link>
              <Link to="/contact" className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <MailIcon size={20} />
                <span>Contact</span>
              </Link>
            </div>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition duration-300"
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
