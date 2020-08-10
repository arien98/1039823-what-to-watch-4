import React from "react";
import PropTypes from "prop-types";
import OverviewTab from "../overview-tab/overview-tab.jsx";
import DetailsTab from "../details-tab/details-tab.jsx";
import ReviewsTab from "../reviews-tab/reviews-tab.jsx";
import {TabsType} from "../../common.js";

const Tabs = (props) => {
  const {currentTab, filmData} = props;

  const {
    genre,
    releaseDate,
    ratingScore,
    ratingCount,
    description,
    director,
    starring,
    runtime,
  } = filmData;

  switch (currentTab) {
    case TabsType.OVERVIEW:
      return <OverviewTab
        ratingScore={ratingScore}
        ratingCount={ratingCount}
        description={description}
        director={director}
        starring={starring}
      />;
    case TabsType.DETAILS:
      return <DetailsTab
        starring={starring}
        director={director}
        runtime={runtime}
        genre={genre}
        releaseDate={releaseDate}

      />;
    case TabsType.REVIEWS:
      return <ReviewsTab />;
  }

  return <OverviewTab ratingScore={ratingScore} />;
};

Tabs.propTypes = {
  currentTab: PropTypes.string,
  filmData: PropTypes.object,
};

export default Tabs;
