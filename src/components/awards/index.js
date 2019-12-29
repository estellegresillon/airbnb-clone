import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

import AwardList from "./award-list";
import AwardListMobile from "./award-list-mobile";

const AwardListView = props => {
  const windowSize = useWindowSize();

  return windowSize.width > 728 ? (
    <AwardList {...props} /> 
  ) : <AwardListMobile {...props} />;
};

export default AwardListView;