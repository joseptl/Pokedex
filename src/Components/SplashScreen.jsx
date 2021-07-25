import React, { useState, useEffect } from "react";
import titleBall from "./titleBall.png";
import "./SplashScreen.scss";

export default function SplashScreen() {
  const [active, setActive] = useState(true);
  useEffect((e) => {
    setTimeout((e) => {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {active && (
        <div className="splashScreen">
          <img className="splashLogo" src={titleBall} alt="splash" />
          <p>Pokédex</p>
        </div>
      )}
    </>
  );
}
