"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "./components/ui/card"; 

type Product = {
  _id: string;
  name: string;
  price: number;
  images: string[];
};

export default function HomePage() {
  const [product, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomproducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("API raw response:", data);

        if (
          data &&
          typeof data === "object" &&
          data.success &&
          Array.isArray(data.data)
        ) {
          setProducts(data.data);
        } else {
          console.warn("Unexpected API format. Using mock data.");
          setProducts([
            {
              _id: "1",
              name: "iPhone 9",
              price: 549,
              images: ["https://cdn.dummyjson.com/product-images/1/1.jpg"],
            },
            {
              _id: "2",
              name: "iPhone X",
              price: 899,
              images: ["https://cdn.dummyjson.com/product-images/2/1.jpg"],
            },
            {
              _id: "3",
              name: "Samsung Universe 9",
              price: 1249,
              images: ["https://cdn.dummyjson.com/product-images/3/thumbnail.jpg"],
            },
            {
              _id: "4",
              name: "OPPOF19",
              price: 280,
              images: ["https://cdn.dummyjson.com/product-images/4/1.jpg"],
            },
            {
              _id: "5",
              name: "Huawei P30",
              price: 499,
              images: ["https://cdn.dummyjson.com/product-images/5/1.jpg"],
            },
            {
              _id: "6",
              name: "MacBook Pro",
              price: 1749,
              images: ["https://cdn.dummyjson.com/product-images/6/1.png"],
            },
            {
              _id: "7",
              name: "Samsung Galaxy Book",
              price: 1499,
              images: ["https://cdn.dummyjson.com/product-images/7/1.jpg"],
            },
            {
              _id: "8",
              name: "Microsoft Laptop",
              price: 1495,
              images: ["https://cdn.dummyjson.com/product-images/8/1.jpg"],
            },
            {
              _id: "9",
              name: "Infinix INBOOK",
              price: 1099,
              images: ["https://cdn.dummyjson.com/product-images/9/1.jpg"],
            },
            {
              _id: "6",
              name: "HP Pavilion 15-DK1056WM",
              price: 1099,
              images: ["https://cdn.dummyjson.com/product-images/10/1.jpg"],
            },
            
          ]);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(true);
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
    <div className="w-[1400px] container mx-auto py-16 ">
      <h1 className="text-2xl font-bold mb-8 text-gray-700">All Products</h1>
      <div className="flex flex-wrap gap-8">

        {product.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <Card className="items-center py-6 w-63 hover:scale-105 duration-300 cursor-pointer">
              <CardContent className=" flex flex-col">
                <img
                  src={
                    product.images && product.images[0]
                      ? product.images[0]
                      : "https://cdn.dummyjson.com/product-images/3/1.jpg"
                  }
                  alt={product.name}
                  className="h-36 w-full object-contain mb-2"
                />
                <h2 className="font-semibold text-gray-600 ">{product.name}</h2>
                <p className="mt-2 text-green-700 font-bold">${product.price}</p>
              </CardContent>
            </Card>
          </Link>

        ))}
      </div>
    </div>
  );
}