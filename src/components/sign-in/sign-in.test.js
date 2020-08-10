import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

describe(`sign in`, () => {
  test(`it renders correctly`, () => {

    const tree = renderer
      .create(<SignIn
        onSubmit={() => {}}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
