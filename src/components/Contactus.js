// ContactUs.js
import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto">
      {/* Navigation Bar */}
      <Navbar />

      {/* Contact Us Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-100 py-10 px-6 rounded-lg pl-20">
        {/* Left Section - Contact Form */}
        <div className="py-10">
          <h1 className="text-2xl font-bold mb-6 text-center lg:text-center">CONTACT ME</h1>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <div className="text-center lg:text-left">
              <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit Now</button>
            </div>
          </form>
        </div>

        {/* Right Section - Additional Information */}
        <div className="flex flex-col justify-center items-center lg:items-center pr-18">
          <div className="text-justify lg:text-justify">
            <h2 className="text-lg font-bold mb-2">M Umar Saleem</h2>
            <p className="mb-4">Mob. 0045 20494020</p>
            <p className="mb-4">Email: <a href="mailto:umars62350@gmail.com" className="text-blue-500 hover:underline">umars62350@gmail.com</a></p>
            <p className="mb-4">Web: <a href="https://umar-portfolio-03.web.app/" className="text-blue-500 hover:underline">https://umar-portfolio-03.web.app/</a></p>
            <p>Address: Vejlevej 6A, Horsens 8700</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contactus;
