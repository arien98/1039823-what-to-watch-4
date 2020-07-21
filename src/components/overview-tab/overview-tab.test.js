import React from "react";
import renderer from "react-test-renderer";
import OverviewTab from "./overview-tab.jsx";

describe(`main renders correctly`, () => {
  test(`it renders correctly`, () => {
    const props = {
      ratingScore: 8,
      ratingLevel: `Good`,
      ratingCount: 200,
      description: `Early in World War II, an inexperienced U.S. Navy captain must lead an Allied convoy being stalked by Nazi U-boat wolfpacks.`,
      director: `Rian Johnson`,
      starring: [
        `Anthony Mann`,
        `Guy Ritchie`,
      ],
    };

    const tree = renderer
      .create(<OverviewTab {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
