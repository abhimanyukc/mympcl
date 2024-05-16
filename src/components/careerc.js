import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Careerc = () => {
  const { t } = useTranslation("global");
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState([
    { name: 'message', value: '' },
    { name: 'email', value: '' },
    { name: 'cv', value: null },
    { name: 'coverLetter', value: null }
  ]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevData => {
      return prevData.map(field => {
        if (field.name === name) {
          return {
            ...field,
            value: name === 'cv' || name === 'coverLetter' ? files[0] : value
          };
        }
        return field;
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submission logic here, for example, send data to a server.

    // Assuming your submission is successful, show a success message
    setMessage(t('career7.message'));
    // Clear the form data
    setFormData([
      { name: 'message', value: '' },
      { name: 'email', value: '' },
      { name: 'cv', value: null },
      { name: 'coverLetter', value: null }
    ]);
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
        {formData.map((field, index) => (
          <div className="mb-4" key={index}>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              {t(`career${index}.message`)}
            </label>
            {field.name === 'message' ? (
              <textarea
                name={field.name}
                value={field.value}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="4"
              ></textarea>
            ) : (
              <input
                type={field.name === 'email' ? 'email' : 'file'}
                name={field.name}
                value={field.value}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                accept={
                  field.name === 'cv' || field.name === 'coverLetter'
                    ? '.pdf, .doc, .docx, .png, .jpg, .jpeg'
                    : undefined
                }
                required={field.name === 'email'}
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
