import React from "react";
import renderer from "react-test-renderer";
import ReviewsTab from "./reviews-tab.jsx";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {history} from '../../history.js';
import {NameSpace} from "../../reducer/name-space.js";

const mockStore = configureStore([]);

const props = {
  reviews: [],
};

it(`AddReview page should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authorizationInfo: {
        id: 0,
        email: ``,
        name: ``,
        avatar: ``,
      }
    },
    [NameSpace.DATA]: {
      reviews: [
        {
          id: 1,
          user: {},
          date: `December 24, 2016`,
          rating: 8.9,
          comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years`,
        },
        {
          id: 2,
          user: {},
          date: `November 18, 2015`,
          rating: 8.0,
          comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        },
      ],
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <ReviewsTab
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
