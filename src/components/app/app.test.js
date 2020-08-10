import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {NameSpace} from "../../reducer/name-space.js";
import {history} from '../../history.js';

const mockStore = configureStore([]);

describe(`app renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      promoFilm: {
        title: `Aviator`,
        smallPoster: `../img/aviator.jpg`,
        genre: `Drama`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        releaseDate: 2010,
        poster: `../img/aviator.jpg`,
        bigPoster: `../img/aviator.jpg`,
        bgColor: `white`,
        isFavorite: true,
      },
      filmsData: [{
        id: 2,
        title: `Bohemian Rhapsody`,
        smallPoster: `img/bohemian-rhapsody.jpg`,
        genre: `Dramas`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        poster: `../img/aviator.jpg`,
      },
      {
        id: 3,
        title: `Macbeth`,
        smallPoster: `img/macbeth.jpg`,
        genre: `Dramas`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        poster: `../img/aviator.jpg`,
      },
      {
        id: 4,
        title: `Aviator`,
        smallPoster: `img/aviator.jpg`,
        genre: `Horror`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        poster: `../img/aviator.jpg`,
      },
      ],
      isError: false,
      login: () => {},
      authorizationStatus: `NO_AUTH`,
      isMovieVideoplayerActive: false,
      onExitButtonClick: () => {},
      onFavoriteButtonClick: () => {},
      onFilmCardClick: () => {},
      onPlayButtonClick: () => {},
      onReviewSubmit: () => {},
      authorizationInfo: {
        id: 0,
        email: ``,
        name: ``,
        avatar: ``,
      }
    };

    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        authorizationInfo: {
          id: 0,
          email: ``,
          name: ``,
          avatar: ``,
        }
      },
      [NameSpace.SCREEN]: {
        showedFilm: null,
        currentTab: `Overview`,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App {...props}/>
            </Router>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
