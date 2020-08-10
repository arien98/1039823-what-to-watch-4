import React from "react";
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {history} from '../../history.js';
import {AddReview} from './add-review';
import {NameSpace} from "../../reducer/name-space.js";

const mockStore = configureStore([]);

const props = {
  isError: true,
  isFormDisabled: false,
  authorizationStatus: `NO_AUTH`,
  authorizationInfo: {
    id: 0,
    email: ``,
    name: ``,
    avatar: ``,
  },
  filmId: 1,
  onSubmitClick: () => {},
  onReviewChange: () => {},
  onRatingChange: () => {},
  filmsData: [
    {id: 1, title: `Mindhunter`, poster: `http://placekitten.com/245/175`, bigPoster: `img/bg-the-grand-budapest-hotel.jpg`, genre: `drama`, releaseDate: 2000, video: ``, ratingScore: 5, ratingNumber: 100, ratingValue: ``, starring: [``, `1`, `3`], director: ``, reviews: []},
    {id: 2, title: `Aviator`, poster: `http://placekitten.com/245/175`, bigPoster: `img/bg-the-grand-budapest-hotel.jpg`, genre: `drama`, releaseDate: 2000, video: ``, ratingScore: 5, ratingNumber: 100, ratingValue: ``, starring: [``, `1`, `3`], director: ``, reviews: []},
    {id: 3, title: `Pulp Fiction`, poster: `http://placekitten.com/245/175`, bigPoster: `img/bg-the-grand-budapest-hotel.jpg`, genre: `drama`, releaseDate: 2000, video: ``, ratingScore: 5, ratingNumber: 100, ratingValue: ``, starring: [``, `1`, `3`], director: ``, reviews: []},
  ],
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
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <AddReview
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
