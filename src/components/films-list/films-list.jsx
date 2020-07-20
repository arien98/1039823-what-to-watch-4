import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const FilmsList = (props) => {
  const {filmsTitles, onFilmCardClick, filmsData} = props;
  return (
    <div className="catalog__movies-list">
      {filmsTitles.map((element, i) => <FilmCard
        key={element + i}
        title = {element}
        onFilmCardClick={onFilmCardClick}
        filmData={filmsData[i]}
      />)}
    </div>
  );
};

FilmsList.propTypes = {
  filmsTitles: PropTypes.arrayOf(PropTypes.string),
  onFilmCardClick: PropTypes.func.isRequired,
  filmsData: PropTypes.arrayOf(PropTypes.object),
};

export default FilmsList;
