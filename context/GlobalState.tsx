import { useReducer } from "react";
import { Product } from "../api/requests";
import { ADD_PRODUCT, REMOVE_PRODUCT, shopReducer } from "./reducers";
import ShopContext from "./ShopContext";

const GlobalState = (props: any) => {
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product: Product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = (productId: number) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
