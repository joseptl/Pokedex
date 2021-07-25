import React, { useState } from "react";
import Buscador from "../Components/Buscador";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NotFound from "../Components/NotFound";
import ToTop from "../Components/ToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.scss";

export default function Main() {
  const [visibility, setVisibility] = useState(false);

  window.onscroll = () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  const generationList = [
    { generacion: "I", link: "limit=151&offset=0" },
    { generacion: "II", link: "limit=100&offset=151" },
    { generacion: "III", link: "limit=135&offset=251" },
    { generacion: "IV", link: "limit=107&offset=386" },
    { generacion: "V", link: "limit=156&offset=493" },
    { generacion: "VI", link: "limit=72&offset=649" },
    { generacion: "VII", link: "limit=88&offset=721" },
    { generacion: "VIII", link: "limit=83&offset=809" },
  ];
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Buscador />
        </Route>
        {generationList.map((e, index) => (
          <Route
            key={index}
            exact
            path={`/Gen-${e.generacion}`}
            children={<Buscador generation={e.link} />}
          />
        ))}
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
      {visibility && <ToTop />}
    </Router>
  );
}
