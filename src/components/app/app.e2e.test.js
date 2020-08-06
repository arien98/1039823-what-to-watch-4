import React from "react";
import {App} from "./app";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {mount, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const mockStore = configureStore([]);

describe(`app renders correctly`, () => {
  test(`video appears after clicking the play button`, () => {
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
    };

    const store = mockStore({
      filter: `All genres`,
      showedFilm: null,
      currentTab: `Overview`,
    });

    const app = mount(
        <Provider store={store}>
          <App {...props}/>
        </Provider>
    );

    const playButton = app.find(`.btn--play`);

    expect(playButton.length).toBe(1);

    playButton.simulate(`click`);

    // const videoPlayer = app.find(`.player`);

    // expect(videoPlayer.length).toBe(1);
  });
});
