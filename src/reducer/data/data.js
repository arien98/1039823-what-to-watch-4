import {extend} from "../../common.js";
import {getAdaptedFilmsData, getAdaptedFilmData} from "../../adapter/films.js";
import {ActionCreator as ScreenActionCreator} from "../screen/screen.js";

const initialState = {
  films: [],
  promoFilm: {},
  favoriteFilms: [],
  reviews: [],
  isError: false,
  errorType: null,
};


const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  CATCH_ERROR: `CATCH_ERROR`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  POST_REVIEW: `POST_REVIEW`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },

  loadPromo: (promoFilm) => {
    return {
      type: ActionType.LOAD_PROMO,
      payload: promoFilm,
    };
  },

  catchError: (error) => {
    return {
      type: ActionType.CATCH_ERROR,
      payload: error.response.status,
    };
  },

  loadFavoriteFilms: (favoriteFilms) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: favoriteFilms,
  }),

  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },

  postReview: (review) => {
    return {
      type: ActionType.POST_REVIEW,
      payload: review,
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedData = getAdaptedFilmsData(response.data);
        dispatch(ActionCreator.loadFilms(adaptedData));
      })
      .catch((error) => {
        dispatch(ActionCreator.catchError(error));
      });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const adaptedData = getAdaptedFilmData(response.data);
        dispatch(ActionCreator.loadPromo(adaptedData));
      })
      .catch((error) => {
        dispatch(ActionCreator.catchError(error));
      });
  },

  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        if (response.data) {
          const favoriteFilms = getAdaptedFilmsData(response.data);
          dispatch(ActionCreator.loadFavoriteFilms(favoriteFilms));
        }
      })
      .catch((error) => {
        dispatch(ActionCreator.catchError(error));
      });
  },

  changeFavoriteState: (film) => (dispatch, getState, api) => {
    return api.post(`/favorite/${film.id}/${film.isFavorite ? 0 : 1}`)
    .then(() => {
      dispatch(Operation.loadFilms());
      dispatch(Operation.loadPromo());
    })
      .catch((error) => {
        dispatch(ActionCreator.catchError(error));
      });
  },

  loadReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      })
      .catch((error) => {
        dispatch(ActionCreator.catchError(error));
      });
  },

  postReview: (id, review) => (dispatch, getState, api) => {
    return api.post(`comments/${id}`, {
      rating: review.rating,
      comment: review.comment,
    })
    .then(() => {
      dispatch(ActionCreator.postReview(review));
      dispatch(Operation.loadReviews(id));
    }).
    then(() => {
      dispatch(ScreenActionCreator.addReview(false));
      dispatch(ScreenActionCreator.toggleFormState(false));
    })
    .catch((error) => {
      dispatch(ActionCreator.catchError(error));

      throw error;
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoFilm: action.payload,
      });

    case ActionType.CATCH_ERROR:
      return extend(state, {
        isError: true,
        errorType: action.payload,
      });

    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator, Operation};
