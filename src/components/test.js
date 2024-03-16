// RecoveryConfirmation.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Recoveryconfirmationc() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(60);
  const [recoveryCode, setRecoveryCode] = useState("");

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

  const handleResendCode = () => {
    // Implement code to resend the recovery code
    // You can use a similar logic as the one in handleRecovery from ForgotPasswordC
  };

  const handleCodeChange = (e) => {
    setRecoveryCode(e.target.value);
  };

  const handleNext = () => {
    // Check if the recovery code matches your expected value
    const isCodeValid = recoveryCode === "your_expected_code"; // Replace with your actual verification logic

    if (isCodeValid) {
      // Redirect to the reset password page
      navigate("/reset-password"); // Adjust the path as needed
    } else {
      // Handle invalid code, show an error message or take appropriate action
      console.error("Invalid recovery code");
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Recovery Confirmation</h2>
      <p className="mb-4 text-gray-600">
        We have sent a recovery code to your mobile number. Please check your
        messages.
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

export default Recoveryconfirmationc;
