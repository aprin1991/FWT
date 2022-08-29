import React from "react";
import { Link } from "react-router-dom";
import { TCharacterCardProps } from "../types";

const CharacterCard = ({ character }: TCharacterCardProps) => {
  return (
    <div className="w-1/5">
      <Link to={`/hero/${character.id}`}>
        <figure className="overflow-hidden card-hover relative">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className="w-full h-80 object-cover"
          />
          <figcaption className="absolute left-0 top-0 w-full p-8 flex flex-col justify-center items-start h-full bg-black bg-opacity-70 z-20 opacity-0 transition-all hover:opacity-100">
            <h6 className="text-white text-lg font-bold">{character.name}</h6>
            <p className="text-white text-md">{character.description}</p>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default CharacterCard;
