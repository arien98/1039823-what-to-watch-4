import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      currentTab: `Overview`,
      filmData: {
        title: `Aviator`,
        poster: `../img/aviator.jpg`,
        genre: `Drama`,
        releaseDate: 2010,
        ratingScore: 8,
        ratingLevel: `Good`,
        ratingCount: 200,
        description: `Early in World War II, an inexperienced U.S. Navy captain must lead an Allied convoy being stalked by Nazi U-boat wolfpacks.`,
        director: `Rian Johnson`,
        starring: [
          `Anthony Mann`,
          `Guy Ritchie`,
        ],
        runtime: `1h 10m`,
      },
    };

    const tree = renderer
      .create(<Tabs {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
