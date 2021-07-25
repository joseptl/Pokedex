import React from "react";
import logo from "./pokeball.png";
import "./Pokemon.scss";

export default function PokemonV2({ data, handleShow }) {
  const handleClick = () => {
    handleShow(data);
  };

  return (
    <>
      <div
        className={`col-3 Pokemon col-center ${data.type1}`}
        id={data.id}
        onClick={handleClick}
      >
        <img className="pokeball" src={logo} alt="background" />
        <figure>
          <img src={data.avatar} alt={data.name} />
        </figure>
        <h4>#{data.id}</h4>
      </div>
    </>
  );
}
