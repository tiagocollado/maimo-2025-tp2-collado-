"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">TP Movies</h1>
        </Link>
        <div className="flex space-x-8 text-lg">
          <Link href="/" className="hover:text-sky-400">
            Inicio
          </Link>
          <Link href="/movies" className="hover:text-sky-400">
            Películas
          </Link>
          <Link href="/genres" className="hover:text-sky-400">
            Géneros
          </Link>
        </div>
        <form className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-white bg-opacity-20 placeholder-white text-white rounded-md pl-3 pr-10 py-1 focus:outline-none focus:bg-opacity-40"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 text-white hover:text-sky-400"
          >
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
}
