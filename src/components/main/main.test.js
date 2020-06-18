import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      title: `Aviator`,
      genre: `Drama`,
      releaseDate: new Date(0),
      filmTitles: [`Bohemian Rhapsody`, `Macbeth`, `Aviator`],
    };

    const tree = renderer
      .create(<Main {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
