import React from "react";
import renderer from "react-test-renderer";
import withReview from "./with-review.js";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withReview(MockComponent);

describe(`with player snapshot`, () => {
  test(`it renders correctly`, () => {
    const props = {
      filmId: 1,
      onReviewSubmit: () => {},
    };

    const tree = renderer
      .create(<MockComponentWrapped {...props}></MockComponentWrapped>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
