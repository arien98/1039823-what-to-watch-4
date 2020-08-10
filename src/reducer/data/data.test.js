import MockAdapter from 'axios-mock-adapter';
import {reducer, Operation, ActionType} from './data.js';
import {createAPI} from '../../api.js';
import {getAdaptedFilmData, getAdaptedFilmsData} from '../../adapter/films.js';

const testFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

const testFilms = [
  {
    id: 0,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
  },
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Fantasy`,
    releaseDate: 2018,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }
];

const testReviews = [
  {
    id: 1,
    user: {},
    date: `December 24, 2016`,
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years`,
  }
];

const testPostReview = {
  comment: ``,
  rating: 5,
};

const api = createAPI(() => {});

describe(`Data Reducer`, () => {
  it(`Reducer should update PromoFilm by load`, () => {
    expect(reducer({
      films: {},
    }, {
      type: ActionType.LOAD_FILMS,
      payload: testFilms,
    })).toEqual({
      films: testFilms,
    });
  });
});

it(`Reducer should update PromoMovie by load`, () => {
  expect(reducer({
    promoFilm: {},
  }, {
    type: ActionType.LOAD_PROMO,
    payload: testFilm,
  })).toEqual({
    promoFilm: testFilm,
  });
});

it(`Reducer should update PromoMovie by load`, () => {
  expect(reducer({
    isError: false,
  }, {
    type: ActionType.CATCH_ERROR,
    payload: true,
  })).toEqual({
    isError: true,
  });
});

it(`Reducer should update favorite movies by load`, () => {
  expect(reducer({
    favoriteFilms: [],
  }, {
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: testFilms,
  })).toEqual({
    favoriteFilms: testFilms,
  });
});

it(`Reducer should update reviews by load`, () => {
  expect(reducer({
    reviews: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: testReviews,
  })).toEqual({
    reviews: testReviews,
  });
});


describe(`Operations work correctly`, () => {
  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoad = Operation.loadPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoFilmLoad(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.LOAD_PROMO,
              payload: getAdaptedFilmData({fake: true}),
            });
          });
  });

  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoad = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoad(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.LOAD_FILMS,
              payload: getAdaptedFilmsData([{fake: true}]),
            });
          });
  });

  it(`Should make a correct API call to /comments/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoad = Operation.loadReviews(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{fake: true}]);

    return reviewsLoad(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.LOAD_REVIEWS,
              payload: [{fake: true}],
            });
          });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoad = Operation.loadFavoriteFilms(1);

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return filmsLoad(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.LOAD_FAVORITE_FILMS,
              payload: getAdaptedFilmsData([{fake: true}]),
            });
          });
  });

  it(`Should send review to /comments/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postReview = Operation.postReview(1, testPostReview);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [{fake: true}]);

    return postReview(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.POST_REVIEW,
              payload: testPostReview,
            });
          });
  });

  it(`Should send favorite film status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const checkMovieIsFavorite = Operation.changeFavoriteState(1);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, [{fake: true}]);

    return checkMovieIsFavorite(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
          });
  });
});
