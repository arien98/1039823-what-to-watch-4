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
  ALL: `Show all`,
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

export const getGenres = (filmsData) => {
  return filmsData.map((it) => {
    const genre = it.genre;
    switch (genre) {
      case `Comedy`:
        return `Comedies`;
      case `Thriller`:
        return `Thrillers`;
      case `Drama`:
        return `Dramas`;
      default:
        return genre;
    }
  });
};

export const ScreenMode = {
  MAIN: `main page`,
  DETAILS: `film details`,
};

export const extend = (state, newState) => {
  return Object.assign({}, state, newState);
};
