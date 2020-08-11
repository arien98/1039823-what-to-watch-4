import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {NameSpace} from "../../reducer/name-space.js";
import {history} from '../../history.js';

const mockStore = configureStore([]);

describe(`app renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      promoFilm: {id: 0, bgColor: `#A6B7AC`, bigPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`, description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`, director: `Martin Scorsese`, genre: `Crime`, isFavorite: false, poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`, preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, ratingCount: 370881, ratingScore: 8.8, releaseDate: 2002, runtime: 167, smallPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`, starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`], title: `Gangs of new york`, video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`},
      filmsData: [
        {id: 1, bgColor: `#A6B7AC`, bigPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`, description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`, director: `Martin Scorsese`, genre: `Crime`, isFavorite: false, poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`, preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, ratingCount: 370881, ratingScore: 8.8, releaseDate: 2002, runtime: 167, smallPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`, starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`], title: `Gangs of new york`, video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`},
        {id: 2, bgColor: `#A6B7AC`, bigPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`, description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`, director: `Martin Scorsese`, genre: `Crime`, isFavorite: false, poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`, preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, ratingCount: 370881, ratingScore: 8.8, releaseDate: 2002, runtime: 167, smallPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`, starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`], title: `Gangs of new york`, video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`},
        {id: 3, bgColor: `#A6B7AC`, bigPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`, description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`, director: `Martin Scorsese`, genre: `Crime`, isFavorite: false, poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`, preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, ratingCount: 370881, ratingScore: 8.8, releaseDate: 2002, runtime: 167, smallPoster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`, starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`], title: `Gangs of new york`, video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`},
      ],
      isError: false,
      login: () => {},
      authorizationStatus: `NO_AUTH`,
      isMovieVideoplayerActive: false,
      onExitButtonClick: () => {},
      onFavoriteButtonClick: () => {},
      onFilmCardClick: () => {},
      onPlayButtonClick: () => {},
      onReviewSubmit: () => {},
      authorizationInfo: {
        id: 0,
        email: ``,
        name: ``,
        avatar: ``,
      },
      loadError: true,
    };

    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        authorizationInfo: {
          id: 0,
          email: ``,
          name: ``,
          avatar: ``,
        }
      },
      [NameSpace.SCREEN]: {
        showedFilm: null,
        currentTab: `Overview`,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App {...props}/>
            </Router>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
