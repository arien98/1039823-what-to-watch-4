import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Catalog from "./catalog";


configure({adapter: new Adapter()});

describe(`catalog`, () => {
  const props = {
    onFilmCardClick: () => {},
    filmsData: [{
      id: 2,
      title: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
      genre: `Dramas`
    },
    {
      id: 3,
      title: `Macbeth`,
      poster: `img/macbeth.jpg`,
      genre: `Horror`
    },
    {
      id: 4,
      title: `Aviator`,
      poster: `img/aviator.jpg`,
      genre: `Horror`
    },
    ],
  };

  test(`should filter drama films on click`, () => {
    const catalog = mount(<Catalog {...props} />);

    const dramaFilters = catalog.find(`a[data-filter="Dramas"]`);

    dramaFilters.simulate(`click`);

    const dramaFilms = catalog.find(`.small-movie-card`);

    expect(dramaFilms.length).toEqual(1);
  });

  test(`should filter horror films on click`, () => {
    const catalog = mount(<Catalog {...props} />);

    const dramaFilters = catalog.find(`a[data-filter="Horror"]`);

    dramaFilters.simulate(`click`);

    const dramaFilms = catalog.find(`.small-movie-card`);

    expect(dramaFilms.length).toEqual(2);
  });
});
