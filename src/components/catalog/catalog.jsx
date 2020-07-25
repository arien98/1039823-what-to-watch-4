import React from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import {Genres} from "../../common.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";

const Catalog = (props) => {
  const {filmsData, onFilmCardClick, filter, onFilterClick, filmsOnPage, onShowMoreButtonClick} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {Object.values(Genres).map((element, i) => {
          const className = element === filter ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
          return (
            <li key={Math.random() + i} className={className}>
              <a
                href="#"
                className="catalog__genres-link"
                data-filter={element}
                onClick={onFilterClick}>{element}</a>
            </li>
          );
        })}
      </ul>

      {filmsData
        ?
        <FilmsList
          onFilmCardClick={onFilmCardClick}
          filmsData={filmsData.slice(0, filmsOnPage)}
        />
        : ``
      }

      {filmsOnPage < filmsData.length
        ? <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick} />
        : ``}

    </section>
  );
};

Catalog.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  filmsOnPage: PropTypes.number.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
  filmsData: state.films,
  filmsOnPage: state.filmsOnPage,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(evt) {
    evt.preventDefault();
    const targetFilter = evt.target.dataset.filter;
    if (targetFilter === Genres.ALL) {
      dispatch(ActionCreator.showAll());
    } else {
      dispatch(ActionCreator.filterByGenre(targetFilter));
    }
  },

  onShowMoreButtonClick() {
    dispatch(ActionCreator.showMoreFilms());
  },
});

export {Catalog};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
