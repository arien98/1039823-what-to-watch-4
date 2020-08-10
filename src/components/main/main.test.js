import React from "react";
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import Main from "./main";
import {NameSpace} from "../../reducer/name-space";
import {Router} from "react-router-dom";
import {history} from '../../history.js';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

const props = {
  onFilmCardClick: () => {},
  promoFilm: {
    title: `Aviator`,
    smallPoster: `../img/aviator.jpg`,
    genre: `Drama`,
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    poster: `../img/aviator.jpg`,
  },
  {
    id: 3,
    title: `Macbeth`,
    smallPoster: `img/macbeth.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    poster: `../img/aviator.jpg`,
  },
  {
    id: 4,
    title: `Aviator`,
    smallPoster: `img/aviator.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    poster: `../img/aviator.jpg`,
  },
  ],
  login: () => {},
  authorizationStatus: `NO_AUTH`,
  authorizationInfo: {
    id: 0,
    email: ``,
    name: ``,
    avatar: ``,
  },
  onPlayButtonClick: () => {},
  onFavoriteButtonClick: () => {},
};

it(`Main page should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authorizationInfo: {
        id: 0,
        email: ``,
        name: ``,
        avatar: ``,
      }
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Main
              {...props}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
