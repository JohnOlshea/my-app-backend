"use client"
import React, { useState, lazy, Suspense } from 'react';


import Image from "next/image";
import Link from 'next/link';

import { Youtube, Instagram, Twitter } from 'lucide-react';

import Button from "@/components/landing/button";
import MovieSection from "@/components/landing/MovieSection";
const MovieDetailModal = lazy(() => import("@/components/landing/MovieDetailModal"));

const newOnStreaming = [
  {
    id: 1,
    title: 'Movie Title 1',
    description: 'Best Movie for movie title 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, hic? Modi enim numquam tenetur, voluptatum debitis fuga. Illum, nobis modi. Nobis, vero! Ipsa, deleniti blanditiis nostrum ab eius laboriosam facilis.',
    rating: 7.7,
    releaseDate: 'July 26, 2024',
    imageUrl: 'https://res.cloudinary.com/dc3apwy48/image/upload/v1727087693/ixkzevvaqd8eu90gmq90.jpg',
  },
  {
    id: 2,
    title: 'Ted 2',
    description: 'When you are in this realm New Best Movie for title 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, hic? Modi enim numquam tenetur, voluptatum debitis fuga. Illum, nobis modi. Nobis, vero! Ipsa, deleniti blanditiis nostrum ab eius laboriosam facilis.',
    rating: 2.9,
    releaseDate: 'July 26, 2024',
    imageUrl: 'https://res.cloudinary.com/dc3apwy48/image/upload/v1727087693/ixkzevvaqd8eu90gmq90.jpg',
  },
  {
    id: 3,
    title: 'Inception',
    description: 'A man trying to make a movie Title 3 for the next title of the third Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, hic? Modi enim numquam tenetur, voluptatum debitis fuga. Illum, nobis modi. Nobis, vero! Ipsa, deleniti blanditiis nostrum ab eius laboriosam facilis.',
    rating: 4.5,
    releaseDate: 'July 26, 2024',
    imageUrl: 'https://res.cloudinary.com/dc3apwy48/image/upload/v1727087693/ixkzevvaqd8eu90gmq90.jpg',
  },
  {
    id: 4,
    title: 'Movie Title 4',
    description: 'Best Movie',
    rating: 8.3,
    releaseDate: 'July 26, 2024',
    imageUrl: 'https://res.cloudinary.com/dc3apwy48/image/upload/v1727087693/ixkzevvaqd8eu90gmq90.jpg',
  },
  {
    id: 5,
    title: 'Movie Title 5',
    description: 'Best Movie',
    rating: 9.0,
    releaseDate: 'July 26, 2024',
    imageUrl: 'https://res.cloudinary.com/dc3apwy48/image/upload/v1727087693/ixkzevvaqd8eu90gmq90.jpg',
  },
];

interface Movie {
  id: number;
  title: string;
  rating: number;
  description: string;
  releaseDate: string;
  imageUrl: string;
}

