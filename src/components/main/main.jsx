import React from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import Catalog from "../catalog/catalog.jsx";
import withButton from "../../hocs/with-show-more-button/with-show-more-button.js";
import withFilter from "../../hocs/with-filter/with-filter.js";

const SmartCatalog = withFilter(withButton(Catalog));

const Main = (props) => {
  const {promoFilm, filmsData, onFilmCardClick} = props;
  const {title, poster, bigPoster, genre, releaseDate, bgColor} = promoFilm;

  return <>
    <section className="movie-card">
      <div className="movie-card__bg" style={{backgroundColor: bgColor}}>
        <img src={bigPoster} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt={title} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use href="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use href="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <SmartCatalog filmsData={filmsData} onFilmCardClick={onFilmCardClick}/>

      <Footer />
    </div>
  </>;
};

Main.propTypes = {
  promoFilm: PropTypes.object,
  filmsData: PropTypes.arrayOf(PropTypes.object),
  onFilmCardClick: PropTypes.func.isRequired,
};

export default Main;
