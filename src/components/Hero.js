'use client';

import Slider from "react-slick";
import Image from "next/image";

export default function Hero({ movies, imageBase }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="mb-6">
      <Slider {...settings}>
        {movies.slice(0, 5).map((movie) => (
          <div key={movie.id} className="relative h-[500px]">
            <Image
              src={`${imageBase}${movie.backdrop_path}`}
              alt={movie.title}
              fill
              className="object-cover rounded"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <h2 className="text-2xl font-bold">{movie.title}</h2>
              <p className="text-sm line-clamp-2">{movie.overview}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
