import React, { useContext } from "react";
import mainContext from "../ContextandProvider/MainContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, incrementItem, decrementItem } = useContext(mainContext);
  const navigate = useNavigate();

  const decrement = (item) =>{
    const decitem = cart?.find((x)=> x.id === item.id)
  
    if(decitem.qty === 1){
        removeFromCart(item.id)
    }else{
      decrementItem(item)
    }
}

  return (
    <div class=" bg-gray-100 ">
      <h1 class="mb-10 text-center text-2xl py-4 font-bold uppercase text-zamzam_bg">
        Quote Items
      </h1>
      {cart?.length < 1 && (
        <div className=" flex flex-col items-center gap-4">
          <h1 className=" font-semibold text-lg text-center">
            No Items in the cart
          </h1>
          <button
            onclick={() => navigate("/shop")}
            class="inline-flex text-white bg-secondary border-0 py-2 px-6 focus:outline-none items-center hover:bg-zamzam_bg_hover rounded text-lg"
          >
            Shop NOW
          </button>
        </div>
      )}
      {cart?.length > 0 && (
        <>
          <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 items-center">
            <div class="rounded-lg md:w-2/3">
              {cart?.map((cartItem) => {
                return (
                  <>
                    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start items-center">
                      <img
                        src={cartItem?.image}
                        alt="product-image"
                        class="w-full rounded-lg sm:w-40 sm:h-20 object-cover"
                      />
                      <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                          <h2 class="text-lg font-bold text-gray-900">
                            {cartItem.name}
                          </h2>
                          <p class="mt-1 text-xs text-gray-700">
                            {cartItem?.category}
                          </p>
                        </div>
                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div class="flex items-center border-gray-100 gap-2 justify-center">
                            <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>decrement(cartItem)} >
                              {" "}
                              -{" "}
                            </span>
                            {/* <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" /> */}
                            <p>{cartItem?.qty}</p>
                            <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>incrementItem(cartItem)}>
                              {" "}
                              +{" "}
                            </span>
                          </div>
                          <div class="flex space-x-4">
                            {/* <p class="text-sm">259.000 ₭</p> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="h-7 w-7 cursor-pointer duration-150 hover:text-zamzam_bg_hover "
                              onClick={()=>removeFromCart(cartItem?.id)}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div class=" h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              {/* <hr class="my-4" /> */}
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total Items</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">{cart?.length}</p>
                </div>
              </div>
              <button class="mt-6 w-full rounded-md bg-zamzam_bg py-1.5 font-medium text-blue-50 hover:bg-zamzam_bg_hover">
                Check out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
