"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "./components/ui/card"; // Adjust path if needed

type Product = {
  _id: string;
  name: string;
  price: number;
  images: string[];
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
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
              name: "Mock Product 1",
              price: 19.99,
              images: ["https://cdn.dummyjson.com/product-images/1/1.jpg", "https://cdn.dummyjson.com/product-images/1/2.jpg"],
            },
            {
              _id: "2",
              name: "Mock Product 2",
              price: 39.99,
              images: ["https://picsum.photos/150"],
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
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="flex flex-wrap gap-6">
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <Card className="w-60 hover:shadow-md transition cursor-pointer">
              <CardContent className="p-4 flex flex-col items-center">
                <img
                  src={
                    product.images && product.images[0]
                      ? product.images[0]
                      : "https://cdn.dummyjson.com/product-images/3/1.jpg"
                  }
                  alt={product.name}
                  className="h-32 w-full object-contain mb-2"
                />
                <h2 className="font-semibold text-center">{product.name}</h2>
                <p className="mt-2 text-green-700 font-bold">${product.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}