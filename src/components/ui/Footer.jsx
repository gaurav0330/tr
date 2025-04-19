import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

/**
 * Footer component for the application
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-text py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">FindyIt</h3>
            <p className="text-muted-foreground">
              Discover and connect with the best service providers in your area.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Contact Us</h3>
            <address className="text-muted-foreground not-italic space-y-2">
              <p className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>123 Business Street, San Francisco, CA 94103</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail size={18} />
                <span>gauravjikar070806@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-muted text-center">
          <p className="text-muted-foreground">
            &copy; {currentYear} FindyIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
