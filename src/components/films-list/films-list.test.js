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
      .create(<FilmsList {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
