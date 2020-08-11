export const Error = {
  BAD_INFO: 400,
  UNAUTHORIZED: 401,
};

export const TabsType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const Genres = {
  ALL: `All genres`,
  COMEDIES: `Comedies`,
  CRIMES: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Dramas`,
  HORROR: `Horror`,
  KIDS_AND_FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`,
};

export const extend = (state, newState) => {
  return Object.assign({}, state, newState);
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE: `/films`,
  PLAYER: `/player`,
  ERROR: `/error`,
};

export const getTimeElapsed = (duration) => {
  const seconds = Math.trunc(duration % 60);
  const minutes = Math.trunc(duration / 60);
  const hours = Math.trunc(minutes / 60);

  return [
    (`0` + hours).slice(-2),
    (`0` + minutes).slice(-2),
    (`0` + seconds).slice(-2)
  ].join(`:`);
};
