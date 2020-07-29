import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";

describe(`show more button`, () => {
  test(`it renders correctly`, () => {
    const props = {
      onShowMoreButtonClick: () => {},
    };

    const tree = renderer
      .create(<ShowMoreButton {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
