import {TabsType, extend} from "../../common.js";

const ActionType = {
  RESET_FILM_ID: `RESET_FILM_ID`,
  SET_FILM_ID: `SET_FILM_ID`,
  CHANGE_TAB: `change tab on film details page`,
  TOGGLE_FORM_STATE: `TOGGLE_FORM_STATE`,
  ACTIVATE_MOVIE_VIDEOPLAYER: `ACTIVATE_MOVIE_VIDEOPLAYER`,
  ADD_REVIEW: `ADD_REVIEW`,
};

const ActionCreator = {
  resetFilmId: () => ({
    type: ActionType.RESET_FILM_ID,
    showedFilmId: null,
  }),

  setFilmId: (id) => ({
    type: ActionType.SET_FILM_ID,
    showedFilmId: id,
  }),

  changeTab: (tab) => ({
    type: ActionType.CHANGE_TAB,
    tab,
  }),

  toggleFormState: (bool) => ({
    type: ActionType.TOGGLE_FORM_STATE,
    payload: bool,
  }),

  activateMovieVideoplayer: (state) => ({
    type: ActionType.ACTIVATE_MOVIE_VIDEOPLAYER,
    payload: state,
  }),

  addReview: (bool) => ({
    type: ActionType.ADD_REVIEW,
    payload: bool,
  }),
};

const initialState = {
  showedFilmId: null,
  currentTab: TabsType.OVERVIEW,
  isFormDisabled: false,
  isMovieVideoplayerActive: false,
  isReviewOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SET_FILM_ID:
      return extend(state, {
        showedFilmId: action.showedFilmId,
        currentTab: TabsType.OVERVIEW
      });

    case ActionType.RESET_FILM_ID:
      return extend(state, {showedFilmId: action.showedFilmId});

    case ActionType.CHANGE_TAB:
      return extend(state, {currentTab: action.tab});

    case ActionType.TOGGLE_FORM_STATE:
      return extend(state, {
        isFormDisabled: action.payload,
      });

    case ActionType.ACTIVATE_MOVIE_VIDEOPLAYER:
      return extend(state, {
        isMovieVideoplayerActive: action.payload,
      });

    case (ActionType.ADD_REVIEW):
      return extend(state, {
        isReviewOpen: action.payload,
      });
  }
  return state;
};

export {ActionType, ActionCreator, reducer};
