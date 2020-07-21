import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {filmsData} from "./mocks/films.js";

const init = () => {
  ReactDOM.render(
      <App
        descFilm={filmsData[0]}
        filmsData={filmsData}
      />,
      document.querySelector(`#root`)
  );
};

init();
