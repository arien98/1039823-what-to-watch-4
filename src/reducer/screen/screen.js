import {ScreenMode, TabsType, extend} from "../../common.js";

const ActionType = {
  SHOW_MAIN: `show main page`,
  SHOW_DETAILS: `show film details page`,
  CHANGE_TAB: `change tab on film details page`,
};

const ActionCreator = {
  showMain: () => ({
    type: ActionType.SHOW_MAIN,
    showedFilmId: null,
  }),
  showDetails: (id) => ({
    type: ActionType.SHOW_DETAILS,
    showedFilmId: id,
  }),
  changeTab: (tab) => ({
    type: ActionType.CHANGE_TAB,
    tab,
  }),
};

const initialState = {
  screenMode: ScreenMode.MAIN,
  showedFilmId: null,
  currentTab: TabsType.OVERVIEW,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SHOW_DETAILS:
      return extend(state, {screenMode: ScreenMode.DETAILS, showedFilmId: action.showedFilmId});

    case ActionType.SHOW_MAIN:
      return extend(state, {screenMode: ScreenMode.MAIN, showedFilmId: action.showedFilmId});

    case ActionType.CHANGE_TAB:
      return extend(state, {currentTab: action.tab});

  }
  return state;
};

export {ActionType, ActionCreator, reducer};
