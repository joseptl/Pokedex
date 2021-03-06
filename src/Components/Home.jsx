import React from "react";
import { useHistory } from "react-router-dom";
import icon from "./pngegg.png";
import "./Home.scss";
import { useEffect } from "react";

export default function Home({ setShowNav }) {
  let history = useHistory();

  function handleClick(e, el) {
    history.push(`/Gen-${(e, el)}`);
  }

  useEffect(
    (e) => {
      setShowNav(false);
    },
    [setShowNav]
  );

  return (
    <>
      <section>
        <article>
          <h3>Select a generation</h3>
          <div className="home-list">
            <div
              onClick={(e) => {
                handleClick(e, "I");
              }}
              className="gen-container"
            >
              <img src={icon} alt="pokeball-icon" />
              <h5>First Gen</h5>
            </div>
            <div
              onClick={(e) => {
                handleClick(e, "II");
              }}
              className="gen-container"
            >
              <img src={icon} alt="pokeball-icon" />
              <h5>Second Gen</h5>
            </div>
            <div
              onClick={(e) => {
                handleClick(e, "III");
              }}
              className="gen-container"
            >
              <img src={icon} alt="pokeball-icon" />
              <h5>Third Gen</h5>
            </div>
            <div
              onClick={(e) => {
                handleClick(e, "IV");
              }}
              className="gen-container"
            >
              <img src={icon} alt="pokeball-icon" />
              <h5>Fourth Gen</h5>
            </div>
            <div
              onClick={(e) => {
                handleClick(e, "V");
              }}
              className="gen-container"
            >
              <img src={icon} alt="pokeball-icon" />
              <h5>Fifth Gen</h5>
            </div>
            <div
              onClick={(e) => {
                handleClick(e, "VI");
              }}
              className="gen-container"
            >
              <img src={icon} alt="pokeball-icon" />
              <h5>Sixth Gen</h5>
            </div>
            <div
              onClick={(e) => {
                handleClick(e, "VII");
              }}
              className="gen-container"
            >
              <img src={icon} alt="pokeball-icon" />
              <h5>Seventh Gen</h5>
            </div>
            <div
              onClick={(e) => {
                handleClick(e, "VIII");
              }}
              className="gen-container"
            >
              <img src={icon} alt="pokeball-icon" />
              <h5>Eighth Gen</h5>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
