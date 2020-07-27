import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog";

describe(`catalog renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      onFilmCardClick: () => {},
      onFilterClick: () => {},
      currentFilter: `Dramas`,
      children: [],
      filmsData: [{
        id: 2,
        title: `Bohemian Rhapsody`,
        poster: `img/bohemian-rhapsody.jpg`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 3,
        title: `Macbeth`,
        poster: `img/macbeth.jpg`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 4,
        title: `Aviator`,
        poster: `img/aviator.jpg`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      ],
    };

    const tree = renderer
      .create(<Catalog {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
