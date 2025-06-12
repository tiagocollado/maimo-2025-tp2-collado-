import Image from "next/image";

export default function MovieCard({ movie, imageBase }) {
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
    </div>
  );
}
