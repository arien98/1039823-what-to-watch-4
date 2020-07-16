import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {onFilmHeaderClick, onFilmCardFocus, filmData} = props;
  const {title, poster} = filmData;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      data-title={title}
      onFocus={onFilmCardFocus}
    >
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3
        className="small-movie-card__title"
        onClick={onFilmHeaderClick}
      >
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  onFilmHeaderClick: PropTypes.func.isRequired,
  onFilmCardFocus: PropTypes.func.isRequired,
  filmData: PropTypes.object,
};

export default FilmCard;
