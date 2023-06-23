import { ProductList } from "../components/data/ProductList";

const MainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = action.payload;
      const existingProduct = state.cart.find((x) => x.id == product.id);
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === existingProduct.id) {
              return { ...item, qty: item.qty + 1 };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, product],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };

    case "INCREMENT":
      const incrementItem = action.payload;
      const existIncrementItem = state.cart.find(
        (x) => x.id === incrementItem.id
      );

      if (existIncrementItem) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === existIncrementItem.id) {
              return { ...item, qty: item.qty + 1 };
            }
            return item;
          }),
        };
      }

    case "DECREMENT":
      const decrementItem = action.payload;
      const existDecrementItem = state.cart.find(
        (x) => x.id === decrementItem.id
      );
      if (existDecrementItem) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === existDecrementItem.id) {
              return { ...item, qty: item.qty - 1 };
            }
            return item;
          }),
        };
      }

      case "CLEAR_CART":
        return {
          ...state,
          cart : null
        }

    default:
      return state;
  }
};
export default MainReducer;
