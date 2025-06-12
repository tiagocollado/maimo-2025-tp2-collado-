import HomeContainer from "@/components/HomeContainer";

export default async function Home() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662",
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <HomeContainer
      movies={data.results}
      imageBase="https://image.tmdb.org/t/p/original"
    />
  );
}
