"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { Movie } from "@/types";
import React, { Dispatch, SetStateAction } from "react";

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
        <DialogHeader>
          <DialogTitle>{movie.title}</DialogTitle>
          <DialogDescription>{movie.description}</DialogDescription>
        </DialogHeader>
        {/* Additional movie details */}
      </DialogContent>
    </Dialog>
  );
});

MovieDetailModal.displayName = "MovieDetailModal";

export default MovieDetailModal;
