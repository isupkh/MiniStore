"use client";

import { createContext, useContext, useReducer } from "react";

type Product = {
  _id: string;
  name: string;
  price: number;
  images: string[];
};

type CartItem = Product & { quantity: number };

type State = {
  cart: CartItem[];
};

type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } };

const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { cart: [] },
  dispatch: () => {},
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.cart.find((item) => item._id === action.payload._id);
      if (exists) {
        return {
          cart: state.cart.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...action.payload, quantity: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter((item) => item._id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { cart: [] });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);