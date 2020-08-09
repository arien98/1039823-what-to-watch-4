import {NameSpace} from "../name-space.js";


const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => state[NAME_SPACE].films;

export const getPromoFilm = (state) => state[NAME_SPACE].promoFilm;

export const getIsError = (state) => state[NAME_SPACE].isError;

export const getFavoriteFilms = (state) => state[NAME_SPACE].favoriteFilms;

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};
