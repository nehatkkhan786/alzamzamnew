import React from "react";
import { ProductList } from "./data/ProductList";

const FeatureProducts = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-16 mx-auto">
        <h1 class="sm:text-5xl text-3xl font-bold title-font text-center text-gray-900 mb-6 uppercase">
          Featured Products
        </h1>
        <img src='/images/leaf2.png' className="mx-auto mb-6"/>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full items-center  ">
          {ProductList.map((product) => {
            return (
              <div class="w-full ">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-fill object-center w-full h-full "
                    src={product.image}
                  />
                </a>
                <div class="mt-4 text-center">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {product.name}
                  </h2>
                  <button class="mt-2 inline-flex text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded-xl text-lg uppercase">
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
