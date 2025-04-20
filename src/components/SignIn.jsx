import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

function SignIn({ setUserName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("signininfo"));
    if (storedUser) {
      setName(storedUser.name);
      setEmail(storedUser.email);
      setPhone(storedUser.phone);
    }
  }, []);

  function validateAndSubmit(e) {
    e.preventDefault();
    if (!name || !email || !phone || !password) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("Phone number invalid");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const userInfo = { name, email, phone };
    localStorage.setItem("signininfo", JSON.stringify(userInfo));
    setUserName(name);
    alert("Sign in successful ;) Welcome Sir !!!");
    setError("");
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={validateAndSubmit}
        className="bg-[#0f172a] text-white p-8 rounded-xl shadow-2xl w-full max-w-md space-y-5 border border-gray-700"
      >
        <h1 className="text-4xl font-bold text-yellow-400 text-center tracking-wide">Sign Up</h1>
        {error && <div className="text-red-400 text-center">{error}</div>}

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} />
            Name
          </label>
          <input
            type="text"
            className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-yellow-400"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </label>
          <input
            type="email"
            className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-yellow-400"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} />
            Phone Number
          </label>
          <input
            type="tel"
            className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-yellow-400"
            placeholder="10-digit number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold flex items-center gap-2">
            <FontAwesomeIcon icon={faLock} />
            Password
          </label>
          <input
            type="password"
            className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-yellow-400"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 rounded transition duration-200 shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
