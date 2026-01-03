import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <img
            src="/logo.png"
            alt="Taj Industries Logo"
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm leading-6">
            <strong>New Taj Industry</strong> — Manufacturer of Injection
            Moulding Machines with high precision and durability. Based in
            Industrial Area, New Delhi.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition">About Us</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition">Products</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-lg">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:masoomshaikh339@gmail.com" className="hover:text-white transition">
                masoomshaikh339@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+911234567890" className="hover:text-white transition">
                +91 8700762005
              </a>
            </li>
            <li>Mon - Sat: 9:00 AM – 6:00 PM</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-lg">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} New Taj Industries. All rights reserved.
        </p>
        <a href="#top" className="hover:text-white transition block mt-2">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
