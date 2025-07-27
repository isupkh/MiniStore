"use client";

import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import { RiAdminLine } from "react-icons/ri";


export default function Header() {
  return (
    <>
    <header className="bg-gray-900 text-white py-4 px-6 ">

      <div className=" w-[1400px] m-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
            <p className="text-4xl ">MiniStore</p>
      </Link>

      <nav className="flex gap-12 items-center ">
        <Link href="/cart" className="hover:scale-110 duration-300 hover:text-amber-300">
          <span className="flex gap-3 items-center">
            <TiShoppingCart className="text-2xl"/> 
            <p className="text-xl font-semibold">Cart</p>
          </span>
        </Link>

        <Link href="/admin/login" className="hover:scale-110 duration-300 hover:text-amber-300">
        <span className="flex gap-3 items-center">
            <RiAdminLine className="text-2xl"/>
            <p className="text-xl font-semibold">Admin</p>
          </span>
        
        </Link>
      </nav>
      </div>
      
    </header>
    </>
  );
}