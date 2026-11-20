import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logosahakari.jpeg"; // your bank logo
function SignupC() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [accountType, setAccountType] = useState("savings");
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const requestData = { name, email, password, confirmPassword, phone, address, accountType, accountNumber };
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/signUp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Sign up successful:", data);
        navigate("/login");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Sign up failed");
      }
    } catch (error) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
};
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="w-auto h-12 mx-auto" src={logo} alt="Bank Logo" />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Create your account</h2>
          </div>
          {error && <div className="text-center text-red-500">{error}</div>}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">Confirm password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="address" className="sr-only">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="accountType" className="sr-only">Account Type</label>
                <select
                  id="accountType"
                  name="accountType"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                >
                  <option value="savings">Savings</option>
                  <option value="checking">Checking</option>
                  <option value="business">Business</option>
                </select>
              </div>
              <div>
                <label htmlFor="accountNumber" className="sr-only">Account Number</label>
                <input
                  id="accountNumber"
                  name="accountNumber"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Account Number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account? Sign in
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className={`group relative flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignupC;
