import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Careerc = () => {
  const { t } = useTranslation("global");

  const formFields = [
    { name: 'message', label: 'send message', type: 'text'},
    { name: 'email', label: 'your email', type: 'email' },
    { name: 'cv', label: 'cv' ,type: 'file' },
    { name: 'coverLetter', label: 'cover Letter', type: 'file' }
  ];

  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Initialize formData state based on formFields array
    const initialFormData = {};
    formFields.forEach(field => {
      initialFormData[field.name] = field.type === 'file' ? null : '';
    });
    setFormData(initialFormData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'cv' || name === 'coverLetter' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submission logic here, for example, send data to a server.

    // Assuming your submission is successful, show a success message
    setMessage(t('career7.message'));
    // Clear the form data
    const resetFormData = {};
    Object.keys(formData).forEach(key => {
      resetFormData[key] = formData[key] instanceof File ? null : '';
    });
    setFormData(resetFormData);
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
    <div className="container px-8 mx-auto mt-8 bg-white select-none max-w-screen-2xl md:py-2">
      {message && (
        <div className="p-4 mb-4 text-white bg-primary">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {formFields.map(field => (
          <div className="mb-4" key={field.name}>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              {t(`${field.label}`)}
            </label>
            {field.type === 'text' || field.type === 'email' ? (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required={field.type === 'email'}
              />
            ) : (
              <input
                type="file"
                name={field.name}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
            )}
          </div>
        ))}
        <div className="mb-4">
          <button
            type="submit"
            className="p-2 text-white rounded bg-primary hover:bg-green-700"
          >
            {t('career4.message')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Careerc;
