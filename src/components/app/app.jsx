import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const ScreenMode = {
  MAIN: `main page`,
  DETAILS: `film details`,
};

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {screenMode: ScreenMode.MAIN};
    this._onFilmCardClick = this._onFilmCardClick.bind(this);
  }

  render() {
    const {descFilm} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <FilmDetails
              filmData={descFilm}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {descFilm, filmsTitles, filmsData} = this.props;

    switch (this.state.screenMode) {
      case ScreenMode.MAIN:

        return <Main
          descFilm={descFilm}
          filmsTitles={filmsTitles}
          filmsData={filmsData}
          onFilmCardClick={this._onFilmCardClick}
        />;

      case ScreenMode.DETAILS:
        return <FilmDetails
          filmData={this._findFilmById(this.clickedFilmId, filmsData)}
        />;
    }
    return null;
  }

  _onFilmCardClick(evt) {
    evt.preventDefault();
    this.setState({screenMode: ScreenMode.DETAILS});
    this.clickedFilmId = evt.target.dataset.id;
  }

  _findFilmById(id, filmsData) {
    return filmsData.find((element) => {
      return element.id.toString() === id;
    });
  }
}


App.propTypes = {
  descFilm: PropTypes.object,
  filmsTitles: PropTypes.arrayOf(PropTypes.string),
  filmsData: PropTypes.arrayOf(PropTypes.object),
};

export default App;
