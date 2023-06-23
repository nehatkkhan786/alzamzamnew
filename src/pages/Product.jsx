import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ProductList } from "../components/data/ProductList";
import mainContext from "../ContextandProvider/MainContext";

const Product = () => {
  const {addToCart} = useContext(mainContext)
  const params = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const relatedProducts = ProductList.filter(
    (product) => product.category === state.category
  );

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div className="mb-5">
          <button
            onClick={() => navigate(-1)}
            className=" text-white bg-[#8c560c] border-0 py-2 px-6 focus:outline-none hover:bg-[#664414] rounded uppercase"
          >
            Go Back
          </button>
        </div>

        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={state.image}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              {state.category}
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {state.name}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-green-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-green-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-green-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-green-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-green-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </span>
            </div>
            <p class="leading-relaxed">{state.description}</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div class="flex">
              <button onClick={()=>addToCart(state)} class="flex ml-auto text-white bg-zamzam_bg border-0 py-2 px-6 focus:outline-none hover:bg-zamzam_bg_hover rounded uppercase">
                Add To Quote
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
      </div>

      <div className="container lg:w-4/5 px-5  mx-auto">
        <h1 className="font-bold text-2xl">Related Products</h1>
        {/* Related Product Show */}
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full items-center ">
          {relatedProducts?.length > 0 && (
            <>
              {relatedProducts.map((product) => {
                return (
                  <div key={product.id} class="w-full ">
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        class="object-fill object-center w-full h-full cursor-pointer "
                        src={product.image}
                        onClick={() =>
                          navigate(`/shop/product/${product.id}`, {
                            state: product,
                          })
                        }
                      />
                    </a>
                    <div class="mt-4 text-center">
                      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {product.category}
                      </h3>
                      <h2 class="text-gray-900 title-font text-lg font-medium">
                        {product.name}
                      </h2>
                      <button onClick={()=>addToCart(product)}  class="mt-2 inline-flex text-white bg-zamzam_bg border-0 py-2 px-4 focus:outline-none hover:bg-zamzam_bg_hover rounded-xl text-lg uppercase">
                        Add to Quote
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
        {/* End Related Product */}
      </div>
    </section>
  );
};

export default Product;
