'use client'
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/app/components/ui/button"
import { useCart } from "@/app/context/cartContext"


type Product = {
  _id: string
  name: string
  price: number
  images: string[]
  description: string
}

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const { dispatch } = useCart()

  useEffect(() => {
    console.log("Product ID from URL:", id) 

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://api.freeapi.app/api/v1/public/randomproducts/${id}`)
        const data = await res.json()
        console.log("Fetched product data:", data) 

      
        if (data && data.success && data.data) {
          setProduct(data.data)
        } else {
          console.error("Unexpected API structure", data)
        }
      } catch (error) {
        console.error("Failed to fetch product", error)
      }
    }

    fetchProduct()
  }, [id])

  if (!product) {
    return (
      <div className="text-center mt-10 text-xl text-gray-500">
        Loading...
      </div>
    )
  }
  
  return (
    <>
    <section className="w-[1400px]  container mx-auto pt-20">
      <div className=" flex justify-center items-center py-18 px-16 gap-48 shadow-md border border-gray-300 rounded-lg">
        <img src={product.images[0]} className="w-70 h-70 object-cover" />

          <span className=""> 
            <h1 className="text-xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-700 text-xl mt-2.5">{product.description}</p>
            <p className="text-green-600 text-xl font-semibold mt-2">${product.price}</p>
            <Button className="mt-16 bg-blue-600 text-white cursor-pointer" onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>Add to Cart</Button>
          </span>
      </div>
    </section>
    </>
  )
}

export default ProductPage



