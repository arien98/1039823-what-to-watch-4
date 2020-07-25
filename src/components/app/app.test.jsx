import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {ScreenMode, Genres} from "../../common";

const mockStore = configureStore([]);

describe(`app renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
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
      ]
    };

    const store = mockStore({
      screenMode: ScreenMode.MAIN,
      promoFilm: {
        title: `Aviator`,
        poster: `../img/aviator.jpg`,
        genre: `Drama`,
        releaseDate: 2010,
      },
      filter: Genres.ALL,
      filmsData: [{
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
