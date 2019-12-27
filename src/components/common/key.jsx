import React, { useState, useEffect } from "react";
import ScrollIntoView from 'react-scroll-into-view';

import Badge from "../common/badge";
import { useComponentVisible } from "../../hooks/useRef";

// key = légende
const Key = props => {
  const { listedRestaurants } = props;
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [restaurantsWithAward, setRestaurantsWithAward] = useState([]);

  useEffect(() => {
    const awards = listedRestaurants.filter(restaurant => restaurant.award);
    setRestaurantsWithAward(awards);
  }, [listedRestaurants]);

  return restaurantsWithAward.length > 0 ? (
    <div className="keys-wrapper">
      <div className="selection-button" onClick={() => setIsComponentVisible(true)}> 
        Awards <i className="fas fa-chevron-down" />
      </div>
      {isComponentVisible &&
        <div ref={ref} className="filter-selection-wrapper">
          {restaurantsWithAward.map(restaurant => {
            return (
              <ScrollIntoView key={restaurant.award.scroll} selector={`#${restaurant.award.scroll}`}>
                <Badge icon={restaurant.award.icon} description={restaurant.award.description} />
              </ScrollIntoView>
            )
          })}
        </div>}
    </div>
  ) : null;
};

export default Key;
