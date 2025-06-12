import Link from "next/link";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, imageBase }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie} imageBase={imageBase} />
        </Link>
      ))}
    </div>
  );
}
