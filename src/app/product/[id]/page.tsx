"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { useCart } from "@/app/context/cartContext";

type Product = {
  _id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
};

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    console.log("Product ID from URL:", id);

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://api.freeapi.app/api/v1/public/randomproducts/${id}`);
        const data = await res.json();
        console.log("Fetched product data:", data);

        if (data && data.success && data.data) {
          setProduct(data.data);
        } else {
          console.error("Unexpected API structure", data);
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-10 text-xl text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <section className="container max-w-full sm:w-[1400px] mx-auto pt-20 px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-48 shadow-md border border-gray-300 rounded-lg py-8 px-4 sm:px-16">
        <img
          src={product.images[0]}
          className="w-full sm:w-72 h-72 object-cover"
          alt={product.name}
        />

        <div className="w-full sm:w-1/2">
          <h1 className="text-xl font-bold mt-4">{product.name}</h1>
          <p className="text-gray-700 text-base sm:text-xl mt-2.5">{product.description}</p>
          <p className="text-green-600 text-xl font-semibold mt-2">${product.price}</p>
          <Button
            className="mt-8 sm:mt-16 bg-blue-600 text-white cursor-pointer"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;