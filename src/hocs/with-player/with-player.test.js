import React from "react";
import renderer from "react-test-renderer";
import withVideo from "./with-player.js";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withVideo(MockComponent);

describe(`with player snapshot`, () => {
  test(`it renders correctly`, () => {
    const props = {
      filmData:
        {
          id: 2,
          title: `Bohemian Rhapsody`,
          poster: `img/bohemian-rhapsody.jpg`,
          preview: ``,
        },
    };

    const tree = renderer
      .create(<MockComponentWrapped {...props}></MockComponentWrapped>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
