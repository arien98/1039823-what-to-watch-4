import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Video from "../../components/video/video.jsx";

const withVideo = (Component) => {

  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {isVideoPlaying: false};
    }

    render() {
      const {filmData} = this.props;
      const {poster, preview} = filmData;

      return (
        <Component
          {...this.props}
          isVideoPlaying={this.state.isVideoPlaying}
        >
          <Video preview={preview} poster={poster} />
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    filmData: PropTypes.object.isRequired,
  };

  return WithVideo;
};


export default withVideo;
