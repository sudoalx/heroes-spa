import React from "react";
import { HeroCard } from "../components/";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchScreen = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const query = queryString.parse(location.search);

  const { q = "" } = query;

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length > 50) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Search</h1>
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            name="searchText"
            className="input border border-gray-400 rounded p-2 focus:outline-none focus:border-primary"
            placeholder="Searching..."
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
        </form>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Results</h2>
      {(heroes.length === 0 &&
        (q.length === 0 ? (
          <p className="align-middle text-center">
            Start searching by typing the name of the hero in the search box.
          </p>
        ) : (
          <p className="align-middle text-center wrap">
            There are no heroes with the name "<strong>{q}</strong>" in the DB.
          </p>
        ))) ||
        (heroes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        ))}
    </div>
  );
};
