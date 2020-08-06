import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Catalog from "../../components/catalog/catalog.jsx";
import withButton from "./with-show-more-button.js";

const CatalogWithButton = withButton(Catalog);


configure({adapter: new Adapter()});

describe(`catalog with filter`, () => {
  const props = {
    onFilmCardClick: () => {},
    onFilterClick: () => {},
    currentFilter: `All genres`,
    children: [],
    filmsData: [
      {
        id: 1,
        title: `Bohemian Rhapsody`,
        smallPoster: `img/bohemian-rhapsody.jpg`,
        genre: `Dramas`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 2,
        title: `Macbeth`,
        smallPoster: `img/macbeth.jpg`,
        genre: `Horror`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 3,
        title: `Aviator`,
        smallPoster: `img/aviator.jpg`,
        genre: `Horror`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 4,
        title: `Bohemian Rhapsody`,
        smallPoster: `img/bohemian-rhapsody.jpg`,
        genre: `Dramas`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 5,
        title: `Macbeth`,
        smallPoster: `img/macbeth.jpg`,
        genre: `Horror`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 6,
        title: `Aviator`,
        smallPoster: `img/aviator.jpg`,
        genre: `Horror`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 7,
        title: `Bohemian Rhapsody`,
        smallPoster: `img/bohemian-rhapsody.jpg`,
        genre: `Dramas`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 8,
        title: `Macbeth`,
        smallPoster: `img/macbeth.jpg`,
        genre: `Horror`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 9,
        title: `Aviator`,
        smallPoster: `img/aviator.jpg`,
        genre: `Horror`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
    ],
    genres: [`All genres`, `Dramas`, `Horror`],
  };

  test(`should show the button and 8 filmCards`, () => {
    const catalog = mount(<CatalogWithButton {...props} />);

    const button = catalog.find(`.catalog__button`);
    const filmCards = catalog.find(`.catalog__movies-card`);

    expect(button.length).toEqual(1);
    expect(filmCards.length).toEqual(8);
  });

  test(`should hide after showing the rest`, () => {
    const catalog = mount(<CatalogWithButton {...props} />);

    const button = catalog.find(`.catalog__button`);

    button.simulate(`click`);

    const filmCards = catalog.find(`.catalog__movies-card`);

    expect(filmCards.length).toEqual(9);
    // expect(button.length).toEqual(0);
  });
});
