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
      onPlayButtonClick: () => {},
      screenMode: `main page`,
      promoFilm: {
        title: `Aviator`,
        smallPoster: `../img/aviator.jpg`,
        genre: `Drama`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        releaseDate: 2010,
      },
      filmsData: [{
        id: 2,
        title: `Bohemian Rhapsody`,
        smallPoster: `img/bohemian-rhapsody.jpg`,
        genre: `Dramas`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 3,
        title: `Macbeth`,
        smallPoster: `img/macbeth.jpg`,
        genre: `Dramas`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 4,
        title: `Aviator`,
        smallPoster: `img/aviator.jpg`,
        genre: `Horror`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      ],
      login: () => {},
      authorizationStatus: `AUTH`,
    };

    const store = mockStore({
      filter: `All genres`,
      showedFilm: null,
      currentTab: `Overview`,
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
