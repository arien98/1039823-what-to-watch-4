import React from "react";
import renderer from "react-test-renderer";
import Video from "./video.jsx";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      poster: `../img/aviator.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    };

    const tree = renderer
      .create(<Video {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
