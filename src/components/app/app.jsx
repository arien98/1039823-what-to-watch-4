import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, releaseDate, filmTitles} = props;

  return <Main
    title = {title}
    genre = {genre}
    releaseDate = {releaseDate}
    filmTitles = {filmTitles}
  />;
};

export default App;
