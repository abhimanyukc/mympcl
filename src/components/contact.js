
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const ContactC = () => {

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      // If any field is empty, show the "Please submit the form" message
      setSubmitMessage('Please submit the form with all required fields.');
      return;
    }

    // Handle form submission logic here
    // Assuming a successful submission for this example
    setSubmitMessage('Message sent successfully!');
    console.log('Form submitted:', formData);
    // Add your logic for submitting the form data to the server or any other action
  };

  const {t} = useTranslation("global")

  return (
    <div className="container px-8 mx-auto mt-40 bg-white select-none md:mt-48 md:px-24 md:py-2">
      <div className="mb-6 text-3xl font-semibold text-center">{t('con5.message')}</div>
      {submitMessage && (
        <div className="mb-6 text-center text-green-600 ">
          {submitMessage}
        </div>
      )}
      <div className='flex flex-col md:items-center md:flex-row '>
    
      <form onSubmit={handleSubmit} className="w-full md:mr-4">
        {/* ... (input fields) */}
        <div className="mb-4">

          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          {t('con.message')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          {t('con1.message')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
          {t('con2.message')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
          {t('con3.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 mt-1 border rounded-md"
            required
          ></textarea>
        </div>


        <div className="flex items-center">
          <button
            type="submit"
            className="text-white rounded-md bg-primary hover:bg-green-600"
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
               style={{border:0}} 
               allowfullscreen 
               loading="lazy" 
               referrerpolicy="no-referrer-when-downgrade"
               className='mt-10 mb-4 '>
  
      </iframe>

      </div>
  
</div>
  );
};

export default ContactC;
