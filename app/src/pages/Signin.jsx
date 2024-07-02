import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

export default function Signin({ users }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error,setError] = useState("")
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //!change pathes dynamically
  const handleSubmit = (e) => {
    e.preventDefault()
    const chosen = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );
    if (!chosen)setError("user not found")
    else if (chosen.username === "admin") navigate("/admin") 
    else navigate(`/client/${chosen.username}`)

  };
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-72 bg-white p-5 rounded shadow-md">
        <h2 className="text-center text-2xl font-bold mb-8">Sign in</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password: </label>
            <input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Sign In
          </button>
          <Link className="flex justify-center" to="/sign-up">
              <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4">
                Sign Up
              </button>
            </Link>
        </form>
      </div>
    </section>
  );
}
