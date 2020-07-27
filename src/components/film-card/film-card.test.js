import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      onFilmCardClick: () => {},
      filmData: {
        title: `Aviator`,
        genre: `Drama`,
        poster: `img/avatar.jpg`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      children: [],
      isVideoPlaying: false,
      onMouseOver: () => {},
      onMouseOut: () => {},
    };

    const tree = renderer
      .create(<FilmCard {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
