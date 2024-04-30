import React, { useState } from "react";
import logo from "../images/logosahakari.jpeg"; // your bank logo
import { Link, useNavigate } from "react-router-dom";

function LoginC() {
  const navigate = useNavigate(); // replace useHistory with useNavigate

  // state variables for email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Retrieve user information from local storage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Check if entered email and password match the stored values
    if (email === storedEmail && password === storedPassword) {
      // Simulate successful login after a delay
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 3000); // 3000 milliseconds (3 seconds) for the loading animation
    } else {
      // Simulate login failure after a delay
      setTimeout(() => {
        setLoading(false);
        alert("Invalid email or password");
      }, 3000);
    }
  };

  // handle signup button click
  const handleSignup = () => {
    // redirect the user to the signup page
    // or open a modal with the signup form
    // or use any other method you prefer
    navigate("/signup"); // adjust the path as needed
  };

  return (
    <div className="mx-auto max-w-screen-2xl">
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="w-auto h-12 mx-auto"
            src={logo}
            alt="Bank Logo"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
            <Link
                to="/forgot-password" // Link to the Forgot Password page
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
            <button
              type="button"
              onClick={handleSignup}
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Link to="/signup">Don't have an account? Sign up</Link>
            </button>
          </div> 
        </form>

      
      </div>
    </div>
    </div>
  );
}

export default LoginC;
