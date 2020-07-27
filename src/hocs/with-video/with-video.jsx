import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Video from "../../components/video/video.jsx";

const withVideo = (Component) => {

  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {isVideoPlaying: false};
      this._onMouseOver = this._onMouseOver.bind(this);
      this._onMouseOut = this._onMouseOut.bind(this);
    }

    render() {
      const {filmData} = this.props;
      const {poster, preview} = filmData;

      return (
        <Component
          {...this.props}
          isVideoPlaying={this.state.isVideoPlaying}
          onMouseOver={this._onMouseOver}
          onMouseOut={this._onMouseOut}
        >
          <Video preview={preview} poster={poster} />
        </Component>
      );
    }

    _onMouseOver() {
      this.setState({isVideoPlaying: true});
    }

    _onMouseOut() {
      this.setState({isVideoPlaying: false});
    }
  }

  WithVideo.propTypes = {
    onFilmCardClick: PropTypes.func.isRequired,
    filmData: PropTypes.object.isRequired,
  };

  return WithVideo;
};


export default withVideo;
