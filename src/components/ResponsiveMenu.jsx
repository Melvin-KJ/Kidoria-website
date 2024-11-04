import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode='wait'>
      {open && (
        <motion.div
          initial={{ opacity: 0, y:100 }}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0, y:-100 }}
          transition={{duration:0.3}}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-sm font-semibold text-gray-700 py-10 m-4 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li className='text-primary'>Home</li>
              <li>About Us</li>
              <li>Classes</li>
              <li>Teachers</li>
              <li>Reviews</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
