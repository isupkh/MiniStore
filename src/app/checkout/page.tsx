'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "../context/cartContext"
import { Button } from "../components/ui/button"


const CheckoutPage = () => {
  const router = useRouter()
  const { cart } = useCart()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !address) {
      alert("Please fill all fields")
      return
    }

    const newOrder = {
      customer: { name, email, address },
      products: cart,
      total: cart.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0),
      date: new Date().toISOString(),
    }


    const oldOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    localStorage.setItem("orders", JSON.stringify([...oldOrders, newOrder]))

   
    localStorage.setItem("cart", "[]")

    router.push("/success")
  }

  return (
    <div className="py-14 px-8 max-w-xl mx-auto border border-gray-300 shadow-2xl rounded-2xl mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-8 ">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border p-2 rounded focus:outline-none border-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 rounded focus:outline-none border-gray-400"
        />
        <textarea
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="w-full border p-2 rounded focus:outline-none border-gray-400"
        />
        <Button type="submit" className=" w-full cursor-pointer bg-green-600 text-white">Place Order</Button>
      </form>
    </div>
  )
}

export default CheckoutPage