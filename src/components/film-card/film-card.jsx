import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {

  const {onFilmCardClick, filmData, children, isVideoPlaying, onMouseOver, onMouseOut} = props;
  const {title, id, smallPoster} = filmData;

  return (
    <article
      className="small-movie-card catalog__movies-card"
    >
      <div
        className="small-movie-card__image"
        onClick={onFilmCardClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        data-id={id}
      >
        {isVideoPlaying
          ? children
          : <img className="small-movie-card__pic" src={smallPoster} alt={title} width="280" height="175" />
        }
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
  filmData: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
};

export default FilmCard;
