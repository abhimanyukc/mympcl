import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

const ResetPasswordc = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if new password matches the confirm password
    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    // Implement logic to change the password here
    // For demonstration, just log the new password
    console.log('New password:', newPassword);
    // Reset form fields
    setNewPassword('');
    setConfirmPassword('');
    setError('');

    // Redirect to login page after password change
    history.push('/login');
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Reset Password</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChangeNewPassword}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordc;
