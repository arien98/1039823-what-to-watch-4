import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

describe(`app renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      descFilm: {
        title: `Aviator`,
        poster: `../img/aviator.jpg`,
        genre: `Drama`,
        releaseDate: 2010,
      },
      filmsTitles: [`Bohemian Rhapsody`, `Macbeth`, `Aviator`],
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

    const tree = renderer
      .create(<App {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
