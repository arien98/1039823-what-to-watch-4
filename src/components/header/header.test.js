import React from "react";
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {history} from '../../history.js';
import {NameSpace} from "../../reducer/name-space.js";
import {Header} from "./header.jsx";

const mockStore = configureStore([]);

const props = {
  authorizationStatus: `NO_AUTH`,
};

it(`Header page should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authorizationInfo: {
        id: 0,
        email: ``,
        name: ``,
        avatar: ``,
      }
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Header
              {...props}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
