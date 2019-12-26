import React, { useState, useEffect } from "react";
import ScrollIntoView from 'react-scroll-into-view';

import Badge from "../common/badge";
import { useComponentVisible } from "../../hooks/useRef";

// key = légende
const Key = props => {
  const { listedFlats } = props;
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [flatsWithAward, setFlatsWithAward] = useState([]);

  useEffect(() => {
    const awards = listedFlats.filter(flat => flat.award);
    setFlatsWithAward(awards);
  }, [listedFlats]);

  return flatsWithAward.length > 0 ? (
    <div className="keys-wrapper">
      <div className="selection-button" onClick={() => setIsComponentVisible(true)}> 
        Awards <i className="fas fa-chevron-down" />
      </div>
      {isComponentVisible &&
        <div ref={ref} className="filter-selection-wrapper">
          {flatsWithAward.map((flat, i) => {
            return (
              <ScrollIntoView key={i} selector={flat.award.selector}>
                <Badge icon={flat.award.icon} description={flat.award.description} />
              </ScrollIntoView>
            )
          })}
        </div>}
    </div>
  ) : null;
};

export default Key;
