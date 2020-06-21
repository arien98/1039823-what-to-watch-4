import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main";


configure({adapter: new Adapter()});

describe(`main page`, () => {
  const props = {
    title: `Aviator`,
    genre: `Drama`,
    releaseDate: new Date(0),
    filmTitles: [`Bohemian Rhapsody`, `Macbeth`, `Aviator`],
  };

  test(`should run callback on click`, () => {
    const onClick = jest.fn();
    const mainComponent = mount(<Main {...props} onFilmHeaderClick={onClick} />);

    const filmHeaders = mainComponent.find(`small-movie-card__link`);

    filmHeaders.forEach((it) => it.simulate(`click`));

    expect(onClick.mock.calls.length).toEqual(filmHeaders.length);
  });
});
