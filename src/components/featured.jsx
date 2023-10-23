import React from 'react';

const Featured = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
          <h2 className="text-5xl font-semibold  mb-4 pl-12">Featured</h2>
          <p className="text-lg mb-4 pl-12">
            Our plants are 100% organic,<br/>we don't use pesticides or<br/>harmful chemicals.
            But please don't eat them.
          </p>
          <button className="bg-white text-black font-semibold py-2 px-10 mb-4  hover:bg-blue-600 shadow-md border-b-2 border-black">
            Shop All Favorites
          </button>
        </div>
        <div className="w-full lg:w-3/5 flex justify-between items-center">
          <div className="relative w-1/3">
          <img
              src="pictures/plant1.png"
              alt=" Plant 1"
              class=" h-80 w-50 object-cover  mb-2 max-w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-2 text-sm">
              <p className="text-gray-600">Plant 1</p>
              <p className="text-gray-800">150&euro;</p>
            </div>
          </div>
          <div className="relative w-1/3 pb-8">
          <img
              src="pictures/plant2.png"
              alt="Plant2 1"
              class=" h-80 w-50 object-cover  mb-2 max-w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-2 text-sm">
              <p className="text-gray-600">Plant 2</p>
              <p className="text-gray-800">70&euro;</p>
            </div>
          </div>
          <div className="relative w-1/3">
          <img
              src="pictures/plant3.png"
              alt="plant3 "
              class=" h-80 w-50 object-cover  mb-2 max-w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-2 text-sm">
              <p className="text-gray-600">Plant 3</p>
              <p className="text-gray-800">50&euro;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;


