import React from "react";
import renderer from "react-test-renderer";
import withVideo from "../with-video/with-video.jsx";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withVideo(MockComponent);

describe(`with full screen videoplayer snapshot`, () => {
  test(`it renders correctly`, () => {
    const filmData = {
      title: `Aviator`,
      smallPoster: `../img/aviator.jpg`,
      genre: `Drama`,
      releaseDate: 2010,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    };

    const tree = renderer
    .create(
        <MockComponentWrapped
          filmData={filmData}
          onFilmCardClick={() => {}}
        />, {
          createNodeMock: (element) => {
            if (element.type === `video`) {
              return {
                play: () => {},
                src: `ddd`,
                poster: `fff`,
              };
            }
            return null;
          }
        }
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
