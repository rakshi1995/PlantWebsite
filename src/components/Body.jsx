import React from 'react';

const Body = () => {
  return (
    <div className=" h-screen flex items-center justify-center">

        {/* Left side with paragraph */}
        <div className="md:w-1/2 p-4">
          <p className="text-6xl font-semibold mb-4 pl-12">Find Perfect plants for<br/>your homes</p>
          <p className="text-black-500 text-lg  pl-12">
      Beautiful plants that encourage<br/> you to get creative
          </p>
          <button className="bg-black text-white px-10 py-2 mt-8 ml-12 rounded-md hover:bg-blue-600">
            Click Me
          </button>
        </div>

        {/* Right side with image */}
        <div className="md:w-1/2 pl-48">
          <img
          
            src="pictures/image.jpeg"
            alt="Your Image"
            class="w-auto h-auto rounded-md"
          />
        </div>
        
      </div>


    
  )
};

export default Body;






    
    
    
    
  

