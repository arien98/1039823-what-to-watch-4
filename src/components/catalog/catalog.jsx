import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import {Genres} from "../../common.js";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";

const FILMS_COUNT_ON_START = 8;
const ADD_FILMS_COUNT = 8;

class Catalog extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {filter: Genres.ALL, filmsOnPage: FILMS_COUNT_ON_START};

    this._onFilterClick = this._onFilterClick.bind(this);
    this._onShowMoreButtonClick = this._onShowMoreButtonClick.bind(this);
  }

  render() {
    const {filmsData, onFilmCardClick} = this.props;

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          {Object.values(Genres).map((element, i) => {
            const className = element === this.state.filter ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
            return (
              <li key={Math.random() + i} className={className}>
                <a
                  href="#"
                  className="catalog__genres-link"
                  data-filter={element}
                  onClick={this._onFilterClick}>{element}</a>
              </li>
            );
          })}
        </ul>

        {filmsData
          ?
          <FilmsList
            onFilmCardClick={onFilmCardClick}
            filmsData={this._getFilterdFilms(filmsData).slice(0, this.state.filmsOnPage)}
          />
          : ``
        }

        {this.state.filmsOnPage < this._getFilterdFilms(filmsData).length
          ? <ShowMoreButton onShowMoreButtonClick={this._onShowMoreButtonClick} />
          : ``}

      </section>
    );
  }

  _getFilterdFilms(filmsData) {
    return this.state.filter === Genres.ALL
      ? filmsData
      : filmsData.filter((it) => it.genre === this.state.filter);
  }

  _onFilterClick(evt) {
    evt.preventDefault();
    const targetFilter = evt.target.dataset.filter;
    this.setState({filter: targetFilter, filmsOnPage: FILMS_COUNT_ON_START});
  }

  _onShowMoreButtonClick() {
    this.setState((prevState) => ({
      filmsOnPage: prevState.filmsOnPage + ADD_FILMS_COUNT
    }));
  }
}

Catalog.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default Catalog;
