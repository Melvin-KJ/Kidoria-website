import React from 'react';
import '../styles/Classes.css';

const Classes = () => {
  return (
    <div className="classes">
      <div className="classes-content">
        <h2 className="mt-6 text-center lobster">School Classes</h2>
        <p className="mt-2 text-center text-gray-500">
          Explore a diverse range of engaging school classes designed to spark
          curiosity and foster creativity in young minds
        </p>
        <div className="classes-content flex justify-center items-center min-h-screen">
          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="relative bg-orange-100 shadow-lg rounded-lg w-80 h-auto p-6">
              <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
                <div className="w-56 h-56 rounded-full border-8 border-primary hover:border-orange-500 overflow-hidden shadow-md">
                  <img
                    src="/assets/classes-1.jpg"
                    alt="art and drawing class"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-20 text-center">
                <h3 className="text-2xl lobster font-bold">Art & Drawing</h3>
                <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full">
                  ₹7,999
                </button>
                <div className="mt-2 flex items-center justify-center gap-6">
                  <div className="mt-2 ">
                    <span className="block text-red-500 font-bold">Age:</span>
                    <span className="block text-gray-600 font-bold">
                      3-5 Years
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="block text-green-500 font-bold">
                      Time:
                    </span>
                    <span className="block text-gray-600 font-bold">
                      9-10 AM
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="block text-yellow-500 font-bold">
                      Capacity:
                    </span>
                    <span className="block text-gray-600 font-bold">
                      30 kids
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-orange-100 shadow-lg rounded-lg w-80 h-auto p-6">
              <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
                <div className="w-56 h-56 rounded-full border-8 border-primary hover:border-orange-500 overflow-hidden shadow-md">
                  <img
                    src="/assets/classes-3.jpg"
                    alt="art and drawing class"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-20 text-center">
                <h3 className="text-2xl lobster font-bold">Athletic & Dance</h3>
                <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full">
                  ₹5,999
                </button>
                <div className="mt-2 flex items-center justify-center gap-6">
                  <div className="mt-2 ">
                    <span className="block text-red-500 font-bold">Age:</span>
                    <span className="block text-gray-600 font-bold">
                      3-5 Years
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="block text-green-500 font-bold">
                      Time:
                    </span>
                    <span className="block text-gray-600 font-bold">
                      11-12 AM
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="block text-yellow-500 font-bold">
                      Capacity:
                    </span>
                    <span className="block text-gray-600 font-bold">
                      30 kids
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-orange-100 shadow-lg rounded-lg w-80 h-auto p-6">
              <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
                <div className="w-56 h-56 rounded-full border-8 border-primary hover:border-orange-500 overflow-hidden shadow-md">
                  <img
                    src="/assets/classes-6.jpg"
                    alt="art and drawing class"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-20 text-center">
                <h3 className="text-2xl lobster font-bold">
                  General Knoweledge
                </h3>
                <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full">
                  ₹6,999
                </button>
                <div className="mt-2 flex items-center justify-center gap-6">
                  <div className="mt-2 ">
                    <span className="block text-red-500 font-bold">Age:</span>
                    <span className="block text-gray-600 font-bold">
                      3-5 Years
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="block text-green-500 font-bold">
                      Time:
                    </span>
                    <span className="block text-gray-600 font-bold">
                      1-3 PM
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="block text-yellow-500 font-bold">
                      Capacity:
                    </span>
                    <span className="block text-gray-600 font-bold">
                      30 kids
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
