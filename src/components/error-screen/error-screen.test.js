import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import ErrorScreen from "./error-screen";
import {Router} from "react-router-dom";
import {history} from "../../history";
import {NameSpace} from "../../reducer/name-space";

const mockStore = configureStore([]);


it(`Correctly ErrorScreen render`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      errorType: `400`,
    },
  });

  const props = {
    errorType: `400`,
    errorText: `Ох уж эти ошибки`,
  };

  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <ErrorScreen {...props}/>
            </Router>
          </Provider>
      )
      .toJSON();
  expect(tree).toMatchSnapshot();
});
