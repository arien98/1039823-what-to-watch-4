import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/screen/screen.js";
import {ScreenMode} from "../../common.js";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors.js";
// import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getScreenMode} from "../../reducer/screen/selectors.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onFilmCardClick} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <FilmDetails onFilmCardClick={onFilmCardClick} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      // authorizationStatus,
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
