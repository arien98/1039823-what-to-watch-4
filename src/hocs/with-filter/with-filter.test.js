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
      ],
      onFilmCardClick: () => {},
      genres: [`All genres`, `Dramas`, `Horror`],
    };

    const tree = renderer
      .create(<MockComponentWrapped {...props}></MockComponentWrapped>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
