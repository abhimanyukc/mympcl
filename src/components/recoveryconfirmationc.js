import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RecoveryConfirmationc() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(60);
  const [recoveryCode, setRecoveryCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      } else {
        clearInterval(timer);
        // Handle expiration or implement a resend option
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const generateRandomCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  useEffect(() => {
    const code = generateRandomCode();
    setGeneratedCode(code);
    // Open user's default email client with recovery code pre-filled in the body
    const emailLink = `mailto:?subject=Recovery%20Code&body=Your%20recovery%20code%20is%3A%20${code}`;
    window.location.href = emailLink;
  }, []);

  const handleResendCode = () => {
    const newCode = generateRandomCode();
    setGeneratedCode(newCode);
    setCountdown(60);
    // Open user's default email client with new recovery code pre-filled in the body
    const emailLink = `mailto:?subject=Recovery%20Code&body=Your%20recovery%20code%20is%3A%20${newCode}`;
    window.location.href = emailLink;
  };

  const handleCodeChange = (e) => {
    setRecoveryCode(e.target.value);
  };

  const handleNext = () => {
    if (recoveryCode === generatedCode) {
      navigate("/reset-password");
    } else {
      console.error("Invalid recovery code");
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Recovery Confirmation</h2>
      <p className="mb-4 text-gray-600">
        We have sent a recovery code to your email client. Please check your default email application.
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
        className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500"
      >
        Next
      </button>
    </div>
  );
}

export default RecoveryConfirmationc;
