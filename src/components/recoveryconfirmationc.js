import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RecoveryConfirmation() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(60);
  const [recoveryCode, setRecoveryCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const generateRandomCode = () => Math.floor(100000 + Math.random() * 900000).toString();

  useEffect(() => {
    setGeneratedCode(generateRandomCode());
  }, []);

  const handleResendCode = () => {
    setGeneratedCode(generateRandomCode());
    setCountdown(60);
  };

  const handleCodeChange = (e) => {
    setRecoveryCode(e.target.value);
  };

  const handleNext = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/verify-recovery-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recoveryCode }),
      });
  
      if (response.ok) {
        navigate("/reset-password");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Invalid recovery code");
      }
    } catch (error) {
      setError("Network error");
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-8 text-3xl font-bold">Recovery Confirmation</h2>
      <p className="mb-4 text-gray-600">
        We have sent a recovery code to your email. Please check your email.
      </p>
      <div className="mb-4">
        <label htmlFor="recoveryCode" className="block text-sm text-gray-600">
          Recovery Code
        </label>
        <input
          type="text"
          id="recoveryCode"
          name="recoveryCode"
          value={recoveryCode}
          onChange={handleCodeChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
        />
      </div>
      {error && <p className="mb-4 text-red-600">{error}</p>}
      <p className="mb-4 text-gray-600">
        Time remaining: {countdown} seconds{" "}
        <button
          className="text-indigo-600 underline focus:outline-none"
          onClick={handleResendCode}
        >
          Resend Code
        </button>
      </p>
      <button
        onClick={handleNext}
        className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500"
      >
        Next
      </button>
    </div>
  );
}

export default RecoveryConfirmation;
