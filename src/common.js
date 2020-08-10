export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

export const getRandomArrayItems = (array, number) => {
  const oldArray = [...array];
  let length = oldArray.length;
  const newArray = [];

  for (let i = 0; i < number; i++) {
    const randomIndex = getRandomIntegerNumber(0, length);

    newArray.push(oldArray[randomIndex]);
    oldArray.splice(randomIndex, 1);
    length--;
  }
  return newArray;
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

export const validateEmail = (evt) => {
  const inputEmail = evt.target.value;
  const pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  if (inputEmail === ``) {
    evt.target.setCustomValidity(`Email is required`);
    evt.target.style.borderColor = `#a8421e`;
    return;
  }

  if (!pattern.test(inputEmail)) {
    evt.target.setCustomValidity(`Email must be in the format email@mail.com`);
    evt.target.style.borderColor = `#a8421e`;
    return;
  }

  evt.target.style.borderColor = `#`;
};

export const validatePassword = (evt) => {
  const inputPassword = evt.target.value;

  if (inputPassword === ``) {
    evt.target.setCustomValidity(`Password is required`);
    evt.target.style.borderColor = `#a8421e`;
    return;
  }
};
