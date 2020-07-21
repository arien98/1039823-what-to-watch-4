import React from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import Footer from "../footer/footer.jsx";

const MoreFilmsAlike = (props) => {
  const {filmsAlikeData, onFilmCardClick} = props;

  return (
    <>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <FilmsList
              filmsData={filmsAlikeData}
              onFilmCardClick={onFilmCardClick}
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

MoreFilmsAlike.propTypes = {
  filmsAlikeData: PropTypes.arrayOf(PropTypes.object),
  onFilmCardClick: PropTypes.func.isRequired,
};

export default MoreFilmsAlike;
