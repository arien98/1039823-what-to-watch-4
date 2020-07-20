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
          onMouseOver = {onMouseOver}
        />
    );

    const filmHeader = filmCard.find(`.small-movie-card`);

    filmHeader.simulate(`mouseover`);

    expect(onMouseOver).toHaveBeenCalled();
  });
});
