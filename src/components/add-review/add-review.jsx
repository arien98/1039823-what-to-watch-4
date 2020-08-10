import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getIsError, getFilms} from "../../reducer/data/selectors.js";
import {getIsFormDisabled} from "../../reducer/screen/selectors.js";
import {getAuthorizationStatus, getAuthorizationInfo} from "../../reducer/user/selectors.js";
import ErrorScreen from "../error-screen/error-screen.jsx";
import {AppRoute} from "../../common.js";
import {getShowedFilmId} from "../../reducer/screen/selectors.js";
import Header from "../header/header.jsx";

const RATING = 5;

const AddReview = (props) => {
  const {
    filmId,
    filmsData,
    onSubmitClick,
    isFormDisabled,
    isSubmitDisabled,
    isError,
    onRatingChange,
    onReviewChange,
    authorizationStatus,
    authorizationInfo,
  } = props;

  const activeMovie = filmsData.find((element) => {
    return element.id.toString() === filmId.toString();
  });

  if (!activeMovie) {
    return <ErrorScreen errorText={`Идет загрузка...`}/>;
  }

  return (
    <section className="movie-card movie-card--full" style={{background: activeMovie.bgColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={activeMovie.bigPoster} alt={activeMovie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          authorizationStatus={authorizationStatus}
          authorizationInfo={authorizationInfo}
        >

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.MOVIE}/${activeMovie.id}`} className="breadcrumbs__link">{activeMovie.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={activeMovie.poster} alt={`${activeMovie.title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmitClick();
          }}
          disabled={isFormDisabled}
        >
          <div className="rating">
            <div className="rating__stars" onChange={onRatingChange}>
              {new Array(RATING)
                .fill().map((item, index) => {
                  const rating = index + 1;
                  return (
                    <React.Fragment key={index + 1}>
                      <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={`${rating}`}/>
                      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                    </React.Fragment>
                  );
                })
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text" id="review-text"
              placeholder="Review text"
              onChange={onReviewChange}
            ></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isSubmitDisabled}
                style={{cursor: `${isSubmitDisabled ? `default` : `pointer`}`}}
              >Post</button>
            </div>

          </div>
        </form>

        {isError &&
           <p style={{color: `tomato`, textAlign: `center`}}>Your review has not been sent. Please try again later.</p>}
      </div>

    </section>
  );
};

AddReview.propTypes = {
  filmId: PropTypes.number.isRequired,
  filmsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  isSubmitDisabled: PropTypes.bool,
  isError: PropTypes.bool,
  isFormDisabled: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isError: getIsError(state),
  isFormDisabled: getIsFormDisabled(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
  filmId: getShowedFilmId(state),
  filmsData: getFilms(state),
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
