import React from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import Catalog from "../catalog/catalog.jsx";
import withShowMoreButton from "../../hocs/with-show-more-button/with-show-more-button.js";
import withFilter from "../../hocs/with-filter/with-filter.js";
import Header from "../header/header.jsx";
import {history} from "../../history.js";
import {AppRoute, Error} from "../../common.js";

const SmartCatalog = withFilter(withShowMoreButton(Catalog));

const Main = (props) => {
  const {
    promoFilm,
    filmsData,
    onFilmCardClick,
    authorizationStatus,
    authorizationInfo,
    onPlayButtonClick,
    onFavoriteButtonClick,
    errorType,
  } = props;

  const {title, poster, bigPoster, genre, releaseDate, bgColor, isFavorite} = promoFilm;

  return <>
    <section className="movie-card" style={{backgroundColor: bgColor}}>
      <div className="movie-card__bg">
        <img src={bigPoster} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header
        authorizationStatus={authorizationStatus}
        authorizationInfo={authorizationInfo}
      />

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
              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick={() => {
                  onPlayButtonClick();
                  history.push(`${AppRoute.PLAYER}/promo`);
                }}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <button
                className="btn btn--list movie-card__button"
                type="button"
                onClick={() => {
                  if (errorType === Error.UNAUTHORIZED) {
                    history.push(AppRoute.LOGIN);
                  }
                  onFavoriteButtonClick(promoFilm);
                }}
              >
                {
                  isFavorite
                    ? <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                    : <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                }
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
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bigPoster: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  filmsData: PropTypes.array.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.object.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  errorType: PropTypes.number,
};

export default Main;
