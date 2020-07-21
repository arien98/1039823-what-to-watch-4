import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from "./film-card.jsx";


configure({adapter: new Adapter()});

describe(`film card`, () => {
  const props = {
    onFilmCardClick: () => {},
    filmData: {
      title: `Aviator`,
      id: `01`,
    }
  };

  test(`check on mouseover`, () => {
    const onMouseOver = jest.fn();

    const filmCard = shallow(
        <FilmCard
          {...props}
        />
    );

    const filmHeader = filmCard.find(`.small-movie-card__image`);

    filmHeader.onMouseOver = onMouseOver;

    filmHeader.simulate(`mouseover`);

    expect(onMouseOver).toHaveBeenCalled();
  });
});
