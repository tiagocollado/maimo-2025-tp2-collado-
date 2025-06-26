export default async function GenresPage() {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=8d155a452063365b70d7e38e2609b662",
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <main className="pt-24 px-4">
      <h1 className="text-2xl font-bold mb-4">Géneros de películas</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.genres.map((genre) => (
          <li key={genre.id}>
            <a
              href={`/genres/${genre.id}`}
              className="block bg-zinc-800 hover:bg-zinc-700 text-white p-4 rounded text-center transition"
            >
              {genre.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
