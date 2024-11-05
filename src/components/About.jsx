import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center p-4 overflow-y-auto min-h-screen text-justify">
            <h2 className="mt-2 mb-4 text-center">
              Learn More About Our Work And
              <br /> Our Cultural Activities
            </h2>
            <p className="text-gray-600 mb-4">
              Discover the essence of our organization through our impactful
              work and vibrant cultural activities. We are dedicated to
              fostering creativity, innovation, and social responsibility
              through various projects and community initiatives. Our efforts
              aim to empower individuals and promote a sense of purpose and
              achievement.
            </p>
            <p className="text-gray-600 mb-4">
              Alongside our professional endeavors, we celebrate cultural
              diversity with events that bring people together. From festive
              gatherings to artistic performances, our activities create
              opportunities for connection and growth. Join us to experience how
              we blend our mission with rich cultural expressions, fostering a
              dynamic and inclusive environment.
            </p>
            <button className="hidden lg:flex rounded-full px-12 py-3 text-md text-white bg-primary  items-center gap-4 hover:bg-lighter">
              Read More
            </button>
          </div>
          <div className="flex items-center justify-center p-4 relative">
            {/* Ring 1 */}
            <div className="group relative w-80 h-80 rounded-full border-8 border-primary overflow-hidden hover:border-lighter transition duration-300">
              <img
                src="/assets/about-1.jpg"
                alt="Ring1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Ring 2 */}
            <div className="group absolute left-24 bottom-20 w-56 h-56 rounded-full border-8 border-primary overflow-hidden hover:border-lighter transition duration-300">
              <img
                src="/assets/about-2.jpg"
                alt="Ring3"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Ring 3 */}
            <div className="group absolute right-24 bottom-20 w-56 h-56 rounded-full border-8 border-primary overflow-hidden hover:border-lighter transition duration-300">
              <img
                src="/assets/about-3.jpg"
                alt="Ring3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
