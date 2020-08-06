import {NameSpace} from "../name-space.js";


const NAME_SPACE = NameSpace.SCREEN;

export const getScreenMode = (state) => {
  return state[NAME_SPACE].screenMode;
};

export const getShowedFilmId = (state) => {
  return state[NAME_SPACE].showedFilmId;
};

export const getCurrentTab = (state) => {
  return state[NAME_SPACE].currentTab;
};
