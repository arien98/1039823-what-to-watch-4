import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog";

describe(`app renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
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
      ],
      onFilmCardClick: () => {},
      onFilterClick: () => {},
      filter: `Show all`,
      filmsOnPage: 8,
      onShowMoreButtonClick: () => {},
    };

    const tree = renderer
      .create(<Catalog {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
