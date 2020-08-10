import React from "react";
import renderer from "react-test-renderer";
import {FilmDetails} from "../film-details/film-details.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import {history} from '../../history.js';
import {NameSpace} from "../../reducer/name-space.js";

const mockStore = configureStore([]);

describe(`film deatails`, () => {
  test(`it renders correctly`, () => {

    const props = {
      onFilmCardClick: () => {},
      onTabClick: () => {},
      currentTab: `Overview`,
      filmsData: [
        {
          bigPoster: `img/johnny-english.jpg`,
          description: `A hardened CIA operative ercy of a precocious 9-year-old girl, having been sent undercover to surveil her family.`,
          director: `Anthony Mann`,
          genre: `criminal`,
          id: 1,
          poster: `img/no-country-for-old-men.jpg`,
          smallPoster: `img/no-country-for-old-men.jpg`,
          bgColor: `white`,
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          ratingCount: 448,
          ratingLevel: `Very good`,
          ratingScore: 4.4,
          releaseDate: 1947,
          runtime: 96,
          starring: [`Heinz Herald`, `Anthony Mann`, `Erich von Stroheim`, `Charlie Hunnam`],
          title: `Dardjeeling Limited`,
          video: ``,
          isFavorite: true,
        },
        {
          bigPoster: `img/johnny-english.jpg`,
          description: `A hardened CIA operative finds himself at the mercy of a precocious 9-year-old girl, having been sent undercover to surveil her family.`,
          director: `Anthony Mann`,
          genre: `criminal`,
          id: 2,
          poster: `img/no-country-for-old-men.jpg`,
          smallPoster: `img/no-country-for-old-men.jpg`,
          bgColor: `white`,
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          ratingCount: 448,
          ratingLevel: `Very good`,
          ratingScore: 4.4,
          releaseDate: 1947,
          runtime: 59,
          starring: [`Heinz Herald`, `Richard Weil`, `Anthony Mann`, `Erich von Stroheim`, `Charlie Hunnam`],
          title: `Dardjeeling Limited`,
          video: ``,
          isFavorite: true,
        },
        {
          bigPoster: `img/johnny-english.jpg`,
          description: `A hardened CIA operative finds himself at the mercy of a precocious 9-year-old girl, having been sent undercover to surveil her family.`,
          director: `Anthony Mann`,
          genre: `criminal`,
          id: 3,
          poster: `img/no-country-for-old-men.jpg`,
          smallPoster: `img/no-country-for-old-men.jpg`,
          bgColor: `white`,
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          ratingCount: 448,
          ratingLevel: `Very good`,
          ratingScore: 4.4,
          releaseDate: 1947,
          runtime: 95,
          starring: [`Heinz Herald`, `Richard Weil`, `Anthony Mann`, `Erich von Stroheim`, `Charlie Hunnam`],
          title: `Dardjeeling Limited`,
          video: ``,
          isFavorite: true,
        },
      ],
      filmId: 1,
      onFavoriteButtonClick: () => {},
      authorizationStatus: `NO_AUTH`,
      authorizationInfo: {
        id: 0,
        email: ``,
        name: ``,
        avatar: ``,
      },
      onPlayButtonClick: () => {},
      loadReviews: () => {},
      resetTab: () => {},
      match: {params: {id: 1}},
      setFilmId: () => {},
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
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <FilmDetails {...props} />
            </Router>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

