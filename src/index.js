import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const FILM_TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
  `Show more`,
];

const descFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: new Date(2014, 5, 5),
};


const init = () => {
  ReactDOM.render(
      <App
        title = {descFilm.title}
        genre = {descFilm.genre}
        releaseDate = {descFilm.releaseDate}
        filmTitles = {FILM_TITLES}
      />,
      document.querySelector(`#root`)
  );
};

init();
