import React from "react";

const CategorySection = () => {
  return (
    <section class="text-gray-600 body-font bg-[#f8f5f4] relative">
        <img src='/images/leaf3.png' className='absolute -top-10 left-1/3 sm:left-1/2  '/>
      <div class="container px-5 py-14 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-white p-8 rounded">
              <h1 class="text-2xl font-medium title-font text-gray-900 mb-12 ">
                Green & Fresh Vegetables
              </h1>
              <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Shop NOW
            </button> 
            <div className='flex justify-end'>
                    <img src='/images/vegetable.png' className='w-20 h-20'/>  
                </div>
            </div>
          </div>

          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-white p-8 rounded">
                <h1 class="text-2xl font-medium title-font text-gray-900 mb-12 ">
                Spices
                </h1>
                <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Shop NOW
                </button>
                <div className='flex justify-end'>
                    <img src='/images/spicy.png' className='w-20 h-20'/>  
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
