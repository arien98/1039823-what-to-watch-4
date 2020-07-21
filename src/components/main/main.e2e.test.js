import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main";


configure({adapter: new Adapter()});

describe(`main page`, () => {
  const props = {
    descFilm: {
      title: `Aviator`,
      poster: `../img/aviator.jpg`,
      genre: `Drama`,
      releaseDate: 2010,
    },
    filmsTitles: [`Bohemian Rhapsody`, `Macbeth`, `Aviator`],
    filmsData: [{
      id: 2,
      title: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
    },
    {
      id: 3,
      title: `Macbeth`,
      poster: `img/macbeth.jpg`,
    },
    {
      id: 4,
      title: `Aviator`,
      poster: `img/aviator.jpg`,
    },
    ]
  };

  test(`should run callback on click on header`, () => {
    const onClick = jest.fn();
    const mainComponent = mount(<Main {...props} onFilmCardClick={onClick} />);

    const filmHeaders = mainComponent.find(`small-movie-card__link`);

    filmHeaders.forEach((it) => it.simulate(`click`));

    expect(onClick.mock.calls.length).toEqual(filmHeaders.length);
  });

  test(`should run callback on click on image`, () => {
    const onClick = jest.fn();
    const mainComponent = mount(<Main {...props} onFilmCardClick={onClick} />);

    const filmCardImages = mainComponent.find(`small-movie-card__image`);

    filmCardImages.forEach((it) => it.simulate(`click`));

    expect(onClick.mock.calls.length).toEqual(filmCardImages.length);
  });
});
