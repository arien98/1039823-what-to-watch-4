import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {ScreenMode} from "../../common.js";

class App extends PureComponent {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <FilmDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {filmsData, screenMode, onFilmCardClick, promoFilm} = this.props;

    switch (screenMode) {
      case ScreenMode.MAIN:

        return (
          <Main
            promoFilm={promoFilm}
            filmsData={filmsData}
            onFilmCardClick={onFilmCardClick(filmsData)}
          />
        );

      case ScreenMode.DETAILS:
        return (
          <FilmDetails onFilmCardClick={onFilmCardClick(filmsData)} />
        );
    }
    return null;
  }
}


App.propTypes = {
  promoFilm: PropTypes.object,
  filmsData: PropTypes.arrayOf(PropTypes.object),
  screenMode: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  showedFilm: PropTypes.object,
};

const mapStateToProps = (state) => ({
  screenMode: state.screenMode,
  showedFilm: state.showedFilm,
  filmsData: state.films,
  promoFilm: state.promoFilm,
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(filmsData) {
    return (evt) => {
      evt.preventDefault();
      const clickedFilmId = evt.target.dataset.id;
      const clickedFilm = filmsData.find((element) => {
        return element.id.toString() === clickedFilmId;
      });
      dispatch(ActionCreator.showDetails(clickedFilm));
    };
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
