import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Password reset email sent");
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Network error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-8 text-3xl font-bold">Reset Password</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      {error && <p className="mb-4 text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500"
        >
          Send Reset Email
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
