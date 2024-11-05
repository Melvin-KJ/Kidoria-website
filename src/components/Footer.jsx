import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full h-80 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Get In Touch */}
        <div>
          <h2 className="lobster text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-2">
            <FaMapMarkerAlt className="inline mr-2" />
            Marikkar Road, Edapally, Kochi
          </p>
          <p className="mb-2">
            <FaPhone className="inline mr-2" />
            0484-2540550
          </p>
          <p className="mb-2">
            <FaEnvelope className="inline mr-2" />
            mail@kidoria.com
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-lg">
              <FaYoutube />
            </a>
            <a href="#" className="text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="lobster text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Classes
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Photo Gallery */}
        <div>
          <h2 className="lobster text-2xl font-bold mb-4">Photo Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="/assets/classes-1.jpg"
              alt="gallery1"
              className="rounded-md w-20 h-16"
            />
            <img
              src="/assets/classes-2.jpg"
              alt="gallery1"
              className="rounded-md w-20 h-16"
            />
            <img
              src="/assets/classes-3.jpg"
              alt="gallery1"
              className="rounded-md w-20 h-16"
            />
            <img
              src="/assets/classes-4.jpg"
              alt="gallery1"
              className="rounded-md w-20 h-16"
            />
            <img
              src="/assets/classes-5.jpg"
              alt="gallery1"
              className="rounded-md w-20 h-16"
            />
            <img
              src="/assets/classes-6.jpg"
              alt="gallery1"
              className="rounded-md w-20 h-16"
            />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="lobster text-2xl font-bold mb-4">Newsletter</h2>
          <p className="mb-4">
            Stay updated with our latest news and offers. Subscribe to our
            newsletter now!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow p-2 rounded-l-md"
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-md">
              SignUp
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 text-white text-center py-4 mt-8">
        <p>
          &copy; Kidoria Kindergarten School, All Rights Reserved. Designed By{' '}
          <a
            href="https://github.com/Melvin-KJ/Kidoria-website"
            className="text-yellow-400"
          >
            Melvin K J
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer