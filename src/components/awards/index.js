import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

import Awards from "./awards";
import AwardsMobile from "./awards-mobile";

const AwardsView = props => {
  const windowSize = useWindowSize();

  return windowSize.width > 728 ? (
    <Awards {...props} /> 
  ) : <AwardsMobile {...props} />;
};

export default AwardsView;