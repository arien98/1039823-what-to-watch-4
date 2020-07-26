import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

describe(`app renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      onFilmCardClick: () => {},
      screenMode: `main page`,
      promoFilm: {
        title: `Aviator`,
        poster: `../img/aviator.jpg`,
        genre: `Drama`,
        releaseDate: 2010,
      },
      filmsData: [{
        id: 2,
        title: `Bohemian Rhapsody`,
        poster: `img/bohemian-rhapsody.jpg`,
        genre: `Dramas`,
      },
      {
        id: 3,
        title: `Macbeth`,
        poster: `img/macbeth.jpg`,
        genre: `Dramas`,
      },
      {
        id: 4,
        title: `Aviator`,
        poster: `img/aviator.jpg`,
        genre: `Horror`,
      },
      ],
    };

    const store = mockStore({
      // screenMode: `main page`,
      // promoFilm: {
      //   title: `Aviator`,
      //   poster: `../img/aviator.jpg`,
      //   genre: `Drama`,
      //   releaseDate: 2010,
      // },

      // filmsData: [{
      //   id: 2,
      //   title: `Bohemian Rhapsody`,
      //   poster: `img/bohemian-rhapsody.jpg`,
      //   genre: `Dramas`,
      // },
      // {
      //   id: 3,
      //   title: `Macbeth`,
      //   poster: `img/macbeth.jpg`,
      //   genre: `Dramas`,
      // },
      // {
      //   id: 4,
      //   title: `Aviator`,
      //   poster: `img/aviator.jpg`,
      //   genre: `Horror`,
      // },
      // ],
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App {...props}/>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
