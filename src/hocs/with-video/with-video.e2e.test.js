import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from "../../components/film-card/film-card.jsx";
import withVideo from "./with-video.jsx";

const FilmCardWithVideo = withVideo(FilmCard);

// jest.useFakeTimers();

configure({adapter: new Adapter()});

describe(`film card with video`, () => {
  const props = {
    onFilmCardClick: () => {},
    filmData: {
      title: `Aviator`,
      id: `01`,
      smallPoster: `img/avatar.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    children: [],
    isVideoPlaying: false,
    // onMouseOver: () => {},
    onMouseOut: () => {},
  };

  test(`check on mouseover`, () => {
    const fakeOnMouseOver = jest.fn();
    const filmCard = mount(
        <FilmCardWithVideo
          {...props}
          onMouseOver={fakeOnMouseOver}
        />
    );
    filmCard.props().onMouseOver();


    expect(fakeOnMouseOver).toHaveBeenCalled();
  });
});
