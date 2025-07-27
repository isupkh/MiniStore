"use client";

import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import { RiAdminLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-4 sm:px-6">
      <div className="max-w-full sm:w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <Link href="/" className="text-2xl font-bold">
          <p className="text-3xl sm:text-4xl">MiniStore</p>
        </Link>

        <nav className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center">
          <Link
            href="/cart"
            className="hover:scale-110 duration-300 hover:text-amber-300"
          >
            <span className="flex gap-2 items-center">
              <TiShoppingCart className="text-2xl" />
              <p className="text-lg sm:text-xl font-semibold">Cart</p>
            </span>
          </Link>

          <Link
            href="/admin/login"
            className="hover:scale-110 duration-300 hover:text-amber-300"
          >
            <span className="flex gap-2 items-center">
              <RiAdminLine className="text-2xl" />
              <p className="text-lg sm:text-xl font-semibold">Admin</p>
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}