export default function Home() {
  // const [activeMovie, setActiveMovie] = useState<Movie | null>(null);
  const [activeMovie, setActiveMovie] = useState<Movie>(newOnStreaming[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const handleOpenMovie = (movie: Movie) => {
    setActiveMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-4 lg:py-14">
      {/* Header section */}
      <header className="text-center lg:text-left grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-1 mb-5 lg:mb-10 items-center">
        <Link href="/" className="lg:mr-10 grid-row-1 lg:grid-row-auto lg:grid-col-1" aria-label="Home">
          <Image
            src="https://res.cloudinary.com/dc3apwy48/image/upload/v1727179897/yokrkymm3yuecy7pmyul.png"
            alt="MovieTime Logo"
            width={70}
            height={70}
            priority
            className="inline-block w-auto h-auto"
          />
        </Link>

        <nav className="lg:col-start-2 lg:col-span-1 mt-4 lg:mt-0">
          <ul className="flex gap-5">
            <li>
              <Link className="text-[#e5241a] font-semibold" href="/">Calendar</Link>
            </li>
            <li>
              <Link className="text-white font-semibold" href="/">Latest reboots</Link>
            </li>
            <li>
              <Link className="text-white font-semibold" href="/">Latest Sequels</Link>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center lg:justify-start gap-2 lg:ml-10 row-start-3 lg:row-auto lg:col-start-3">
          <Button href="/" size="large" variant="primary">
            AppStore
          </Button>
          <Button href="/" size="large" variant="primary">
            Google Play
          </Button>
        </div>

        <div className="text-white row-start-2 lg:row-auto lg:col-span-full mb-2 lg:mb-0 mt-2 lg:mt-0">
          <h1 className="text-2xl lg:text-5xl font-semibold lg:mb-1">Don&apos;t Miss A Worth Movie</h1>
          <p className="text-sm lg:text-base">Find and track upcoming films and shows</p>
        </div>

      </header>

      {/* Hero section */}
      <section className="bg-[#701a25] relative rounded-xl overflow-hidden h-[20.21rem] mb-[50px]">
        {/* <Image
          src="https://res.cloudinary.com/dc3apwy48/image/upload/v1727086650/mg0nhohci0jacmrgixpq.png"
          alt="Hero image showcasing popular movies"
          layout="fill"
          objectFit="cover"
          w
          h
          // lazyload
        /> */}
        <div className="absolute bottom-[13%] lg:bottom-[19%] left-[5%]">
          <p className="text-[#f5c618] lg:mb-2 text-sm lg:text-base">June 1, 2024
            <span className="text-white ml-2">|</span>
            <span className="text-white ml-2">7.7</span>
          </p>
          <h2 className="text-white text-xl lg:text-5xl font-bold mb-2 lg:mb-4">
            Movie title comes here
          </h2>
          <Button href="/" className="uppercase" size="small" variant="secondary">
            NetFlix
          </Button>
        </div>
      </section>

      {/* Category buttons */}
      <div className="flex gap-4 mb-8 items-center">
        {/* As a button */}
        <Button className="uppercase">
          All
        </Button>

        {/* As a link */}
        <Button href="/" variant="secondary" className="uppercase">
          Netflix
        </Button>

        {/* With custom class */}
        <Button variant="outline" className="uppercase">
          Amazon
        </Button>

        {/* Disabled button */}
        <Button disabled>
          Unavailable
        </Button>
      </div>

      {activeMovie && (
        <Suspense fallback={<div>Loading...</div>}>
          <MovieDetailModal
            open={isModalOpen}
            setOpen={setIsModalOpen}
            movie={activeMovie}
          />
        </Suspense>
      )}

      {/* New on streaming section */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-bold flex justify-between items-center mb-4">
          New on streaming
          <span className="text-base font-normal">(12)</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {Array(5).fill(0).map((_, index) => (
            <div key={index} className="relative rounded-lg bg-[#292a3e] aspect-[2/3]">
              {/* <Image
                src="https://res.cloudinary.com/dc3apwy48/image/upload/v1727087693/ixkzevvaqd8eu90gmq90.jpg"
                alt={`Movie poster ${index + 1}`}
                layout="fill"
                objectFit="cover"
                // lazy
              /> */}
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-between items-center">
                  <span className="bg-[#e50913] flex justify-center items-center h-7 w-7 rounded-full font-extrabold p-1 text-xl">N</span>
                  <p className="text-white font-bold">7.7</p>
                </div>
                <div className="">
                  <p className="text-[#f5c618] text-xs mb-1">July 26, 2024</p>
                  <h3 className="text-white">Movie title comes here</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MovieSection
        title="Playing now"
        movies={newOnStreaming}
        count={newOnStreaming.length}
        handleOpenMovie={() => handleOpenMovie(newOnStreaming[0])}
      />
      <MovieSection
        title="Coming soon"
        movies={newOnStreaming}
        count={newOnStreaming.length}
        handleOpenMovie={() => handleOpenMovie(newOnStreaming[1])}
      />
      <MovieSection
        title="Popular this week"
        movies={newOnStreaming}
        count={newOnStreaming.length}
        handleOpenMovie={() => handleOpenMovie(newOnStreaming[2])}
      />

      {/* Footer */}
      <footer className="text-white mt-2">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2">
          <p className="mb-2 lg:mb-0">&copy; 2024 Movietime</p>
          <div className="flex items-center gap-4">
            <Link href="/" aria-label="Instagram">
              <Instagram className="text-[#f5c618] w-5 h-5" />
            </Link>
            <Link href="/" aria-label="YouTube">
              <Youtube className="text-[#f5c618] w-6 h-6" />
            </Link>
            <Link href="/" aria-label="Twitter">
              <Twitter className="text-[#f5c618] w-6 h-6" />
            </Link>
          </div>
        </div>
        <p className="text-[0.65rem] lg:text-xs lg:text-xs mb-2">
          This application uses TMDB APIs but is not endorsed, certified, or otherwise approved Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo repudiandae commodi laborum eos, sed blanditiis impedit architecto! Amet eveniet voluptas sapiente quisquam, totam ratione consectetur nihil consequuntur sit quis.
        </p>
        <ul className="flex flex-wrap gap-4 text-xs lg:text-sm">
          <li><Link href="/" className="hover:underline">Terms of use</Link></li>
          <li><Link href="/" className="hover:underline">Privacy Policy</Link></li>
          <li><Link href="/" className="hover:underline">Disclaimer</Link></li>
          <li><Link href="/" className="hover:underline">Contact us</Link></li>
        </ul>
      </footer>
    </div>
  );
}
