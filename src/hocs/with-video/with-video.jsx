import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Video from "../../components/video/video.jsx";

const VIDEO_TIMEOUT = 1000;

const withVideo = (Component) => {

  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {isVideoPlaying: false};
      this._handleMouseOver = this._handleMouseOver.bind(this);
      this._handleMouseOut = this._handleMouseOut.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this._videoTimer);
    }

    render() {
      const {filmData} = this.props;
      const {smallPoster, preview} = filmData;

      return (
        <Component
          {...this.props}
          isVideoPlaying={this.state.isVideoPlaying}
          onMouseOver={this._handleMouseOver}
          onMouseOut={this._handleMouseOver}
        >
          <Video preview={preview} poster={smallPoster} />
        </Component>
      );
    }

    _handleMouseOver() {
      this._videoTimer();
    }

    _handleMouseOut() {
      this.setState({isVideoPlaying: false});
      clearTimeout(this._videoTimer);
    }

    _videoTimer() {
      setTimeout(() => this.setState({isVideoPlaying: true}), VIDEO_TIMEOUT);
    }
  }

  WithVideo.propTypes = {
    onFilmCardClick: PropTypes.func.isRequired,
    filmData: PropTypes.shape({
      smallPoster: PropTypes.string,
      preview: PropTypes.string
    }).isRequired,
  };

  return WithVideo;
};


export default withVideo;
