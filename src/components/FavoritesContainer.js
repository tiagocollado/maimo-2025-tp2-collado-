"use client";

import { useAppcontext } from "@/contexts/AppContext";
import Image from "next/image";
import Link from "next/link";

const FavoritesContainer = () => {
  const { favorites, handleRemoveFromFavorites } = useAppcontext();

  if (favorites.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No agregaste ninguna película a favoritos.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 mt-6">
        {favorites.map((movie) => (
          <div
            key={movie.id}
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-lg shadow-md transition cursor-pointer"
          >
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.image}`}
                alt={movie.title}
                width={300}
                height={450}
                className="rounded mb-2 w-full object-cover"
              />
            </Link>
            <h3 className="text-lg font-bold line-clamp-1">{movie.title}</h3>
            <button
              onClick={() => handleRemoveFromFavorites(movie.id)}
              className="mt-2 px-3 py-1 rounded text-sm font-medium bg-red-600 hover:bg-red-500"
            >
              Quitar de favoritos
            </button>
          </div>
        ))}
      </div>

      <div className="text-center my-8">
        <Link
          href="/"
          className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded transition"
        >
          ← Volver al inicio
        </Link>
      </div>
    </>
  );
};

export default FavoritesContainer;
