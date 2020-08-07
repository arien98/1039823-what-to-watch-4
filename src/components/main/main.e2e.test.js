import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main";


configure({adapter: new Adapter()});

describe(`main page`, () => {
  const props = {
    promoFilm: {
      title: `Aviator`,
      smallPoster: `../img/aviator.jpg`,
      genre: `Drama`,
      releaseDate: 2010,
    },
    filmsData: [{
      id: 2,
      title: `Bohemian Rhapsody`,
      smallPoster: `img/bohemian-rhapsody.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      id: 3,
      title: `Macbeth`,
      smallPoster: `img/macbeth.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      id: 4,
      title: `Aviator`,
      smallPoster: `img/aviator.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    ],
    login: () => {},
    authorizationStatus: `AUTH`,
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
