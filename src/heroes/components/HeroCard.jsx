import React from "react";
import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return;
  return (
    <>
      <h3 className="card-title">Characters</h3>
      <p>{characters}</p>
    </>
  );
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImage = `/assets/heroes/${id}.jpg`;
  return (
    <div className="card max-w-full max-h-full bg-base-100 shadow-xl image-full">
      <figure>
        <img src={heroImage} alt={superhero} className="w-full h-full" />
      </figure>
      <div className="card-body justify-between">
        <div>
          <h2 className="card-title">{superhero}</h2>
          <p>{alter_ego}</p>
        </div>

        <div>
          <CharactersByHero alter_ego={alter_ego} characters={characters} />
          <h3 className="card-title">{publisher}</h3>
          <p className="card-text bottom-0">
            <small>First appearance: {first_appearance}</small>
          </p>

          <div className="card-actions justify-end">
            <Link to={`/hero/${id}`} className="btn btn-primary">
              More info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
