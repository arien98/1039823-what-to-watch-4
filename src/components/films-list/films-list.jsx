import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const FilmsList = (props) => {
  const {filmsTitles, onFilmHeaderClick, onFilmCardFocus, filmsData} = props;
  return (
    <div className="catalog__movies-list">
      {filmsTitles.map((element, i) => <FilmCard
        key={element + i}
        title = {element}
        onFilmHeaderClick={onFilmHeaderClick}
        onFilmCardFocus={onFilmCardFocus}
        filmData={filmsData[i]}
      />)}
    </div>
  );
};

FilmsList.propTypes = {
  filmsTitles: PropTypes.arrayOf(PropTypes.string),
  onFilmHeaderClick: PropTypes.func.isRequired,
  onFilmCardFocus: PropTypes.func.isRequired,
  filmsData: PropTypes.arrayOf(PropTypes.object),
};

export default FilmsList;
