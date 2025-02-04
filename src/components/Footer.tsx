import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bitcoding Solution</h3>
            <p className="text-gray-400">Powered by Divine Enterprise</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-1 text-blue-400" />
                <p className="text-gray-400">
                  T/F-8-B, Swastic Mall
                  <br />
                  Opp Jain Millian Soc, Sureliya,
                  <br />
                  Amraiwadi, Ahmedabad - 380026
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-400">+91 8511108143</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Website Development</li>
              <li>Web Application Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-200 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-gray-200 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-200 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-gray-200 transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © 2025 Bitcoding Solution. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
