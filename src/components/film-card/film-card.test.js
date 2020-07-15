import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      onFilmHeaderClick: () => {},
      onFilmCardFocus: () => {},
      filmData: {
        title: `Aviator`,
        genre: `Drama`,
      }
    };

    const tree = renderer
      .create(<FilmCard {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
