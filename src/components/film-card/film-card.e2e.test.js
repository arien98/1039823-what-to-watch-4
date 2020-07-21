import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from "./film-card.jsx";


configure({adapter: new Adapter()});

describe(`film card`, () => {
  const props = {
    onFilmCardClick: () => {},
    onFilmCardFocus: () => {},
    filmData: {
      title: `Aviator`,
      genre: `Drama`,
    }
  };

  test(`check on focus`, () => {
    const onFocus = jest.fn();

    const filmCard = shallow(
        <FilmCard
          {...props}
          onFilmCardFocus = {onFocus}
        />
    );

    const filmHeader = filmCard.find(`.small-movie-card`);

    filmHeader.simulate(`focus`);

    expect(onFocus).toHaveBeenCalled();
  });
});
