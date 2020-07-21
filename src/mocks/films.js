// export default [
//   {
//     id: 1,
//     title: `Fantastic Beasts: The Crimes of Grindelwald`,
//     poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     genre: `Drama`,
//     releaseDate: 2010,
//   },
//   {
//     id: 2,
//     title: `Bohemian Rhapsody`,
//     poster: `img/bohemian-rhapsody.jpg`,
//   },
//   {
//     id: 3,
//     title: `Macbeth`,
//     poster: `img/macbeth.jpg`,
//   },
//   {
//     id: 4,
//     title: `Aviator`,
//     poster: `img/aviator.jpg`,
//   },
//   {
//     id: 5,
//     title: `We need to talk about Kevin`,
//     poster: `img/we-need-to-talk-about-kevin.jpg`,
//   },
//   {
//     id: 6,
//     title: `What We Do in the Shadows`,
//     poster: `img/what-we-do-in-the-shadows.jpg`,
//   },
//   {
//     id: 7,
//     title: `Shutter Island`,
//     poster: `img/shutter-island.jpg`,
//   },
//   {
//     id: 8,
//     title: `Orlando`,
//     poster: `img/orlando.jpg`,
//   },
// ];

import {getRandomArrayItem, getRandomIntegerNumber, getRandomArrayItems} from "../common";

const TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
  `Show more`,
];

const POSTERS = [
  `img/avatar.jpg`,
  `img/aviator.jpg`,
  `img/bg-the-grand-budapest-hotel.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/dardjeeling-limited.jpg`,
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/johnny-english.jpg`,
  `img/macbeth.jpg`,
  `img/midnight-special.jpg`,
  `img/mindhunter.jpg`,
  `img/moonrise-kingdom.jpg`,
  `img/no-country-for-old-men.jpg`,
  `img/orlando.jpg`,
  `img/player-poster.jpg`,
  `img/pulp-fiction.jpg`,
  `img/revenant.jpg`,
  `img/seven-years-in-tibet.jpg`,
  `img/shutter-island.jpg`,
  `img/snatch.jpg`,
  `img/the-grand-budapest-hotel-poster.jpg`,
  `img/war-of-the-worlds.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
];

const GENRES = [
  `drama`,
  `comedy`,
  `TV show`,
  `love story`,
  `horror`,
  `criminal`,
  `tragedy`,
];
const RATING_LEVELS = [
  `Very good`,
  `Good`,
  `Not bad`,
  `Bad`,
  `Horrible`,
];

const DESCRIPTIONS = [
  `Early in World War II, an inexperienced U.S. Navy captain must lead an Allied convoy being stalked by Nazi U-boat wolfpacks.`,
  `A hardened CIA operative finds himself at the mercy of a precocious 9-year-old girl, having been sent undercover to surveil her family.`,
  `In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions.`,
  `Ray Garrison, a slain soldier, is re-animated with superpowers.`,
  `The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance.`,
  `A young Chinese maiden disguises herself as a male warrior in order to save her father. A live-action feature film based on Disney's 'Mulan.'`,
];

const NAMES = [
  `Anthony Mann`,
  `Guy Ritchie`,
  `Rian Johnson`,
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
  `Matthew McConaughey`,
  `Charlie Hunnam`,
  `Michelle Dockery`
];

const createFilm = () => {
  return {
    id: getRandomIntegerNumber(0, 100000),
    title: getRandomArrayItem(TITLES),
    poster: getRandomArrayItem(POSTERS),
    bigPoster: getRandomArrayItem(POSTERS),
    genre: getRandomArrayItem(GENRES),
    releaseDate: getRandomIntegerNumber(1910, 2020),
    ratingScore: getRandomIntegerNumber(10, 99) / 10,
    ratingLevel: getRandomArrayItem(RATING_LEVELS),
    ratingCount: getRandomIntegerNumber(10, 500),
    description: getRandomArrayItem(DESCRIPTIONS),
    director: getRandomArrayItem(NAMES),
    starring: getRandomArrayItems(NAMES, 5),
    runtime: `${getRandomIntegerNumber(0, 2)}h ${getRandomIntegerNumber(0, 59)}m`,
  };
};

const generateFilmsData = (filmsNumber) => {
  return new Array(filmsNumber)
    .fill(``)
    .map(createFilm);
};

export const filmsData = generateFilmsData(8);
