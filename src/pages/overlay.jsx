// src/components/SubscribeOverlay.js
import React, { useState } from "react";

const Overlay = ({ onClose, }) => {
  const [email, setEmail] = useState("");



  const subscribe = () => {
    // You can add your subscription logic here.
    // For this example, we'll just display the email in the console.
    console.log("Subscribed with email:", email);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center  justify-center z-50 bg-gray-400 bg-opacity-80">
    <div className="bg-white w-1/2  p-10  max-h-60 relative">
      <button
        className="absolute top-3 right-2 text-gray-600 hover:text-gray-800"
        onClick={subscribe}
      >
        X
      </button>
      <h2 className="text-lg font-bold text-center mb-4 font-Aboreto">
        Get 15% off your next order<br/> Subscribe to our Newsletter
      </h2>
      
      <input
    type="text"
    placeholder="Enter your email"
    className="w-3/4 border p-2 rounded-md mb-4"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <button
    onClick={subscribe}
    className="bg-black text-white p-2 w-28"
  >
    Subscribe
  </button>
    </div>
  </div>
  );
};

export default Overlay;
