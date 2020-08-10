import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {history} from '../../history.js';

const Review = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 400,
};

const INITIAL_RATING = 5;

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: INITIAL_RATING,
        comment: ``,
        isSubmitDisabled: true,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._handleSubmitClick = this._handleSubmitClick.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _handleReviewChange(evt) {
      this.setState({
        comment: evt.target.value,
        isSubmitDisabled: (evt.target.value.length < Review.MIN_LENGTH) || (evt.target.value.length > Review.MAX_LENGTH) ? true : false,
      });
    }

    _handleSubmitClick() {
      const {filmId, onReviewSubmit} = this.props;

      const review = {
        rating: this.state.rating,
        comment: this.state.comment,
      };

      onReviewSubmit(filmId, review);
      history.goBack();
    }

    render() {
      return (
        <Component
          {...this.props}
          onSubmitClick={this._handleSubmitClick}
          onRatingChange={this._handleRatingChange}
          onReviewChange={this._handleReviewChange}
          isSubmitDisabled={this.state.isSubmitDisabled}
        />
      );
    }
  }

  WithReview.propTypes = {
    filmId: PropTypes.number.isRequired,
    onReviewSubmit: PropTypes.func.isRequired,
  };

  return WithReview;
};

export default withReview;
