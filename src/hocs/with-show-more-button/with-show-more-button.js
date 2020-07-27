import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ShowMoreButton from "../../components/show-more-button/show-more-button.jsx";

const FILMS_COUNT_ON_START = 8;
const ADD_FILMS_COUNT = 8;

const withButton = (Component) => {
  class WithButton extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {filmsOnPage: FILMS_COUNT_ON_START};

      this._onShowMoreButtonClick = this._onShowMoreButtonClick.bind(this);
    }

    componentWillUpdate() {
      this.setState({filmsOnPage: FILMS_COUNT_ON_START});
    }

    render() {
      const {filmsData} = this.props;

      return (
        <Component
          {...this.props}
          filmsData={filmsData.slice(0, this.state.filmsOnPage)}
          onShowMoreButtonClick={this._onShowMoreButtonClick}
        >
          {this.state.filmsOnPage < filmsData.length
            ? <ShowMoreButton onShowMoreButtonClick={this._onShowMoreButtonClick} />
            : ``}
        </Component>
      );
    }

    _onShowMoreButtonClick() {
      this.setState((prevState) => ({
        filmsOnPage: prevState.filmsOnPage + ADD_FILMS_COUNT
      }));
    }
  }

  WithButton.propTypes = {
    filmsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return WithButton;
};

export default withButton;
