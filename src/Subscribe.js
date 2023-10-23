import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div class ="p-8">
         <p class="text-4xl text-center font-Aboreto p-8 pl-12">Get 15% off your next order,<br/> Subscribe to our Newsletter</p>
   
    <div className="max-w-sm mx-auto">
       
       <form onSubmit={handleSubmit} className="bg-white w-3/8 p-2 py-2 flex items-center">
        <input
          className="shadow appearance-none font-Aboreto border rounded w-3/10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          
          placeholder="Enter the Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="bg-black hover:bg-blue-700 text-white  py-2 px-10 ml-1  focus:outline-none font-Aboreto focus:shadow-outline"
          type="su"
        >
          Subscribe
        </button>
      </form>
    </div>
    </div>
  );
};

export default Subscribe;
