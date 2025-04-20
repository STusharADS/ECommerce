import React from 'react';
import logo from '../assets/logoShop.webp';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ userName }) {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0f172a] text-white shadow-md">

      <div className="flex items-center space-x-8">
        <img height="70px" width="70px" src={logo} alt="Shop Logo" />
        <Link
          to="/"
          className={`text-2xl font-bold ${location.pathname === "/" ? "text-sky-400" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/cart"
          className={`text-2xl font-bold ${location.pathname === "/cart" ? "text-sky-400" : ""}`}
        >
          Cart
        </Link>
      </div>

      
      <div>
        {userName ? (
          <div className="text-xl font-semibold text-green-400">
            Hi {userName}
          </div>
        ) : (
          <Link
            to="/signin"
            className={`text-2xl font-bold ${location.pathname === "/signin" ? "text-sky-400" : ""}`}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
