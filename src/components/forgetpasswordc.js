// ForgotPassword.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logosahakari.jpeg";
import Select from "react-select";

 


function ForgotPasswordC() {

    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleCountryChange = (selectedOption) => {
      setSelectedCountry(selectedOption);

       // If a country is selected, update the phone input with its code
    if (selectedOption && selectedOption.value !== "select") {
        setPhone(selectedOption.value);
      } else {
        setPhone(""); // Reset phone if "Select Country" is chosen
      }
    };

  
const countries = [
    { label: "Select Country", value: "select" },
    { label: "NEPAL", value: "+977" },
    { label: "United State", value: "+1" },
    // Add more countries as needed
  ];
  

  

  const handleRecovery = async (e) => {
    e.preventDefault();
    if (!selectedCountry || selectedCountry.value === "select") {
        // Handle the case where no country is selected
        return;
      }
  
      const countryCode = selectedCountry.value;
    const fullPhoneNumber = `+${countryCode}${phone}`;


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
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <Select
                id="country"
                name="country"
                options={countries} // Provide an array of country options with label and value properties
                value={selectedCountry}
                onChange={handleCountryChange}
                placeholder="Select a country"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
