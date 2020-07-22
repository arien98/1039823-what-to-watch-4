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

    this.state = {screenMode: ScreenMode.MAIN, showedFilm: null};
    this._onFilmCardClick = this._onFilmCardClick.bind(this);
  }

  render() {
    const {filmsData} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <FilmDetails
              filmData={filmsData[0]}
              filmsAlikeData={filmsData.slice(0, 4)}
              onFilmCardClick={this._onFilmCardClick}
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
            filmData={this.state.showedFilm}
            filmsAlikeData={this._getFilmsAlike()}
            onFilmCardClick={this._onFilmCardClick}
          />
        );
    }
    return null;
  }

  _onFilmCardClick(evt) {
    evt.preventDefault();

    const clickedFilmId = evt.target.dataset.id;
    const clickedFilm = this.props.filmsData.find((element) => {
      return element.id.toString() === clickedFilmId;
    });

    this.setState({screenMode: ScreenMode.DETAILS, showedFilm: clickedFilm});
  }

  _getFilmsAlike() {
    return this.props.filmsData
      .filter((it) => {
        return it.genre === this.state.showedFilm.genre;
      })
      .slice(0, 4);
  }

}


App.propTypes = {
  descFilm: PropTypes.object,
  filmsData: PropTypes.arrayOf(PropTypes.object),
};

export default App;
