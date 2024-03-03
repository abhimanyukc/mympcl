import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Careerc = () => {
  const {t} = useTranslation("global")
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    message: '',
    email: '',
    cv: null,
    coverLetter: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'cv' || name === 'coverLetter' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submission logic here, for example, send data to a server.

    // Assuming your submission is successful, show a success message
    setMessage('Your details has been sent!!!');
    // Clear the form data
    setFormData({
      message: '',
      email: '',
      cv: null,
      coverLetter: null,
    });

  };

  useEffect(() => {
    // Set a timer to clear the message after 5 seconds
    const timer = setTimeout(() => {
      setMessage('');
    }, 5000);

    // Cleanup the timer on component unmount or when a new message is set
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="container px-8 mx-auto mt-8 bg-white select-none max-w-screen-2xl md:px-24 md:py-2">
      {message && (
        <div className="p-4 mb-4 text-white bg-green-500">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            {t('career.message')}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
          {t('career1.message')}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
          {t('career2.message')}
          </label>
          <input
            type="file"
            name="cv"
            accept=".pdf, .doc, .docx, .png, .jpg, .jpeg"
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
          {t('career3.message')}
          </label>
          <input
            type="file"
            name="coverLetter"
            accept=".pdf, .doc, .docx, .png, .jpg, .jpeg"
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="p-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
           {t('career4.message')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Careerc;
