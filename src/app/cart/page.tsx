"use client";

import { Button } from "../components/ui/button";
import { useCart } from "../context/cartContext";



export default function CartPage() {
  const { state, dispatch } = useCart();

  // Calculate total price of all items
  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (state.cart.length === 0) {
    return <div className="p-10 text-center text-gray-500">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {state.cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border p-4 rounded"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-green-600">${item.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { id: item._id, quantity: +e.target.value },
                  })
                }
                className="w-16 border px-2 py-1 rounded"
              />
              <Button
                variant="destructive"
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item._id })}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        <div className="text-right font-bold text-xl mt-4">
          Total: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
}