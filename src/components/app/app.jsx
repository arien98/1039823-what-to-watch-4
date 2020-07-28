import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {ScreenMode} from "../../common.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onFilmCardClick, filmsData} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <FilmDetails onFilmCardClick={onFilmCardClick(filmsData)} />
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
  promoFilm: PropTypes.object,
  filmsData: PropTypes.arrayOf(PropTypes.object),
  screenMode: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  screenMode: state.screenMode,
  showedFilm: state.showedFilm,
  filmsData: state.films,
  promoFilm: state.promoFilm,
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick() {
    return (evt) => {
      evt.preventDefault();
      const clickedFilmId = evt.target.dataset.id;
      dispatch(ActionCreator.showDetails(clickedFilmId));
    };
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
