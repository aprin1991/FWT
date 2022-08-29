import React from "react";
import { Link } from "react-router-dom";
import { TCharacterCardProps } from "../types";

const CharacterCard = ({ character }: TCharacterCardProps) => {
  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/5 p-2 lg:p-0">
      <Link to={`/hero/${character.id}`}>
        <figure className="overflow-hidden card-hover relative">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className="w-full h-64 lg:h-80 object-cover"
          />
          <figcaption className="lg:absolute left-0 top-0 w-full p-4 md:p-8 flex flex-col justify-center items-start h-full bg-black bg-opacity-70 z-20 lg:opacity-0 transition-all hover:opacity-100">
            <h6 className="text-white text-lg font-bold truncate">
              {character.name}
            </h6>
            <p className="hidden lg:block text-white text-md">
              {character.description}
            </p>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default CharacterCard;
