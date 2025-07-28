"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "./components/ui/card";

type Product = {
  id: string;
  title: string;
  price: number;
  images: string[];
};

export default function HomePage() {
  const [product, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomproducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("API raw response:", data);

        if(data.success){
          console.log(data.data)
          setProducts(data.data.data);
          // setLoading(true);
         }
      
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(true);
        setLoading(false)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load products. Please try again later.
      </div>
    );
  }

  return (
  
        <div className="mx-auto py-16  max-w-[1400px]">
      <h1 className="text-2xl font-bold mb-8 text-gray-700">All Products</h1>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 justify-center sm:justify-start">
    
        {product.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="w-full sm:w-[250px] hover:scale-105 duration-300 cursor-pointer">
              <CardContent className="flex flex-col items-center py-6">
                <img
                  src={
                    product.images && product.images[0]
                      ? product.images[0]
                      : "https://cdn.dummyjson.com/product-images/3/1.jpg"
                  }
                  alt={product.title}
                  className="h-36 w-full object-contain mb-2"
                />
                <h2 className="font-semibold text-gray-600 text-center">
                  {product.title}
                </h2>
                <p className="mt-2 text-green-700 font-bold">${product.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}

      </div>
    </div>
  );
}