import React from 'react';

const Categories = () => {
  return (
    <div class="p-8">
      <h2 class="text-4xl font-bold mb-4 text-center">Categories</h2>

      <div class="flex space-x-4 pl-64">
        <div class="flex-shrink-0  max-w-xs">
          <div class=" p-4  ">
            <img
              src="pictures/image2.png"
              alt="Category 1"
              class=" h-80 w-50 object-cover  mb-2"
            />
            <p class="text-center font-semibold">Jungle Plants</p>
          </div>
        </div>

        <div class="flex-shrink-0 max-w-xs">
          <div class=" p-4 ">
            <img
              src="pictures/image3.png"
              alt="Category 2"
              class="h-80 w-50 object-cover  mb-2"
            />
            <p class="text-center font-semibold">Outdoor Plants</p>
          </div>
        </div>

        <div classe="flex-shrink-0 max-w-xs">
          <div class=" p-4 rounded-lg ">
            <img
              src="pictures/image4.png"
              alt="Category 3"
              class="h-80 w-50 object-cover  mb-2"
            />
            <p class="text-center font-semibold">Bedroom Plants</p>
          </div>
        </div>

        <div class="flex-shrink-0 max-w-xs">
          <div class=" p-4 rounded-lg ">
            <img
              src="pictures/image5.png"
              alt="Category 4"
              class="h-80 w-50 object-cover  mb-2"
            />
            <p class="text-center font-semibold">Indoor Plants</p>
          </div>
        </div>
      </div>
      <div class="min-h-screen flex items-center justify-center py-0">
      <div >
        <p class="text-4xl text-center py-8 ">
          "Love and work are to people what water and <br/> sunshine are to plants."
        </p>
      </div>
    </div>
    </div>
  );
};

export default Categories;
