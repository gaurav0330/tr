import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { MoonIcon, SunIcon, MenuIcon, XIcon, HomeIcon, BriefcaseIcon, InfoIcon, MailIcon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useIsMobile } from "../../hooks/use-mobile.js";
import DarkLogo from "../../assets/Dark.png";
import LightLogo from "../../assets/light.png";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth(); //done
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    { to: "/", label: "Home", Icon: HomeIcon },
    { to: "/services", label: "Services", Icon: BriefcaseIcon },
    { to: "/about", label: "About Us", Icon: InfoIcon },
    { to: "/contact", label: "Contact", Icon: MailIcon }
  ];

  return (
    <header className="sticky top-0 z-50 py-4 shadow-md bg-background text-text transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={isDarkMode ? DarkLogo : LightLogo}
            alt="Logo"
            className="h-8"
          />
          <span className="text-2xl font-bold">
            <span className="text-text">Findy</span>
            <span className="text-logoIt">It</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
          {navLinks.map(({ to, label, Icon }) => (
            <Link
              to={to}
              key={label}
              className="flex items-center space-x-2 px-2 py-2 hover:text-accent transition-colors"
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/profile" className="hover:underline hover:text-accent">Profile</Link>
              <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline hover:text-accent">Login</Link>
              <Link
                to="/register"
                className="bg-accent text-background font-semibold px-4 py-2 rounded hover:brightness-110 transition"
              >
                Register
              </Link>
            </>
          )}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-accent text-background hover:opacity-80 transition"
          >
            {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-accent/20 text-text md:hidden"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <nav className="md:hidden bg-background text-text px-4 py-4 shadow-md">
          <div className="flex flex-col space-y-4">
            {navLinks.map(({ to, label, Icon }) => (
              <Link
                to={to}
                key={label}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-2 py-2 hover:text-accent transition-colors"
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}

            <hr className="my-2 border-muted" />

            {user ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:underline hover:text-accent transition-colors"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  className="text-red-500 hover:underline text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:underline hover:text-accent transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-accent text-background font-semibold px-4 py-2 rounded hover:brightness-110 transition"
                >
                  Register
                </Link>
              </>
            )}

            <button
              onClick={() => {
                toggleDarkMode();
                setIsMenuOpen(false);
              }}
              className="mt-2 p-2 rounded-full bg-accent text-background hover:opacity-80 transition self-start"
            >
              {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
