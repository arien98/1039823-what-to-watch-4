import React from "react";
import renderer from "react-test-renderer";
import MoreFilmsAlike from "./more-films-alike.jsx";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      onFilmCardClick: () => {},
      filmsAlike: [
        {
          id: 2,
          title: `Bohemian Rhapsody`,
          smallPoster: `img/bohemian-rhapsody.jpg`,
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        },
        {
          id: 3,
          title: `Macbeth`,
          smallPoster: `img/macbeth.jpg`,
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        },
        {
          id: 4,
          title: `Aviator`,
          smallPoster: `img/aviator.jpg`,
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        },
      ],
    };

    const tree = renderer
      .create(<MoreFilmsAlike {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

