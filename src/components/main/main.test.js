import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      onFilmCardClick: () => {},
      promoFilm: {
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
      .create(<Main {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
