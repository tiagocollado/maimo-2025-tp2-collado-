"use client";

import Link from "next/link";
import { useAppcontext } from "@/contexts/AppContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { favorites } = useAppcontext();
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer select-none">
            Moovies
          </h1>
        </Link>
        <div className="flex space-x-8 text-lg">
          <Link
            href="/"
            className={`hover:text-sky-400 ${
              isActive("/")
                ? "text-sky-400 font-semibold border-b-2 border-sky-400"
                : ""
            }`}
          >
            Películas
          </Link>
          <Link
            href="/genres"
            className={`hover:text-sky-400 ${
              isActive("/genres")
                ? "text-sky-400 font-semibold border-b-2 border-sky-400"
                : ""
            }`}
          >
            Géneros
          </Link>
          <Link
            href="/favorites"
            className={`hover:text-sky-400 ${
              isActive("/favorites")
                ? "text-sky-400 font-semibold border-b-2 border-sky-400"
                : ""
            }`}
          >
            Favoritos {favorites.length > 0 ? `(${favorites.length})` : ""}
          </Link>
        </div>

        <form className="flex items-center bg-zinc-800 rounded-md overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Buscar película..."
            className="bg-zinc-800 text-white placeholder-zinc-400 px-4 py-1 w-40 sm:w-60 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 text-sm font-semibold transition"
          >
            Ir
          </button>
        </form>
      </div>
    </nav>
  );
}
