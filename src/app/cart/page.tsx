'use client';

import Link from "next/link";
import { useCart } from "../context/cartContext";
import { Button } from "../components/ui/button";

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );

  return (
    <div className="container max-w-full sm:w-[1400px] mx-auto p-6 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border border-gray-300 rounded-lg"
            >
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-lg sm:text-xl">
                Price: <span className="text-red-500">${item.price}</span>
              </p>
              <p className="text-lg sm:text-xl">
                Quantity:{" "}
                <span className="text-green-600">{item.quantity}</span>
              </p>
              <p className="text-lg sm:text-xl font-bold">
                Total:{" "}
                <span className="text-purple-700">
                  ${item.price * (item.quantity ?? 1)}
                </span>
              </p>
              <Button
                className="bg-red-500 text-white shadow cursor-pointer"
                variant="outline"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item._id })
                }
              >
                Remove
              </Button>
            </div>
          ))}

          <div className="text-right mt-4 text-xl font-bold">
            Grand Total: <span className="text-green-700">${totalPrice}</span>
          </div>

          <Link href="/checkout">
            <Button className="mt-6 text-xl bg-amber-600 text-white shadow-2xl cursor-pointer w-full sm:w-auto">
              Checkout
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;