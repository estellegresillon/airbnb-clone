import React from "react";
import { connect } from "react-redux";
import ScrollIntoView from 'react-scroll-into-view';

import Badge from "../common/badge";
import { useComponentVisible } from "../../hooks/useRef";
import { keyList } from "../../constants/key_list";

const Key = props => {
  const { showListingAwards } = props;
  // hook to click outside div to close it
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return showListingAwards ? (
    <div className="keys-wrapper">
      <div className="selection-button" onClick={() => setIsComponentVisible(true)}> 
        Awards <i className="fas fa-chevron-down" />
      </div>
      {isComponentVisible &&
        <div ref={ref} className="filter-selection-wrapper">
          {keyList.map(key => {
            return (
              <ScrollIntoView key={key.selector} selector={key.selector}>
                <Badge icon={key.icon} description={key.description} />
              </ScrollIntoView>
            )
          })}
        </div>}
    </div>
  ) : null;
};

const mapStateToProps = state => {
  return { 
    showListingAwards: state.showListingAwards,
  };
};

export default connect(mapStateToProps)(Key);
