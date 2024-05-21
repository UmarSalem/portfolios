
// src/components/Services.js
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component

const Services = () => {
  return (
    <div className="container mx-auto">
      {/* Navigation Bar */}
      <Navbar />

      {/* Services Section */}
      <div className="flex flex-col items-center justify-center py-20 px-20 bg-gray-100 rounded-lg">
        <h1 className="text-3xl font-bold mb-8">Services</h1>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-start">
          {/* Replace the image URLs with your actual images */}
          <img src="/images/Services-1.png" alt="Service 1" className="w-74 h-44 mx-4 my-2 md:mx-2 md:my-0" />
          <img src="/images/Services-2.png" alt="Service 2" className="w-74 h-44 mx-4 my-2 md:mx-2 md:my-0" />
          <img src="/images/Services-3.png" alt="Service 3" className="w-74 h-44 mx-4 my-2 md:mx-2 md:my-0" />
        </div>
      </div>

      <div className="py-20">
{/* Footer */}
<Footer />
</div>
    </div>
  );
}

export default Services;
