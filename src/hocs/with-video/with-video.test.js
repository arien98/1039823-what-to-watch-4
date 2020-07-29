import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withVideo from "./with-video";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

it(`with button renders correctly`, () => {
  const filmData = {
    title: `Aviator`,
    poster: `../img/aviator.jpg`,
    genre: `Drama`,
    releaseDate: 2010,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  };

  const tree = renderer.create(
      <MockComponentWrapped
        filmData={filmData}
        onFilmCardClick={() => {}}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
