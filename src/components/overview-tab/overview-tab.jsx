import React from "react";
import PropTypes from "prop-types";

const OverviewTab = (props) => {
  const {ratingScore, ratingCount, description, director, starring} = props;

  const starringText = starring.join(`, `);
  const getRatingLevel = () => {
    switch (true) {
      case (ratingScore >= 0, ratingScore < 3):
        return `Bad`;
      case (ratingScore >= 3, ratingScore < 5):
        return `Normal`;
      case (ratingScore >= 5, ratingScore < 8):
        return `Good`;
      case (ratingScore >= 8, ratingScore < 10):
        return `Very good`;
      case (ratingScore >= 10):
        return `Awesome`;
      default: return `Bad`;
    }
  };

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel()}</span>
          <span className="movie-rating__count">{ratingCount} rating</span>
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
  ratingCount: PropTypes.number,
  description: PropTypes.string,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
};

export default OverviewTab;
