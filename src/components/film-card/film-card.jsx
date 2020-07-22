import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Video from "../video/video.jsx";

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {isVideoPlaying: false};
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onMouseOut = this._onMouseOut.bind(this);
  }

  render() {
    const {onFilmCardClick, filmData} = this.props;
    const {title, id, poster, preview} = filmData;

    return (
      <article
        className="small-movie-card catalog__movies-card"
      >
        <div
          className="small-movie-card__image"
          onClick={onFilmCardClick}
          onMouseOver={this._onMouseOver}
          onMouseOut={this._onMouseOut}
          data-id={id}
        >
          {this.state.isVideoPlaying
            ? <Video preview={preview} poster={poster} />
            : <img className="small-movie-card__pic" src={poster} alt={title} width="280" height="175" />
          }
        </div>
        <h3
          className="small-movie-card__title"
          onClick={onFilmCardClick}
        >
          <a
            className="small-movie-card__link"
            href="movie-page.html"
            data-id={id}
          >
            {title}
          </a>
        </h3>
      </article>
    );
  }

  _onMouseOver() {
    this.setState({isVideoPlaying: true});
  }

  _onMouseOut() {
    this.setState({isVideoPlaying: false});
  }
}

FilmCard.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  filmData: PropTypes.object.isRequired,
};

export default FilmCard;
