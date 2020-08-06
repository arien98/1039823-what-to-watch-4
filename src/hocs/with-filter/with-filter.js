import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Genres} from "../../common.js";

const withFilter = (Component) => {
  class WithFilter extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {filter: Genres.ALL};

      this._onFilterClick = this._onFilterClick.bind(this);
    }

    render() {
      const {filmsData} = this.props;

      const genres = filmsData.map((it) => it.genre);
      const uniqueGenres = [Genres.ALL, ...new Set(genres)];

      return (
        <Component
          {...this.props}
          filmsData={this._getFilterdFilms()}
          onFilterClick={this._onFilterClick}
          currentFilter={this.state.filter}
          genres={uniqueGenres}
        ></Component>
      );
    }

    _getFilterdFilms() {
      const {filmsData} = this.props;

      return this.state.filter === Genres.ALL
        ? filmsData
        : filmsData.filter((it) => it.genre === this.state.filter);
    }

    _onFilterClick(evt) {
      evt.preventDefault();
      const targetFilter = evt.target.dataset.filter;
      this.setState({filter: targetFilter});
    }
  }

  WithFilter.propTypes = {
    filmsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return WithFilter;
};

export default withFilter;
