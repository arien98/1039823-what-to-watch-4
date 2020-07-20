import React from "react";
import PropTypes from "prop-types";

const Video = (props) => {
  const {poster, preview} = props;
  return (
    <video autoPlay muted poster={poster} width="280" height="175">
      <source src={preview}/>
    </video>
  );
};

Video.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Video;
