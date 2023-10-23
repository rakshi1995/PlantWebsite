// src/components/ProductPage.js
import React from "react";

const ProductPage = () => {
  return (
    
    <div className="flex p-4">
      {/* Stacked Product Images */}
      <div className="w-1/4 pr-4">
        <div className="mb-4">
          <img src="pictures/plant3.png" alt="Product Image 1" className="w-40" />
        </div>
        <div className="mb-4">
          <img src="pictures/plant2.png" alt="Product Image 2" className="w-40" />
        </div>
        <div className="mb-4">
          <img src="pictures/plant1.png" alt="Product Image 3" className="w-40" />
        </div>
      </div>

      {/* Larger Product Image */}
      <div className="w-3/4 pr-8">
        <img src="pictures/plant3.png" alt="Main Product Image" className="w-80" />
      </div>

      {/* Product Description */}
      <div className="w-1/4">
        <h1 className="text-2xl font-semibold mb-2">Product Name</h1>
        <p className="text-gray-700 mb-4">
          Product description goes here. This is where you can provide details
          about the product.
        </p>
        <div className="mb-4">
          <span className="text-2xl font-semibold text-red-500">$99.99</span>
        </div>
        <span className="mr-4">Quantity:</span>
            <button
              className="bg-gray-200 text-gray-700 p-2 rounded-full"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              className="bg-gray-200 text-gray-700 p-2 rounded-full"
              onClick={incrementQuantity}
            >
              +
            </button>
        <button className="bg-yellow-500 text-white p-2 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
