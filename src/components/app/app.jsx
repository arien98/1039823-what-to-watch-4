import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {descFilm, filmsTitles, filmsData} = props;

  return <Main
    descFilm={descFilm}
    filmsTitles={filmsTitles}
    filmsData={filmsData}
  />;
};

App.propTypes = {
  descFilm: PropTypes.object,
  filmsTitles: PropTypes.arrayOf(PropTypes.string),
  filmsData: PropTypes.arrayOf(PropTypes.object),
};

export default App;
