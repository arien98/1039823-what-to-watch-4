import React from "react";
import renderer from "react-test-renderer";
import withFullScreenVideoplayer from "./with-full-screen-videoplayer";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withFullScreenVideoplayer(MockComponent);

describe(`with full screen videoplayer snapshot`, () => {
  test(`it renders correctly`, () => {
    const props = {
      activeMovie:
        {
          id: 2,
          title: `Bohemian Rhapsody`,
          poster: `img/bohemian-rhapsody.jpg`,
          video: ``,
        },
      onExitButtonClick: () => {},
    };

    const tree = renderer
    .create(
        <MockComponentWrapped {...props}/>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
