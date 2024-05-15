import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactC = () => {
  const { t } = useTranslation("global");

  const formFields = [
    { name: 'name', label: t('con.message'), type: 'text', placeholder: t('con.message') },
    { name: 'email', label: t('con1.message'), type: 'email', placeholder: t('con1.message') },
    { name: 'subject', label: t('con2.message'), type: 'text', placeholder: t('con2.message') },
    { name: 'message', label: t('con3.message'), type: 'textarea', placeholder: t('con3.message') }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();
   
 
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      // If any field is empty, show the "Please submit the form" message
      setSubmitMessage(t('con.validationMessage'));
      return;
    }

        try{
          const response =  await fetch("http://localhost:5000/api/contact/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          })
          const data = await response.json(response);
          console.log(data);
        } catch(error) {
          console.error(error.message);
        }
    

    // Handle form submission logic here
    // Assuming a successful submission for this example
    setSubmitMessage(t('con.successMessage'));
    console.log('Form submitted:', formData);
    // Add your logic for submitting the form data to the server or any other action
  };

  return (
    <div className="container px-8 mx-auto mt-8 bg-white select-none md:mt-8 md:py-2">
      <div className="mb-6 text-3xl font-semibold text-center">{t('con5.message')}</div>
      {submitMessage && (
        <div className="mb-6 text-center text-green-600 ">
          {submitMessage}
        </div>
      )}
      <div className='flex flex-col md:items-center md:flex-row '>
        <form onSubmit={handleSubmit} className="w-full md:mr-4">
          {formFields.map((field, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-600">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 mt-1 border rounded-md"
                  placeholder={field.placeholder}
                  required
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md"
                  placeholder={field.placeholder}
                  required
                />
              )}
            </div>
          ))}
          <div className="flex items-center py-1">
            <button
              type="submit"
              className="px-2 text-white rounded-md bg-primary hover:bg-green-600"
            >
              {t('con4.message')}
            </button>
          </div>
        </form>

        <iframe
          title="Web soft"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.86809086942!2d83.97825317606336!3d28.211320003082573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595acf47c0b65%3A0x37d1e590f8a5d50e!2sWebsoft%20Technology%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1708653678963!5m2!1sen!2snp"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='mt-10 mb-4 '>
        </iframe>
      </div>
    </div>
  );
};

export default ContactC;
