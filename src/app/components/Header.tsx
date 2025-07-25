"use client";

import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";


export default function Header() {
  return (
    <>
    <header className="bg-gray-900 text-white py-4 px-6 ">
        <div className=" w-[1400px] m-auto flex justify-between items-center">

        <Link href="/" className="text-xl font-bold">
            <span className="flex items-center gap-2">
                <TiShoppingCart className="text-3xl"/> 
                MiniStore
            </span>
      </Link>

      <nav className="space-x-4">
        <Link href="/cart" className="hover:underline">
          Cart
        </Link>
        <Link href="/admin/login" className="hover:underline">
          Admin
        </Link>
      </nav>
      
      
</div>
    </header>
    </>
  );
}