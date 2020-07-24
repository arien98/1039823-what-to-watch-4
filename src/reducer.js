import {filmsData, promoFilm} from "./mocks/films.js";
import {Genres, ScreenMode, TabsType, extend} from "./common.js";

const ActionType = {
  FILTER: `filter films`,
  SHOW_ALL: `return all`,
  SHOW_MAIN: `show main page`,
  SHOW_DETAILS: `show film details page`,
  CHANGE_TAB: `change tab on film details page`,
};

const ActionCreator = {
  showAll: () => ({
    type: ActionType.SHOW_ALL,
    filter: Genres.All,
  }),
  filterByGenre: (filter) => ({
    type: ActionType.FILTER,
    filter,
  }),
  showMain: () => ({
    type: ActionType.SHOW_MAIN,
    showedFilm: null,
  }),
  showDetails: (film) => ({
    type: ActionType.SHOW_DETAILS,
    showedFilm: film,
  }),
  changeTab: (tab) => ({
    type: ActionType.CHANGE_TAB,
    tab,
  }),
};

const initialState = {
  promoFilm,
  films: filmsData,
  filter: Genres.ALL,
  screenMode: ScreenMode.MAIN,
  showedFilm: null,
  currentTab: TabsType.OVERVIEW,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SHOW_ALL:
      return extend(state, {films: initialState.films, filter: initialState.filter});

    case ActionType.FILTER:
      return extend(state, {
        films: initialState.films.filter((element) => {
          return element.genre === action.filter;
        }),
        filter: action.filter,
      });

    case ActionType.SHOW_DETAILS:
      return extend(state, {screenMode: ScreenMode.DETAILS, showedFilm: action.showedFilm});

    case ActionType.SHOW_MAIN:
      return extend(state, {screenMode: ScreenMode.MAIN, showedFilm: action.showedFilm});

    case ActionType.CHANGE_TAB:
      return extend(state, {currentTab: action.tab});
  }
  return state;
};

export {ActionType, ActionCreator, reducer};
