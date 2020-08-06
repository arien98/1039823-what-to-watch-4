import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withButton from "./with-show-more-button.js";

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

const MockComponentWrapped = withButton(MockComponent);

it(`with button renders correctly`, () => {
  const props = {
    filmsData: [
      {
        id: 2,
        title: `Bohemian Rhapsody`,
        smallPoster: `img/bohemian-rhapsody.jpg`,
      },
      {
        id: 3,
        title: `Macbeth`,
        smallPoster: `img/macbeth.jpg`,
      },
      {
        id: 4,
        title: `Aviator`,
        smallPoster: `img/aviator.jpg`,
      },
      {
        id: 5,
        title: `Bohemian Rhapsody`,
        smallPoster: `img/bohemian-rhapsody.jpg`,
      },
      {
        id: 6,
        title: `Macbeth`,
        smallPoster: `img/macbeth.jpg`,
      },
      {
        id: 7,
        title: `Aviator`,
        smallPoster: `img/aviator.jpg`,
      },
      {
        id: 8,
        title: `Bohemian Rhapsody`,
        smallPoster: `img/bohemian-rhapsody.jpg`,
      },
      {
        id: 9,
        title: `Macbeth`,
        smallPoster: `img/macbeth.jpg`,
      },
      {
        id: 10,
        title: `Aviator`,
        smallPoster: `img/aviator.jpg`,
      },
    ],
    genres: [`All genres`, `Dramas`, `Horror`],
  };

  const tree = renderer.create(
      <MockComponentWrapped
        {...props}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
