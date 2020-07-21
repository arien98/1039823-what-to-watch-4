import React from "react";
import renderer from "react-test-renderer";
import ReviewsTab from "./reviews-tab.jsx";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const tree = renderer
      .create(<ReviewsTab />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
