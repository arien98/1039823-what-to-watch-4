import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {onFilmCardClick, onFilmCardFocus, filmData} = props;
  const {title, id, poster} = filmData;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onFocus={onFilmCardFocus}
    >
      <div
        className="small-movie-card__image"
        onClick={onFilmCardClick}
        data-id={id}
      >
        <img
          src={poster}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3
        className="small-movie-card__title"
        onClick={onFilmCardClick}
      >
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          data-id={id}
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardFocus: PropTypes.func.isRequired,
  filmData: PropTypes.object,
};

export default FilmCard;
