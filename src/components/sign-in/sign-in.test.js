import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {Router} from "react-router-dom";
import {history} from '../../history.js';

describe(`sign in`, () => {
  test(`it renders correctly`, () => {

    const tree = renderer
      .create(
          <Router history={history}>
            <SignIn
              onSubmit={() => {}}
              isLoginValid={() => {}}
              isPasswordValid={() => {}}
              isInputValid={() => {}}
            />)
          </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
