import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

import Detail from "./detail";
import DetailMobile from "./detail-mobile";

const DetailView = props => {
  const windowSize = useWindowSize();

  return windowSize.width > 728 ? (
    <Detail {...props} /> 
  ) : <DetailMobile {...props} />;
};

export default DetailView;
