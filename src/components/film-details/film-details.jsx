import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Tabs from "../tabs/tabs.jsx";
import {TabsType, AppRoute} from "../../common.js";
import MoreFilmsAlike from "../more-films-alike/more-films-alike.jsx";
import {ActionCreator} from "../../reducer/screen/screen.js";
import {getCurrentTab} from "../../reducer/screen/selectors.js";
import {getFilms} from "../../reducer/data/selectors.js";
import {Operation} from "../../reducer/data/data.js";
import Header from "../header/header.jsx";
import {getAuthorizationStatus, getAuthorizationInfo} from "../../reducer/user/selectors.js";
import {Link} from "react-router-dom";
import {history} from "../../history.js";

const FILMS_COUNT_ON_CLICK = 4;

class FilmDetails extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {filmId, loadReviews, setFilmId} = this.props;

    setFilmId(filmId);
    loadReviews(filmId);
  }

  render() {
    const {
      filmId,
      filmsData,
      onFilmCardClick,
      onTabClick,
      currentTab,
      onFavoriteButtonClick,
      authorizationStatus,
      authorizationInfo,
      onPlayButtonClick,
      loadReviews,
    } = this.props;

    const filmData = filmsData.find((element) => {
      return element.id.toString() === filmId.toString();
    });

    const {
      title,
      genre,
      releaseDate,
      poster,
      bigPoster,
      isFavorite,
      bgColor,
      id,
    } = filmData;

    return (
      <>
        <section className="movie-card movie-card--full" style={{backgroundColor: bgColor}}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={bigPoster} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header authorizationStatus={authorizationStatus} authorizationInfo={authorizationInfo} />

            <div className="movie-card__wrap">
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
                      history.push(`${AppRoute.PLAYER}/${filmId}`);
                    }}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                    onClick={onFavoriteButtonClick(filmData)}
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
                  <Link
                    to={`${AppRoute.MOVIE}/${id}/review`}
                    className="btn movie-card__button"
                  >Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={title} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <nav
                  className="movie-nav movie-card__nav"
                >
                  <ul className="movie-nav__list">

                    {Object.values(TabsType).map((element, i) => {
                      return (
                        <li
                          key={Math.random + i}
                          className={`movie-nav__item ${currentTab === element ? `movie-nav__item--active` : ``}`}
                        >
                          <a
                            href="#"
                            className="movie-nav__link"
                            data-tab={element}
                            onClick={onTabClick}
                          >
                            {element}
                          </a>
                        </li>
                      );
                    })}

                  </ul>
                </nav>

                <Tabs
                  filmData={filmData}
                  currentTab={currentTab}
                  loadReviews={loadReviews}
                />

              </div>
            </div>
          </div>
        </section>

        <MoreFilmsAlike
          filmsAlike={filmsData
            .filter((it) => it.genre === filmData.genre)
            .filter((it) => it.id !== filmData.id)
            .slice(0, FILMS_COUNT_ON_CLICK)}
          onFilmCardClick={onFilmCardClick}
        />
      </>
    );
  }
}

FilmDetails.propTypes = {
  filmId: PropTypes.number.isRequired,
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bigPoster: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  })),
  onFilmCardClick: PropTypes.func.isRequired,
  onTabClick: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  onPlayButtonClick: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
  resetTab: PropTypes.func.isRequired,
  setFilmId: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentTab: getCurrentTab(state),
  filmsData: getFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilmId: (id) => {
    dispatch(ActionCreator.setFilmId(id));
  },

  onTabClick: (evt) => {
    evt.preventDefault();
    const tab = evt.target.dataset.tab;
    dispatch(ActionCreator.changeTab(tab));
  },

  resetTab() {
    dispatch(ActionCreator.changeTab(TabsType.OVERVIEW));
  },

  onFavoriteButtonClick: (film) => () => {
    dispatch(Operation.changeFavoriteState(film));
  },

  loadReviews: (id) => {
    dispatch(Operation.loadReviews(id));
  },

});

export {FilmDetails};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
