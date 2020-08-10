import React from "react";
import renderer from "react-test-renderer";
import ErrorScreen from "./error-screen";
import {Router} from "react-router-dom";
import {history} from "../../history";

it(`Correctly ErrorScreen render`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <ErrorScreen />
        </Router>
    );

  expect(tree).toMatchSnapshot();
});
