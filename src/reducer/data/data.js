import {extend} from "../../common.js";
import {getAdaptedFilmsData, getAdaptedFilmData} from "../../adapter/adapter.js";

const initialState = {
  films: [],
  promoFilm: {},
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  CATCH_ERROR: `CATCH_ERROR`,
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

  catchError: () => {
    return {
      type: ActionType.CATCH_ERROR,
      payload: true,
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
      .catch(() => {
        dispatch(ActionCreator.catchError());
      });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const adaptedData = getAdaptedFilmData(response.data);
        dispatch(ActionCreator.loadPromo(adaptedData));
      })
      .catch(() => {
        dispatch(ActionCreator.catchError());
      });
  },

  changeFavoriteState: (film) => (dispatch, getState, api) => {
    return api.post(`/favorite/${film.id}/${film.isFavorite ? 0 : 1}`)
    .then(() => {
      dispatch(Operation.loadFilms());
      dispatch(Operation.loadPromo());
    })
      .catch(() => {
        dispatch(ActionCreator.catchError());
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
        isError: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator, Operation};
