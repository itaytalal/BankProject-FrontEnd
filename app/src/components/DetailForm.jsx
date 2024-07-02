import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function DetailForm({ handleSubmit, error, data = null }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    balance: 0,
    expences: [],
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

      <div className="w-72 bg-white p-5 rounded shadow-md">
        {!data ? (
          <h2 className="text-center text-2xl font-bold mb-8">Register</h2>
        ) : (
          <h2 className="text-center text-2xl font-bold mb-8">Update Details</h2>
        )}
        <form
          className="flex flex-col"
          onSubmit={(e) => handleSubmit(e, formData)}
        >
          <div className="mb-4">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              readOnly={!!data}
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
          <div className="mb-4">
            <label htmlFor="balance">Current Balance: </label>
            <input
              type="text"
              id="balance"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          {error && <div className="text-red-500 mb-2">{error}</div>}
          {!data ? (
            <div className="flex flex-col items-center">
              <button className="bg-green-500 w-36 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4">
                Sign Up
              </button>
              <Link className="flex justify-center mt-4" to="/">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Sign In
                </button>
              </Link>
            </div>
          ) : (
            <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4">
              Update
            </button>
          )}
        </form>
      </div>

  );
}
