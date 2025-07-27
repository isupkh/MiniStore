'use client'
import React, { createContext, useContext, useReducer } from "react"

type Product = {
  _id: string
  name: string
  price: number
  images: string[]
  quantity?: number
}

type State = {
  cart: Product[]
}

type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: string }

const CartContext = createContext<{
  cart: Product[]
  dispatch: React.Dispatch<Action>
} | undefined>(undefined)

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cart.find(p => p._id === action.payload._id)
      if (exist) {
        return {
          cart: state.cart.map(p =>
            p._id === action.payload._id
              ? { ...p, quantity: (p.quantity ?? 1) + 1 }
              : p
          ),
        }
      }
      return { cart: [...state.cart, { ...action.payload, quantity: 1 }] }

    case "REMOVE_FROM_CART":
      return { cart: state.cart.filter(p => p._id !== action.payload) }

    default:
      return state
  }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { cart: [] })

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}