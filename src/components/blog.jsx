import React from 'react';

const Blog = () => {
  return (
    <div class="p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    {/* <!-- First Image --> */}
    <div class="relative">
      <img src="pictures/Background1.png" alt="Image 1" class="w-100 h-80 pl-20"/>
      {/* <div class="absolute bottom-0 right-0 p-0 bg-white bg-opacity-75 text-black text-sm">
          Caption for Image 1
        </div> */}
      <p className="text-gray-600 text-left pl-20">Edition 291</p>
     <p className="text-gray-800 text-bold text-3xl pl-20">How to water your freaking plants so they don't die after one week</p>
    </div>

    {/* <!-- Second Image --> */}
    <div>
      <img src="pictures/Background2.png" alt="Image 2" class="w-100 h-80" />
      
      <p className="text-gray-600 text-left">Edition 292</p>
              <p className="text-gray-800 text-bold text-3xl">How to repot a Monstera without killing it and foster its growth</p>
    </div>
  </div>
</div>

  );
};

export default Blog;
