import React from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import {Genres} from "../../common.js";

const Catalog = (props) => {
  const {filmsData, onFilmCardClick, onFilterClick, currentFilter, children} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {Object.values(Genres).map((element, i) => {
          const className = element === currentFilter ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
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

      {children}

    </section>
  );
};

Catalog.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Catalog;
