import React, { useState, useEffect } from "react";
import PokemonV2 from "./PokemonV2";
import Formulario from "./Formulario";
import DetallePkmn from "./DetallePkmn";
import Loading from "./Loading";
import "./ListaPokemon.scss";
import Missing from "./Missing";

export default function ListaPokemonsV2({ url }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    type1: "",
    type2: "",
  });

  const handleClose = () => {
    setShow(false);
    setPokemonSelected(null);
  };
  const handleShow = (e) => {
    setPokemonSelected(e);
    setShow(true);
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleClick = (e, el) => {
    console.log(e.target);
    setFormValues({ ...formValues, [e.target.name]: el });
  };

  const handleClear = () => {
    setFormValues({
      name: "",
      type1: "",
      type2: "",
    });
  };

  useEffect(
    (e) => {
      setFormValues({
        name: "",
        type1: "",
        type2: "",
      });
    },
    [url]
  );

  useEffect(
    (e) => {
      setPokemons([]);
      const fetchData = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        const promises = await Promise.all(
          json.results.map((e) => fetch(e.url))
        )
          .then((responses) => {
            return responses;
          })
          .then((responses) => Promise.all(responses.map((r) => r.json())));
        const species = await Promise.all(
          promises.map((e) => fetch(e.species.url))
        )
          .then((responses) => {
            return responses;
          })
          .then((responses) => Promise.all(responses.map((r) => r.json())));
        species.forEach((e, index) =>
          setPokemons((pokemons) => [
            ...pokemons,
            {
              id: promises[index].id,
              name: promises[index].name,
              genera: species[index].genera[7].genus,
              avatar: promises[index].sprites.front_default,
              artwork:
                promises[index].sprites.other["official-artwork"].front_default,
              weight: promises[index].weight / 10,
              height: promises[index].height / 10,
              type1: promises[index].types[0].type.name,
              type2: promises[index].types[1]
                ? promises[index].types[1].type.name
                : "",
              description: species[index].flavor_text_entries.filter(
                (e) => e.language.name === "en"
              )[0].flavor_text,
            },
          ])
        );
      };
      fetchData(url);
    },
    [url]
  );

  return (
    <div>
      {pokemonSelected !== null && show === true && (
        <DetallePkmn
          show={show}
          handleClose={handleClose}
          e={pokemonSelected}
        />
      )}
      <div>
        {pokemons.length > 0 && (
          <Formulario
            handleClear={handleClear}
            onChange={handleChange}
            onClick={handleClick}
            formValues={formValues}
          />
        )}
      </div>
      <div className="row row-cols-8 ListaPokemon">
        {pokemons.length === 0 && <Loading />}
        {pokemons.length > 0 &&
          pokemons
            .filter((pokemon) => {
              return (
                pokemon.name.includes(formValues.name) &&
                pokemon.type1.includes(formValues.type1) &&
                pokemon.type2.includes(formValues.type2)
              );
            })
            .map((e, index) => (
              <PokemonV2 key={index} data={e} handleShow={handleShow} />
            ))}

        {pokemons.length !== 0 &&
          pokemons.filter((pokemon) => {
            return (
              pokemon.name.includes(formValues.name) &&
              pokemon.type1.includes(formValues.type1) &&
              pokemon.type2.includes(formValues.type2)
            );
          }).length === 0 && <Missing />}
      </div>
    </div>
  );
}
