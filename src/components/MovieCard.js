"use client";

import Image from "next/image";
import { useAppcontext } from "@/contexts/AppContext";

export default function MovieCard({ movie, imageBase }) {
  const { favorites, handleAddToFavorites, handleRemoveFromFavorites } =
    useAppcontext();

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleToggle = () => {
    if (isFavorite) {
      handleRemoveFromFavorites(movie.id);
    } else {
      handleAddToFavorites(movie.title, movie.poster_path, movie.id);
    }
  };

  return (
    <div className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-lg shadow-md transition cursor-pointer">
      <Image
        src={`${imageBase}${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
        className="rounded mb-2 w-full object-cover"
      />
      <h3 className="text-lg font-bold line-clamp-1">{movie.title}</h3>
      <button
        onClick={handleToggle}
        className={`mt-2 px-3 py-1 rounded text-sm font-medium ${
          isFavorite
            ? "bg-red-600 hover:bg-red-500"
            : "bg-sky-600 hover:bg-sky-500"
        }`}
      >
        {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
}
