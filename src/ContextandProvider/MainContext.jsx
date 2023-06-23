import { useReducer } from "react";
import { createContext, useState } from "react";
import MainReducer from "./MainReducer";
import { toast } from "react-toastify";

const mainContext = createContext();

export const MainAppContextProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(MainReducer, initialState);

  const addToCart = (product) => {
    console.log(product);
    try {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          name: product.name,
          category: product.category,
          image: product.image,
          qty: 1,
        },
      });
      toast.success("Added To Quote");
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
    toast.success("Items Removed Successfully");
  };

  const incrementItem = (item) => {
    dispatch({
      type: "INCREMENT",
      payload: item,
    });
  };

  const decrementItem = (item) => {
    dispatch({
        type:'DECREMENT',
        payload:item
    })
}

  return (
    <mainContext.Provider
      value={{
        cart: state.cart,
        dispatch: dispatch,

        // Global Function
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        incrementItem: incrementItem,
        decrementItem:decrementItem
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default mainContext;
