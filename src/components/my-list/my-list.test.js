import React from "react";
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {history} from '../../history.js';
import {NameSpace} from "../../reducer/name-space.js";
import {MyList} from "./my-list.jsx";

const mockStore = configureStore([]);

const props = {
  loadFavoriteFilms: () => {},
  onFilmCardClick: () => {},
  favoriteFilms: [
    {id: 1, title: `Mindhunter`, smallPoster: `http://placekitten.com/245/175`, poster: `http://placekitten.com/245/175`, bigPoster: `img/bg-the-grand-budapest-hotel.jpg`, genre: `drama`, releaseDate: 2000, video: ``, preview: ``, ratingScore: 5, ratingNumber: 100, ratingValue: ``, starring: [``, `1`, `3`], director: ``, reviews: []},
    {id: 2, title: `Aviator`, smallPoster: `http://placekitten.com/245/175`, poster: `http://placekitten.com/245/175`, bigPoster: `img/bg-the-grand-budapest-hotel.jpg`, genre: `drama`, releaseDate: 2000, video: ``, preview: ``, ratingScore: 5, ratingNumber: 100, ratingValue: ``, starring: [``, `1`, `3`], director: ``, reviews: []},
    {id: 3, title: `Pulp Fiction`, smallPoster: `http://placekitten.com/245/175`, poster: `http://placekitten.com/245/175`, bigPoster: `img/bg-the-grand-budapest-hotel.jpg`, genre: `drama`, releaseDate: 2000, video: ``, preview: ``, ratingScore: 5, ratingNumber: 100, ratingValue: ``, starring: [``, `1`, `3`], director: ``, reviews: []},
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
            <MyList
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
