import Link from "next/link";
import Image from "next/image";

export default async function MovieDetail({ params }) {
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=8d155a452063365b70d7e38e2609b662`,
    { cache: "no-store" }
  );
  const movie = await res.json();

  const imageBase = "https://image.tmdb.org/t/p/original";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <Image
            src={`${imageBase}${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded shadow w-full h-auto object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-sm text-zinc-400 mb-4">
            {movie.release_date} • {movie.runtime} min
          </p>
          <p className="text-base leading-relaxed">{movie.overview}</p>
          {/* Opcional: agregar géneros */}
          {movie.genres && (
            <div className="mt-4 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-zinc-800 text-sm px-3 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded transition"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
