

//careerc.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Careerc = () => {
  const { t } = useTranslation("global");
  const [message, setMessage] = useState('');
  const formFields = [
    { name: 'message', label: 'career0.message', type: 'textarea', placeholder: 'message' },
    { name: 'email', label: 'career1.message', type: 'email', placeholder: 'email' },
    { name: 'cv', label: 'career2.message', type: 'file', accept: '.pdf, .doc, .docx, .png, .jpg, .jpeg' },
    { name: 'coverLetter', label: 'career3.message', type: 'file', accept: '.pdf, .doc, .docx, .png, .jpg, .jpeg' }
  ];

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
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
// If any of them are empty, it sets an error message using the translation function t and returns, halting the submission process.
    if (!formData.message || !formData.email || !formData.cv || !formData.coverLetter) {
      setMessage(t('career7.Message'));
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('message', formData.message);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('cv', formData.cv);
    formDataToSend.append('coverLetter', formData.coverLetter);

    try {
      const response = await fetch("http://localhost:5000/api/career/ApplicationForm/", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setMessage(t('con.successMessage'));
      setFormData({
        message: '',
        email: '',
        cv: null,
        coverLetter: null,
      });

    } catch (error) {
      console.error('Submission error:', error.message);
    }

    console.log('Form submitted:', formData);

  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="container px-8 mx-auto mt-8 bg-white select-none max-w-screen-2xl md:px-24 md:py-2">
      {message && (
        <div className="p-4 mb-4 text-white bg-primary">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {formFields.map(({ name, label, type, accept }) => (
          <div className="mb-4" key={name}>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              {t(label)}
            </label>
            {type === 'textarea' ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="4"
                placeholder={t(label)}
              ></textarea>
            ) : (
              <input
                type={type}
                name={name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                accept={accept}
                placeholder={t(label)}
                required={type !== 'file'}
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
