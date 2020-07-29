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
  const filmsData = [
    {
      id: 2,
      title: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
    },
    {
      id: 3,
      title: `Macbeth`,
      poster: `img/macbeth.jpg`,
    },
    {
      id: 4,
      title: `Aviator`,
      poster: `img/aviator.jpg`,
    },
    {
      id: 5,
      title: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
    },
    {
      id: 6,
      title: `Macbeth`,
      poster: `img/macbeth.jpg`,
    },
    {
      id: 7,
      title: `Aviator`,
      poster: `img/aviator.jpg`,
    },
    {
      id: 8,
      title: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
    },
    {
      id: 9,
      title: `Macbeth`,
      poster: `img/macbeth.jpg`,
    },
    {
      id: 10,
      title: `Aviator`,
      poster: `img/aviator.jpg`,
    },
  ];

  const tree = renderer.create(
      <MockComponentWrapped
        filmsData={filmsData}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
