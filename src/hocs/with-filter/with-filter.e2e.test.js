import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Catalog from "../../components/catalog/catalog.jsx";
import withFilter from "./with-filter.js";

const CatalogWithFilter = withFilter(Catalog);


configure({adapter: new Adapter()});

describe(`catalog with filter`, () => {
  const props = {
    onFilmCardClick: () => {},
    onFilterClick: () => {},
    currentFilter: `All genres`,
    children: [],
    filmsData: [{
      id: 2,
      title: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
      genre: `Dramas`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      id: 3,
      title: `Macbeth`,
      poster: `img/macbeth.jpg`,
      genre: `Horror`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      id: 4,
      title: `Aviator`,
      poster: `img/aviator.jpg`,
      genre: `Horror`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    ],
  };

  test(`should filter drama films on click`, () => {
    const catalog = mount(<CatalogWithFilter {...props} />);

    const dramaFilters = catalog.find(`a[data-filter="Dramas"]`);

    dramaFilters.simulate(`click`);

    const dramaFilms = catalog.find(`.small-movie-card`);

    expect(dramaFilms.length).toEqual(1);
  });

  test(`should filter horror films on click`, () => {
    const catalog = mount(<CatalogWithFilter {...props} />);

    const dramaFilters = catalog.find(`a[data-filter="Horror"]`);

    dramaFilters.simulate(`click`);

    const dramaFilms = catalog.find(`.small-movie-card`);

    expect(dramaFilms.length).toEqual(2);
  });
});
