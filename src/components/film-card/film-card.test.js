import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      title: `Aviator`,
      onFilmHeaderClick: () => {},
    };

    const tree = renderer
      .create(<FilmCard {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
