import React, { useState } from 'react';

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

  return (
    <div className="container mx-auto mt-10">
      <div className="mb-6 text-3xl font-semibold text-center">Contact Us</div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* ... (input fields) */}
        <div className="mb-4">

          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
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
            Email
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
            Subject
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
            Message
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
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      {submitMessage && (
        <div className="mb-1 text-center text-green-600 ">
          {submitMessage}
        </div>
      )}

<iframe
            title="Google Map"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            className='mt-20'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_LONGITUDE!2dYOUR_LONGITUDE!2dYOUR_LATITUDE!3dYOUR_LONGITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xYOUR_LATITUDE_LONGITUDE!2sYOUR_LOCATION_NAME!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
            allowFullScreen
          ></iframe>
    </div>
  );
};

export default ContactC;
