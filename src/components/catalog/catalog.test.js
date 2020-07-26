import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog";

describe(`catalog renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
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
      .create(<Catalog {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
