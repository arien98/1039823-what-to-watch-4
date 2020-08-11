import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFavoriteFilms} from '../../reducer/data/selectors.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import FilmsList from '../films-list/films-list.jsx';
import ErrorScreen from '../error-screen/error-screen.jsx';

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavoriteFilms} = this.props;
    loadFavoriteFilms();
  }

  render() {
    const {favoriteFilms, onFilmCardClick} = this.props;

    // if (!favoriteFilms) {
    //   return <ErrorScreen errorText={`Loading...`}/>;
    // }

    return (
      <div className="user-page">

        <Header>
          <h1 className="page-title user-page__title">My list</h1>
        </Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsList
            filmsData={favoriteFilms}
            onFilmCardClick={onFilmCardClick}
          />
        </section>

        <Footer />
      </div>
    );
  }
}

MyList.propTypes = {
  favoriteFilms: PropTypes.array,
  onFilmCardClick: PropTypes.func.isRequired,
  loadFavoriteFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms() {
    dispatch(DataOperation.loadFavoriteFilms());
  },
});


export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
