import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import {TabsType} from "../../common.js";
import MoreFilmsAlike from "../more-films-alike/more-films-alike.jsx";

class FilmDetails extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentTab: TabsType.OVERVIEW};
    this._onTabClick = this._onTabClick.bind(this);
  }

  render() {
    const {filmData, filmsAlikeData, onFilmCardClick} = this.props;

    const {
      title,
      genre,
      releaseDate,
      poster,
      bigPoster,
    } = filmData;

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={bigPoster} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
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
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{releaseDate}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
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
                  onClick={this._onTabClick}
                >
                  <ul className="movie-nav__list">
                    <li className={`movie-nav__item ${this.state.currentTab === TabsType.OVERVIEW ? `movie-nav__item--active` : ``}`}>
                      <a href="#" className="movie-nav__link" data-tab={TabsType.OVERVIEW}>Overview</a>
                    </li>
                    <li className={`movie-nav__item ${this.state.currentTab === TabsType.DETAILS ? `movie-nav__item--active` : ``}`}>
                      <a href="#" className="movie-nav__link" data-tab={TabsType.DETAILS}>Details</a>
                    </li>
                    <li className={`movie-nav__item ${this.state.currentTab === TabsType.REVIEWS ? `movie-nav__item--active` : ``}`}>
                      <a href="#" className="movie-nav__link" data-tab={TabsType.REVIEWS}>Reviews</a>
                    </li>
                  </ul>
                </nav>

                <Tabs
                  filmData={filmData}
                  currentTab={this.state.currentTab}
                />

              </div>
            </div>
          </div>
        </section>

        <MoreFilmsAlike filmsAlikeData={filmsAlikeData} onFilmCardClick={onFilmCardClick}/>
      </>
    );
  }

  _onTabClick(evt) {
    evt.preventDefault();
    this.setState({currentTab: evt.target.dataset.tab});
  }
}

FilmDetails.propTypes = {
  filmData: PropTypes.object.isRequired,
  filmsAlikeData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default FilmDetails;
