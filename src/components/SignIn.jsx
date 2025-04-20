import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      setError("Password invalid");
      return;
    }

    const userInfo = { name, email, phone };
    localStorage.setItem("signininfo", JSON.stringify(userInfo));
    setUserName(name); 
    alert("Sign in successful :)");
    setError("");
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={validateAndSubmit}
        className="bg-[#1e293b] text-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-5"
      >
        <h1 className="text-3xl font-bold text-yellow-400 text-center">Sign In</h1>
        {error && <div className="text-red-400 text-center">{error}</div>}

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold">Name</label>
          <input
            type="text"
            className="p-2 rounded bg-gray-700 text-white outline-none"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold">Email</label>
          <input
            type="email"
            className="p-2 rounded bg-gray-700 text-white outline-none"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold">Phone Number</label>
          <input
            type="tel"
            className="p-2 rounded bg-gray-700 text-white outline-none"
            placeholder="10-digit number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold">Password</label>
          <input
            type="password"
            className="p-2 rounded bg-gray-700 text-white outline-none"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 rounded transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
