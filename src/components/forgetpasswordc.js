import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logosahakari.jpeg";

function ForgotPasswordC() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRecovery = async (e) => {
        e.preventDefault();
        // Add email validation here if needed
        if (!email) {
            // Handle the case where email is not provided
            return;
        }

        // Construct the email link with recovery instructions
        const emailLink = `mailto:your-email@gmail.com?subject=Forgot%20Password&body=Please%20reset%20my%20password.%0A%0AEmail%3A%20${email}`;

        // Open user's default email client with the pre-filled email
        window.location.href = emailLink;

        // Simulate API call for recovery
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // Redirect to a confirmation page or login page after recovery
            navigate("/recovery-confirmation"); // adjust the path as needed
        }, 3000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img className="w-auto h-12 mx-auto" src={logo} alt="Bank Logo" />
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                        Forgot Password
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleRecovery}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {loading ? "Recovering..." : "Recover Account"}
                        </button>
                    </div>

                    <div className="text-sm text-center">
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Back to Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordC;
