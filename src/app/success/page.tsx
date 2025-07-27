'use client'
import Link from "next/link"
import { Button } from "../components/ui/button"


const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg mb-6">Your order has been placed successfully.</p>
      <Link href="/">
        <Button className="text-yellow-500 cursor-pointer">Go Back to Home</Button>
      </Link>
    </div>
  )
}

export default SuccessPage