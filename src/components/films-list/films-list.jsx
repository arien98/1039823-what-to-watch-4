import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import withVideo from "../../hocs/with-video/with-video.jsx";

const FilmCardWithVideo = withVideo(FilmCard);

const FilmsList = (props) => {
  const {onFilmCardClick, filmsData} = props;

  const filmsTitles = filmsData.map((element) => {
    return element.title;
  });

  return (
    <div className="catalog__movies-list">
      {filmsTitles.map((element, i) => <FilmCardWithVideo
        key={element + i}
        title = {element}
        onFilmCardClick={onFilmCardClick}
        filmData={filmsData[i]}
      />)}
    </div>
  );
};

FilmsList.propTypes = {
  onFilmCardClick: PropTypes.func,
  filmsData: PropTypes.arrayOf(PropTypes.object),
};

export default FilmsList;
