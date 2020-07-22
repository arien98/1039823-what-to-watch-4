import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      filmsTitles: [`Bohemian Rhapsody`, `Macbeth`, `Aviator`],
      onFilmCardClick: () => {},
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
    };

    const tree = renderer
      .create(<FilmsList {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
