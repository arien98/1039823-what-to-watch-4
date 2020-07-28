import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from "../../components/film-card/film-card.jsx";
import withVideo from "./with-video.jsx";

const FilmCardWithVideo = withVideo(FilmCard);


configure({adapter: new Adapter()});

describe(`film card with video`, () => {
  const props = {
    onFilmCardClick: () => {},
    filmData: {
      title: `Aviator`,
      id: `01`,
      poster: `img/avatar.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    children: [],
    isVideoPlaying: false,
    onMouseOver: () => {},
    onMouseOut: () => {},
  };

  test(`check on mouseover`, () => {
    const filmCard = mount(
        <FilmCardWithVideo
          {...props}
        />
    );

    expect(filmCard.find(`.small-movie-card__video`)).toHaveLength(0);
    expect(filmCard.find(`.small-movie-card__pic`)).toHaveLength(1);

    const filmImage = filmCard.find(`.small-movie-card__image`);

    filmImage.simulate(`mouseover`);

    expect(filmCard.find(`.small-movie-card__video`)).toHaveLength(1);
    expect(filmCard.find(`.small-movie-card__pic`)).toHaveLength(0);
  });
});
