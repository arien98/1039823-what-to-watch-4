import React from "react";
import PropTypes from "prop-types";

const RatingLevelMaxCount = {
  MIN: 0,
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};

const OverviewTab = (props) => {
  const {ratingScore, ratingCount, description, director, starring} = props;

  const starringText = starring.join(`, `);
  const getRatingLevel = () => {
    switch (true) {
      case (ratingScore >= RatingLevelMaxCount.MIN, ratingScore < RatingLevelMaxCount.BAD):
        return `Bad`;
      case (ratingScore >= RatingLevelMaxCount.BAD, ratingScore < RatingLevelMaxCount.NORMAL):
        return `Normal`;
      case (ratingScore >= RatingLevelMaxCount.NORMAL, ratingScore < RatingLevelMaxCount.GOOD):
        return `Good`;
      case (ratingScore >= RatingLevelMaxCount.GOOD, ratingScore < RatingLevelMaxCount.VERY_GOOD):
        return `Very good`;
      case (ratingScore >= RatingLevelMaxCount.VERY_GOOD):
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
