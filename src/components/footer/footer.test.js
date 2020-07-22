import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
