import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const descFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: new Date(2014, 5, 5)
};


const init = () => {
  ReactDOM.render(
      <App
        title = {descFilm.title}
        genre = {descFilm.genre}
        releaseDate = {descFilm.releaseDate}
      />,
      document.querySelector(`#root`)
  );
};

init();
