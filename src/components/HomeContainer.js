'use client';

import MoviesGrid from "./MoviesGrid";
import Hero from "./Hero";

export default function HomeContainer({ movies, imageBase }) {
  return (
    <div className="p-4">
      <Hero movies={movies} imageBase={imageBase} />
      <h1 className="text-2xl font-bold mb-4">Películas Trending</h1>
      <MoviesGrid movies={movies} imageBase={imageBase} />
    </div>
  );
}
