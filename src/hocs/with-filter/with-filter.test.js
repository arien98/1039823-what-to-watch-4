import React from "react";
import renderer from "react-test-renderer";
import withFilter from "./with-filter";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withFilter(MockComponent);

describe(`with filter snapshot`, () => {
  test(`it renders correctly`, () => {
    const props = {
      filmsData: [
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
      ],
      onFilmCardClick: () => {},
    };

    const tree = renderer
      .create(<MockComponentWrapped {...props}></MockComponentWrapped>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
