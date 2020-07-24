import React from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import {Genres} from "../../common.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const Catalog = (props) => {
  const {filmsData, onFilmCardClick, filter, onFilterClick} = props;

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
          filmsData={filmsData}
        />
        : ``
      }

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

Catalog.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  filmsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
  filmsData: state.films,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
