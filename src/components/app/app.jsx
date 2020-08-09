import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/screen/screen.js";
import {AppRoute} from "../../common.js";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getScreenMode, getShowedFilmId} from "../../reducer/screen/selectors.js";
import {history} from "../../history.js";
import SignIn from "../sign-in/sign-in.jsx";
import {PrivateRoute} from "../private-root/private-root.jsx";
import withReview from "../../hocs/with-review/with-review.js";
import AddReview from "../add-review/add-review.jsx";

const ReviewWrapper = withReview(AddReview);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      authorizationStatus,
      login,
      filmId,
      filmsData,
      onFilmCardClick,
      promoFilm,
      onReviewSubmit
    } = this.props;

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
              />;
            }}
          />

          <Route exact path={AppRoute.LOGIN}
            render={() => {

              return authorizationStatus !== AuthorizationStatus.AUTH
                ? <SignIn
                  onSubmit={login}
                />
                : <Redirect
                  to={AppRoute.ROOT}
                />;
            }}
          />

          <Route exact path={`${AppRoute.MOVIE}/:id`}
            render={() => {
              return <FilmDetails onFilmCardClick={onFilmCardClick} />;
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

        </Switch>
      </Router>
    );
  }
}


App.propTypes = {
  authorizationStatus: PropTypes.string,
  login: PropTypes.func.isRequired,
  promoFilm: PropTypes.object,
  filmsData: PropTypes.array,
  screenMode: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
  filmId: PropTypes.number,
};

const mapStateToProps = (state) => ({
  filmId: getShowedFilmId(state),
  screenMode: getScreenMode(state),
  filmsData: getFilms(state),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  onFilmCardClick: (evt) => {
    evt.preventDefault();
    const clickedFilmId = +evt.target.dataset.id;
    dispatch(ActionCreator.showDetails(clickedFilmId));
    history.push(`${AppRoute.MOVIE}/${clickedFilmId}`);
  },

  onReviewSubmit(filmId, review) {
    dispatch(DataOperation.postReview(filmId, review));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
