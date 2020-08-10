import {reducer, ActionType} from "./screen.js";
import {TabsType} from "../../common.js";

describe(`Screen reducer works correctly`, () => {
  it(`Reducer should change authorizationStatus by a given value`, () => {
    expect(reducer({
      showedFilmId: null,
      currentTab: null
    }, {
      type: ActionType.SET_FILM_ID,
      showedFilmId: 1,
    })).toEqual({
      showedFilmId: 1,
      currentTab: TabsType.OVERVIEW
    });

    expect(reducer({
      showedFilmId: 1,
    }, {
      type: ActionType.RESET_FILM_ID,
      showedFilmId: null,
    })).toEqual({
      showedFilmId: null,
    });

    expect(reducer({
      currentTab: TabsType.OVERVIEW,
    }, {
      type: ActionType.CHANGE_TAB,
      tab: TabsType.DETAILS,
    })).toEqual({
      currentTab: TabsType.DETAILS,
    });

    expect(reducer({
      isFormDisabled: false,
    }, {
      type: ActionType.TOGGLE_FORM_STATE,
      payload: true,
    })).toEqual({
      isFormDisabled: true,
    });

    expect(reducer({
      isMovieVideoplayerActive: false,
    }, {
      type: ActionType.ACTIVATE_MOVIE_VIDEOPLAYER,
      payload: true,
    })).toEqual({
      isMovieVideoplayerActive: true,
    });

    expect(reducer({
      isReviewOpen: false,
    }, {
      type: ActionType.ADD_REVIEW,
      payload: true,
    })).toEqual({
      isReviewOpen: true,
    });

  });
});
