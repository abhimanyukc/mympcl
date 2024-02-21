// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 mx-auto text-white select-none bg-secondary max-w-screen-2xl md:px-24 md:py-8">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">गाउसहर बहुउदेस्यिय सहकारि सस्था लि  पोखरा-८,  कास्कि </h2>
          <p className="text-sm">Providing diverse services to our community.</p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <div className='mt-4'>
            <h3 className="text-lg font-semibold ">Contact Us</h3>
            <p>Email: GausaharSahakari@gmail.com</p>
            <p>Phone: 061556802</p>
          </div>

          <div className='mb-2'>
            <h3 className="text-lg font-semibold ">Address</h3>
            <p>Srijana Chowk</p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-gray-600">
        <div className="container mx-auto text-sm text-center">
          <p>&copy; {new Date().getFullYear()} गाउसहर बहुउदेस्यिय सहकारि सस्था लि  पोखरा-८,  कास्कि</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

