import React from "react";
import renderer from "react-test-renderer";
import DetailsTab from "./details-tab.jsx";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      starring: [`Anthony Mann`, `Andy Dark`],
      director: `Guy Ritchie`,
      runtime: 30,
      genre: `Drama`,
      releaseDate: 1980
    };

    const tree = renderer
      .create(<DetailsTab {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
