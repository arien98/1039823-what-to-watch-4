import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ShowMoreButton from "../../components/show-more-button/show-more-button.jsx";

const FILMS_COUNT_ON_START = 8;
const ADD_FILMS_COUNT = 8;

const withShowMoreButton = (Component) => {
  class WithShowMoreButton extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {filmsOnPage: FILMS_COUNT_ON_START, filter: null};

      this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    }

    componentDidUpdate() {
      const {filter} = this.props;

      if (filter !== this.state.filter) {
        this.setState({filmsOnPage: FILMS_COUNT_ON_START, filter});
      }
    }

    _handleShowMoreButtonClick() {
      this.setState((prevState) => ({
        filmsOnPage: prevState.filmsOnPage + ADD_FILMS_COUNT
      }));
    }

    render() {
      const {filmsData} = this.props;

      return (
        <Component
          {...this.props}
          filmsData={filmsData.slice(0, this.state.filmsOnPage)}
          onShowMoreButtonClick={this._handleShowMoreButtonClick}
        >
          {this.state.filmsOnPage < filmsData.length
            ? <ShowMoreButton onShowMoreButtonClick={this._handleShowMoreButtonClick} />
            : ``}
        </Component>
      );
    }
  }

  WithShowMoreButton.propTypes = {
    filmsData: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      smallPoster: PropTypes.string.isRequired,
      bigPoster: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      releaseDate: PropTypes.number.isRequired,
      ratingScore: PropTypes.number.isRequired,
      ratingCount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.arrayOf(PropTypes.string.isRequired),
      runtime: PropTypes.number.isRequired,
      preview: PropTypes.string.isRequired,
      video: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })).isRequired,
    filter: PropTypes.string.isRequired,
  };

  return WithShowMoreButton;
};

export default withShowMoreButton;
