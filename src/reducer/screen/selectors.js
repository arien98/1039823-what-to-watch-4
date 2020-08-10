import {NameSpace} from "../name-space.js";


const NAME_SPACE = NameSpace.SCREEN;

export const getShowedFilmId = (state) => {
  return state[NAME_SPACE].showedFilmId;
};

export const getCurrentTab = (state) => {
  return state[NAME_SPACE].currentTab;
};

export const getIsFormDisabled = (state) => {
  return state[NAME_SPACE].isFormDisabled;
};

export const getIsMovieVideoplayerActive = (state) => {
  return state[NAME_SPACE].isMovieVideoplayerActive;
};

export const getIsReviewOpen = (state) => {
  return state[NAME_SPACE].isReviewOpen;
};
