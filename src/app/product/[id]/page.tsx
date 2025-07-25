"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Product = {
  _id: string;
  name: string;
  price: number;
  images: string[];
  description?: string;
};

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api.freeapi.app/api/v1/public/randomproducts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.data) {
            setProduct(data.data);
          } else {
            console.error("Unexpected data format:", data);
          }
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
        });
    }
  }, [id]);

  if (!product) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={
            product.images && product.images.length > 0
              ? product.images[0]
              : "/placeholder.png"
          }
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-contain border p-4 rounded"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.png";
          }}
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-green-600 font-semibold text-xl">
            ${product.price}
          </p>
          <p className="text-gray-700">
            {product.description || "No description available."}
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}