import React from "react";
import PropTypes from "prop-types";

const Video = (props) => {
  const {poster, preview} = props;
  return (
    <video controls muted poster={poster}>
      <source src={preview}/>
    </video>
  );
};

Video.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Video;
