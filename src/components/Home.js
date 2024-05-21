// src/components/About.js
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
import { Link } from 'react-router-dom';
import Button from './Button';

const Home = () => {
  return (
    <div className="container mx-auto ">
     {/* Navigation Bar */}
   
 {/* Use the Navbar component */}
 <Navbar />


     {/* Header Section */}
<div className="flex flex-col lg:flex-row items-center justify-between py-5">
  <div className="lg:w-1/2 lg:flex lg:justify-end"> {/* Move this div to the right */}
    <img src='/images/Umar.jpeg' alt="umar Picture" className="rounded-full w-64 h-64 mx-auto mb-4 lg:mb-0" />
  </div>
  <div className="lg:w-1/2 lg:flex lg:justify-start"> {/* Move this div to the left */}
    <div>
      <h1 className="text-4xl font-bold mb-4">Hi, I am M Umar Saleem</h1>
      <p className="text-lg mb-4">Full Stack Developer</p>
      <div className="mb-4">
      <a href="/images/CV.pdf" download>
  <Button title={"Download CV"}/>
</a>

<Link to="/contactus">
 {/* <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Contact Me
  </button>*/}
   <Button title={"Contact me"}/>
</Link>

      </div>
    </div>
  </div>
</div>


      {/* About Me Section */}
      <div className="bg-gray-100 rounded-lg lg:pl-10">
        <h2 className="text-2xl font-bold mb-4">About me</h2>
        <p className="text-lg mb-8">As a dedicated fifth-semester softwar
student, I bring expertise in Java, C#, and C, complemented by proficiency
in Bootstrap, HTML, Tailwind CSS, JavaScript, and React. With a Master's in
Geophysics and a Bachelor's in Natural Sciences,I possess a strong foundation in both 
software development and scientific principles.
Throughout my academic journey and professional experiences at Orbit 
Geological Consultancy, Quantum Geoservices Pvt Ltd, and Oil & Gas 
Development Company Ltd, I have honed essential skills such as scientific 
thinking, work ethic, time management, and adaptability.
My diverse background allows me to seamlessly integrate geophysical
 techniques with software development practices, enabling me to tackle 
 complex challenges with precision and creativity. I am known for my excellent
  problem-solving abilities and effective communication skills, which have been 
  instrumental in collaborating with multidisciplinary teams and delivering
   successful projects.
Driven by a passion for innovation and continuous learning, I
 am committed to making a meaningful impact in both the software 
 development and geophysics domains.</p>
      </div>

{/* Footer */}
<Footer />


    </div>
  );
}

export default Home;
