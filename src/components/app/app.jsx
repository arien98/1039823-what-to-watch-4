import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";

const ScreenMode = {
  MAIN: `main page`,
  DETAILS: `film details`,
};

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {screenMode: ScreenMode.MAIN};
    this._onFilmCardClick = this._onFilmCardClick.bind(this);
    this.clickedFilm = null;
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
    const {descFilm, filmsData} = this.props;

    switch (this.state.screenMode) {
      case ScreenMode.MAIN:

        return (
          <Main
            descFilm={descFilm}
            filmsData={filmsData}
            onFilmCardClick={this._onFilmCardClick}
          />
        );

      case ScreenMode.DETAILS:
        return (
          <FilmDetails
            filmData={this.clickedFilm}
            filmsAlikeData={this._getFilmsAlike()}
          />
        );
    }
    return null;
  }

  _onFilmCardClick(evt) {
    evt.preventDefault();
    this.setState({screenMode: ScreenMode.DETAILS});
    const clickedFilmId = evt.target.dataset.id;
    this.clickedFilm = this.props.filmsData.find((element) => {
      return element.id.toString() === clickedFilmId;
    });
  }

  _getFilmsAlike() {
    return this.props.filmsData
      .filter((it) => {
        return it.genre === this.clickedFilm.genre;
      })
      .slice(0, 4);
  }

}


App.propTypes = {
  descFilm: PropTypes.object,
  filmsData: PropTypes.arrayOf(PropTypes.object),
};

export default App;
