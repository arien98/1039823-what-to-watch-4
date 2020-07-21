import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {filmsData} from "./mocks/films.js";

const getFilmsTitles = () => {
  return filmsData.map((element) => {
    return element.title;
  });
};

const init = () => {
  ReactDOM.render(
      <App
        descFilm={filmsData[0]}
        filmsTitles={getFilmsTitles()}
        filmsData={filmsData}
      />,
      document.querySelector(`#root`)
  );
};

init();
