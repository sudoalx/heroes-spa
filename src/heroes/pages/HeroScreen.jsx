import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroScreen = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container mt-5">
      <div className="flex justify-center items-center gap-4 rounded-md shadow-md p-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="w-1/2 rounded-md shadow-md aspect-w-16 aspect-h-9 object-cover max-w-sm animate__animated animate__fadeInLeft"
        />
        <div className="flex flex-col gap-4 animate__animated animate__fadeIn">
          <h1 className="text-2xl font-bold">{`Hero: ${hero.superhero}`}</h1>
          <ul>
            <li className="list-none">{`Alter ego: ${hero.alter_ego}`}</li>
            <li className="list-none">{`Publisher: ${hero.publisher}`}</li>
            <li className="list-none">{`Primera aparición: ${hero.first_appearance}`}</li>
          </ul>
          <h5 className="text-xl font-bold">Characters</h5>
          <p className="text-base">{hero.characters}</p>
          <button
            className="btn btn-primary mt-4 text-white"
            onClick={onNavigateBack}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};
