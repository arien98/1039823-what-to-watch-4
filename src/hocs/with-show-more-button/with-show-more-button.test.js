import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withShowMoreButton from "./with-show-more-button.js";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withShowMoreButton(MockComponent);

it(`with button renders correctly`, () => {
  const props = {
    filmsData: [
      {id: 1, bgColor: `#A6B7AC`, bigPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`, description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`, director: `Martin Scorsese`, genre: `Crime`, isFavorite: false, poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`, preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, ratingCount: 370881, ratingScore: 8.8, releaseDate: 2002, runtime: 167, smallPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`, starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`], title: `Gangs of new york`, video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`},
      {id: 2, bgColor: `#A6B7AC`, bigPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`, description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`, director: `Martin Scorsese`, genre: `Crime`, isFavorite: false, poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`, preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, ratingCount: 370881, ratingScore: 8.8, releaseDate: 2002, runtime: 167, smallPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`, starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`], title: `Gangs of new york`, video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`},
      {id: 3, bgColor: `#A6B7AC`, bigPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`, description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`, director: `Martin Scorsese`, genre: `Crime`, isFavorite: false, poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`, preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, ratingCount: 370881, ratingScore: 8.8, releaseDate: 2002, runtime: 167, smallPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`, starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`], title: `Gangs of new york`, video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`},
    ],
    genres: [`All genres`, `Dramas`, `Horror`],
    filter: `All genres`,
  };

  const tree = renderer.create(
      <MockComponentWrapped
        {...props}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
