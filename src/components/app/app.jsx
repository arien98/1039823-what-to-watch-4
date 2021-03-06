import React from "react";
import PropTypes from "prop-types";
import {Router, Switch, Route, Redirect, Link} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/screen/screen.js";
import {AppRoute, Error} from "../../common.js";
import {getFilms, getPromoFilm, getErrorType} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus, getAuthorizationInfo} from "../../reducer/user/selectors.js";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getShowedFilmId, getIsMovieVideoplayerActive} from "../../reducer/screen/selectors.js";
import {history} from "../../history.js";
import SignIn from "../sign-in/sign-in.jsx";
import {PrivateRoute} from "../private-root/private-root.jsx";
import withReview from "../../hocs/with-review/with-review.js";
import AddReview from "../add-review/add-review.jsx";
import MyList from "../my-list/my-list.jsx";
import withFullScreenVideoplayer from "../../hocs/with-full-screen-videoplayer/with-full-screen-videoplayer.js";
import MovieVideoplayer from "../movie-videoplayer/movie-videoplayer.jsx";
import ErrorScreen from "../error-screen/error-screen.jsx";
import withValidityCheck from "../../hocs/with-validity-check/with-validity-check.jsx";

const MovieVideoplayerWrapper = withFullScreenVideoplayer(MovieVideoplayer);
const ReviewWrapper = withReview(AddReview);
const SignInWrapper = withValidityCheck(SignIn);

const App = (props) => {
  const {
    authorizationStatus,
    authorizationInfo,
    login,
    filmId,
    filmsData,
    onFilmCardClick,
    promoFilm,
    onReviewSubmit,
    isMovieVideoplayerActive,
    onPlayButtonClick,
    onExitButtonClick,
    onFavoriteButtonClick,
    loadError,
    errorType,
  } = props;

  if (loadError || errorType === Error.NO_CONNECTION) {
    return <div>Ошибка загрузки сервера</div>;
  }

  const activeMovie = filmId
    ? filmsData.find((element) => {
      return element.id.toString() === filmId.toString();
    })
    : promoFilm;

  return (
    <Router history={history}>
      <Switch>

        <Route exact path={AppRoute.ROOT}
          render={() => {
            return <Main
              promoFilm={promoFilm}
              filmsData={filmsData}
              onFilmCardClick={onFilmCardClick}
              authorizationStatus={authorizationStatus}
              authorizationInfo={authorizationInfo}
              onPlayButtonClick={onPlayButtonClick}
              onFavoriteButtonClick={onFavoriteButtonClick}
            />;
          }}
        />

        <Route exact path={AppRoute.LOGIN}
          render={() => {

            return authorizationStatus === AuthorizationStatus.NO_AUTH
              ? <SignInWrapper
                onSubmit={login}
              />
              : <Redirect
                to={AppRoute.ROOT}
              />;
          }}
        />

        <Route exact path={`${AppRoute.MOVIE}/:id`}
          render={(routeProps) => {
            const id = +routeProps.match.params.id;
            return <FilmDetails
              filmId={id}
              onFilmCardClick={onFilmCardClick}
              onPlayButtonClick={onPlayButtonClick}
            />;
          }}
        />

        <Route exact
          path={`${AppRoute.PLAYER}/:id`}
          render={() => {
            if (isMovieVideoplayerActive) {
              return <MovieVideoplayerWrapper
                activeMovie={activeMovie}
                onExitButtonClick={onExitButtonClick}
              />;
            }
            return history.goBack();
          }}
        />

        <PrivateRoute exact
          path={`${AppRoute.MOVIE}/:id/review`}
          authorizationStatus={authorizationStatus}
          render={() => {
            return <ReviewWrapper
              filmId={filmId}
              onReviewSubmit={onReviewSubmit}
            />;
          }}
        />

        <PrivateRoute exact
          path={AppRoute.MY_LIST}
          authorizationStatus={authorizationStatus}
          render={() => {
            return <MyList
              onFilmCardClick={onFilmCardClick}
            />;
          }}
        />

        <Route exact
          path={AppRoute.ERROR}
          render={() => {
            return <ErrorScreen />;
          }}
        />

        <Route
          render={() => (
            <React.Fragment>
              <h1>
                Error: 404. Page not found.
              </h1>
              <Link to={AppRoute.ROOT}>Go to main page</Link>
            </React.Fragment>
          )}
        />

      </Switch>
    </Router>
  );
};


App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  login: PropTypes.func.isRequired,
  promoFilm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    smallPoster: PropTypes.string.isRequired,
    bigPoster: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired),
    runtime: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    smallPoster: PropTypes.string.isRequired,
    bigPoster: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired),
    runtime: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  })).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
  filmId: PropTypes.number,
  isMovieVideoplayerActive: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  errorType: PropTypes.number,
  loadError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  filmId: getShowedFilmId(state),
  filmsData: getFilms(state),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
  isMovieVideoplayerActive: getIsMovieVideoplayerActive(state),
  onFavoriteButtonClick: PropTypes.func.isRequired,
  errorType: getErrorType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(ActionCreator.activateMovieVideoplayer(true));
  },

  onExitButtonClick() {
    dispatch(ActionCreator.activateMovieVideoplayer(false));
  },

  login(authData) {
    dispatch(UserOperation.login(authData))
      .then(() => history.push(AppRoute.ROOT))
      .catch(() => history.push(AppRoute.ERROR));
  },

  onFilmCardClick: (evt) => {
    evt.preventDefault();
    const clickedFilmId = +evt.target.dataset.id;
    dispatch(ActionCreator.setFilmId(clickedFilmId));
    history.push(`${AppRoute.MOVIE}/${clickedFilmId}`);
  },

  onReviewSubmit(filmId, review) {
    dispatch(DataOperation.postReview(filmId, review))
      .catch((error) => {
        if (error.response.status === Error.BAD_INFO) {
          return;
        }
        history.push(AppRoute.ERROR);
      });
  },

  onFavoriteButtonClick: (film) => () => {
    dispatch(DataOperation.changeFavoriteState(film))
      .catch((error) => {
        if (error.response.status === Error.UNAUTHORIZED) {
          history.push(AppRoute.LOGIN);
        }
      });
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
