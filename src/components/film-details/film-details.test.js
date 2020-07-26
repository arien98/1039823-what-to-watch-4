import React from "react";
import renderer from "react-test-renderer";
import {FilmDetails} from "../film-details/film-details.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

describe(`film deatails`, () => {
  test(`it renders correctly`, () => {

    const props = {
      onFilmCardClick: () => {},
      onTabClick: () => {},
      currentTab: `Overview`,
      filmData: {
        bigPoster: `img/johnny-english.jpg`,
        description: `A hardened CIA operative finds himself at the mercy of a precocious 9-year-old girl, having been sent undercover to surveil her family.`,
        director: `Anthony Mann`,
        genre: `criminal`,
        id: 47209,
        poster: `img/no-country-for-old-men.jpg`,
        ratingCount: 448,
        ratingLevel: `Very good`,
        ratingScore: 4.4,
        releaseDate: 1947,
        runtime: `0h 25m`,
        starring: [`Heinz Herald`, `Richard Weil`, `Anthony Mann`, `Erich von Stroheim`, `Charlie Hunnam`],
        title: `Dardjeeling Limited`,
      },
      filmsData: [
        {
          id: 2,
          title: `Bohemian Rhapsody`,
          poster: `img/bohemian-rhapsody.jpg`,
        },
        {
          id: 3,
          title: `Macbeth`,
          poster: `img/macbeth.jpg`,
        },
        {
          id: 4,
          title: `Aviator`,
          poster: `img/aviator.jpg`,
        },
      ],
    };

    const store = mockStore({});

    const tree = renderer
      .create(
          <Provider store={store}>
            <FilmDetails {...props} />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

