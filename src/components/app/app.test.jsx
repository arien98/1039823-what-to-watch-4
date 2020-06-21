import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

describe(`app renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      title: `Aviator`,
      genre: `Drama`,
      releaseDate: new Date(0),
      filmTitles: [`Bohemian Rhapsody`, `Macbeth`, `Aviator`],
    };

    const tree = renderer
      .create(<App {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
