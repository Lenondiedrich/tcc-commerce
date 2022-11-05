import React from "react";
import { Product } from "../api/requests";

export default React.createContext({
  cart: [],
  addProductToCart: (product: Product) => {},
  removeProductFromCart: (productId: number) => {}
})