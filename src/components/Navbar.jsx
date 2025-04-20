import React, { useState } from 'react';
import logo from '../assets/shoplogovibcopy3.jpeg';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar({ userName }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1e1b4b] via-[#0f172a] to-[#111827] text-white shadow-md px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left: Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Shop Logo" className="w-12 h-12 rounded-full" />
          <Link
            to="/"
            className={`text-xl md:text-2xl font-bold ${location.pathname === "/" ? "text-sky-400" : ""} hover:text-yellow-400`}
          >
            Smile Shop
          </Link>
        </div>

        {/* Hamburger Button for Small Screens */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Right: Menu items (hidden on small screens) */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/cart"
            className={`text-xl font-semibold hover:text-yellow-400 ${location.pathname === "/cart" ? "text-sky-400" : ""}`}
          >
            Cart
          </Link>
          <Link
            to="/faq"
            className={`text-xl font-semibold hover:text-yellow-400 ${location.pathname === "/faq" ? "text-sky-400" : ""}`}
          >
            FAQ
          </Link>
          {userName ? (
            <div className="text-green-400 font-semibold">Hi {userName}</div>
          ) : (
            <Link
              to="/signin"
              className={`text-xl font-semibold hover:text-yellow-400 ${location.pathname === "/signin" ? "text-sky-400" : ""}`}
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu (only shown when open) */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center">
          <Link
            to="/cart"
            className={`block text-lg font-medium hover:text-yellow-400 ${location.pathname === "/cart" ? "text-sky-400" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Cart
          </Link>
          <Link
            to="/faq"
            className={`block text-lg font-medium hover:text-yellow-400 ${location.pathname === "/faq" ? "text-sky-400" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </Link>
          {userName ? (
            <div className="text-green-400 font-medium">Hi {userName}</div>
          ) : (
            <Link
              to="/signin"
              className={`block text-lg font-medium hover:text-yellow-400 ${location.pathname === "/signin" ? "text-sky-400" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
