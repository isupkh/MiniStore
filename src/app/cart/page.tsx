'use client'

import Link from "next/link"
import { useCart } from "../context/cartContext"
import { Button } from "../components/ui/button"


const CartPage = () => {
  const { cart, dispatch } = useCart()

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  )

  return (
    <div className="container mx-auto w-[1400px] p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (

        <div className=" ">
          {cart.map(item => (
            <div key={item._id} className=" flex pr-36 py-6 justify-between border border-gray-300 rounded-lg  items-center">
              <h2>{item.name}</h2>
              <p className="text-xl">Price:<span className="text-red-500"> ${item.price}</span></p>
              <p className="text-xl">Quantity: <span className="text-green-600">{item.quantity}</span></p>
              <p className="font-bold text-xl">Total: <span className="text-purple-700">${totalPrice}</span>
                </p>
              <Button className="bg-red-500 text-white shadow cursor-pointer" 
                variant="outline"
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item._id })}
              >
                Remove
              </Button>
          
            </div>
          ))}
         
         <Link href="/checkout">
            <Button className="mt-6 text-xl bg-amber-600 text-white shadow-2xl cursor-pointer">Checkout</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartPage