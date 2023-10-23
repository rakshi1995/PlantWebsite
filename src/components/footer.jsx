import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white font-Aboreto text-black py-24">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Logo */}
        <div className="text-3xl font-Aboreto font-bold px-14  ">
          <h1>RadPlants</h1>
        </div>
        {/* Middle Columns */}
        <div className="flex justify-center space-x-20">
          {/* Connect Column */}
          <div>
            <h4 className="text-sm  font-Aboreto font-semibold mb-2 text-gray-400 ">Connect</h4>
            <ul className="text-lg">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Pinterest</li>
              <li>Youtube</li>
            </ul>
          </div>
          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-semibold font-Aboreto mb-2 text-gray-400">Resources</h4>
            <ul className="text-lg">
              <li>Return Policy</li>
              <li>Track an Order</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* About Column */}
          <div>
            <h4 className="text-sm font-semibold font-Aboreto mb-2 text-gray-400">About</h4>
            <ul className="text-lg">
              <li>Our Story</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        {/* Language Dropdown */}
        <div>
          <select className="bg-gray-200 border-white font-Aboreto text-black rounded mb-24 mx-28 p-4 ">
            <option value="en">EUR</option>
            <option value="es">Esp</option>
            <option value="fr">Fra</option>
          </select>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
