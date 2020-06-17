import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {title, genre, releaseDate, filmTitles} = props;

  return <Main
    title = {title}
    genre = {genre}
    releaseDate = {releaseDate}
    filmTitles = {filmTitles}
  />;
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Date),
  filmTitles: PropTypes.arrayOf(PropTypes.string),
};

export default App;
