import Link from "next/link";
import MoviesGrid from "@/components/MoviesGrid";

export default async function GenreMoviesPage({ params }) {
  const { id } = params;

  const moviesRes = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=8d155a452063365b70d7e38e2609b662&with_genres=${id}`,
    { cache: "no-store" }
  );
  const moviesData = await moviesRes.json();

  const genresRes = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=8d155a452063365b70d7e38e2609b662`,
    { cache: "no-store" }
  );
  const genresData = await genresRes.json();

  let genre = null;
  for (let i = 0; i < genresData.genres.length; i++) {
    if (String(genresData.genres[i].id) === id) {
      genre = genresData.genres[i];
      break;
    }
  }

  return (
    <main className="pt-24 px-4">
      <Link
        href="/genres"
        className="inline-block mb-4 text-sky-400 hover:underline"
      >
        ← Volver a todos los géneros
      </Link>

      <h1 className="text-2xl font-bold mb-4">
        Películas de {genre ? genre.name : "género desconocido"}
      </h1>

      <MoviesGrid
        movies={moviesData.results}
        imageBase="https://image.tmdb.org/t/p/original"
      />
    </main>
  );
}
