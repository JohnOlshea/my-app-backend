"use client"

import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Button from "@/components/landing/button";
import Image from "next/image";

// import { Movie } from "@/types";

interface Movie {
  id: number;
  title: string;
  rating: number;
  description: string;
  releaseDate: string;
  imageUrl: string;
}

interface MovieDetailModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  movie: Movie;
}

// const MovieDetailModal: React.FC<MovieDetailModalProps> = ({ open, setOpen, movie }) => {
// };

const MovieDetailModal: React.FC<MovieDetailModalProps> = React.memo(({ open, setOpen, movie }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>

        <div className="flex justify-start lg:justify-between flex-col lg:flex-row lg:gap-10">
          <div className="w-[170px] h-[240px] hidden lg:block">
            <Image
              src="https://res.cloudinary.com/dc3apwy48/image/upload/v1727086650/mg0nhohci0jacmrgixpq.png"
              alt="Movie detail"
              width={170}
              height={240}
              className="object-cover h-full rounded-lg "
              loading="lazy"  // Lazy load images for performance
            />
          </div>
          <div className="lg:flex-1">
            <p className="text-[#f5c618] lg:mb-2.5 text-sm lg:text-base">{movie.releaseDate}
              <span className="text-white ml-2">|</span>
              <span className="text-white ml-2">{movie.rating}</span>
            </p>
            <h2 className="text-white text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5">
              {movie.title}
            </h2>
            <div className="mb-2">
              <Button href="/" className="uppercase" size="small" variant="secondary">
                NetFlix
              </Button>
            </div>
            <p className="text-white mb-2.5 text-sm lg:text-base">{movie.description}</p>
            <div className="bg-[#61382d] flex justify-center items-center h-[14.3rem] lg:max-w-[70%]">
              <p className="text-3xl font-bold">Trailer</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-white text-sm hidden lg:block">
            <div className="flex justify-between">
              <p className="w-[11rem]">Cast</p>
              <p className="w-[12rem]">Ryan Reynolds, Hugh Jackman, Emama corrin</p>
            </div>
            <div className="flex justify-between">
              <p className="w-[11rem]">Director</p>
              <p className="w-[12rem]">Shawn Levy</p>
            </div>
            <div className="flex justify-between">
              <p className="w-[11rem]">Producers</p>
              <p className="w-[12rem]">Smite my Bell, Louis D'espacito, George Deweee</p>
            </div>
            <div className="flex justify-between">
              <p className="w-[11rem]">Writers</p>
              <p className="w-[12rem]">Ryan Reynolds, Rhett Reese wheresmyspoon, Paul wearneck</p>
            </div>
            <div className="flex justify-between">
              <p className="w-[11rem]">Production company</p>
              <p className="w-[12rem]">Mayvel Studios</p>
            </div>
          </div>
          <div className="text-white mt-3 lg:hidden flex justify-between">
            <p className="font-bold">Details</p>
            <span className="w-5 h-5 rounded-full bg-white"></span>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
});

MovieDetailModal.displayName = "MovieDetailModal";

export default MovieDetailModal;
