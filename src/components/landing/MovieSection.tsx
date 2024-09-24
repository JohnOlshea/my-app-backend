import React from 'react';

interface Movie {
  id: number;
  title: string;
  rating: number;
  releaseDate: string;
  imageUrl: string;
}

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  count: number;
  handleOpenMovie: () => void;
}

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies, count, handleOpenMovie }) => {
  return (
    <section className="mb-8">
      <h2 className="text-white text-2xl font-bold flex justify-between items-center mb-4">
        {title}
        <span className="text-base font-normal">({count})</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {movies.map((movie) => (
          <div
            onClick={handleOpenMovie}
            key={movie.id}
            className="relative rounded-lg bg-[#292a3e] aspect-[2/3] overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
          >
            {/* <Image
              src={movie.imageUrl}
              alt={`Movie poster ${movie.title}`}
              fill
              className="object-cover rounded-lg transition duration-300 ease-in-out"
              loading="lazy"  // Lazy load images for performance
              quality={75}    // Lower image quality for faster load (optional)
            /> */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between items-center">
                <span className="bg-[#e50913] flex justify-center items-center h-7 w-7 rounded-full font-extrabold p-1 text-xl">N</span>
                <p className="text-white font-bold">{movie.rating}</p>
              </div>
              <div>
                <p className="text-[#f5c618] text-xs mb-1">{movie.releaseDate}</p>
                <h3 className="text-white">{movie.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(MovieSection); // Memoize for optimization