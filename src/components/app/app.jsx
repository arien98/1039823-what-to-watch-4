import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/screen/screen.js";
import {ScreenMode, AppRoute} from "../../common.js";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user.js";
import {getScreenMode} from "../../reducer/screen/selectors.js";
import {history} from "../../history.js";
import SignIn from "../sign-in/sign-in.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      authorizationStatus,
      login,
      filmsData,
      onFilmCardClick,
      promoFilm,
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

        </Switch>
      </Router>
    );
  }

  _renderApp() {
    const {
      authorizationStatus,
      // login,
      filmsData,
      screenMode,
      onFilmCardClick,
      promoFilm
    } = this.props;

    switch (screenMode) {
      case ScreenMode.MAIN:

        return (
          <Main
            promoFilm={promoFilm}
            filmsData={filmsData}
            onFilmCardClick={onFilmCardClick}
            authorizationStatus={authorizationStatus}
          />
        );

      case ScreenMode.DETAILS:
        return (
          <FilmDetails onFilmCardClick={onFilmCardClick} />
        );
    }
    return null;
  }
}


App.propTypes = {
  authorizationStatus: PropTypes.string,
  login: PropTypes.func.isRequired,
  promoFilm: PropTypes.object,
  filmsData: PropTypes.array,
  screenMode: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
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
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
