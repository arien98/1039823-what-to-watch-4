import React from "react";
import PropTypes from "prop-types";

const OverviewTab = (props) => {
  const {ratingScore, ratingLevel, ratingCount, description, director, starring} = props;

  const starringText = starring.join(`, `);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingCount}</span>
        </p>
      </div>

    <div className="movie-card__text">
      <p>{description}</p>

      <p className="movie-card__director"><strong>Director: {director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {starringText}and other</strong></p>
    </div>
  </>
  );
};

OverviewTab.propTypes = {
  ratingScore: PropTypes.number,
  ratingLevel: PropTypes.string,
  ratingCount: PropTypes.number,
  description: PropTypes.string,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
};

export default OverviewTab;
