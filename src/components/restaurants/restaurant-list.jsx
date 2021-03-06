import React from "react";
import { connect } from "react-redux";

import Card from "../common/card";
import { useWindowSize } from "../../hooks/useWindowSize";

const RestaurantList = props => {
  const { listedRestaurants, showMap } = props;
  const windowSize = useWindowSize();
  
  return (
    <div className={(showMap && windowSize.width > 728) ? "restaurant-list-with-rows" : "restaurant-list-with-grid"}>
      {listedRestaurants.map((restaurant, i) => {
        return (
          <Card 
            key={restaurant.id} 
            listedRestaurants={listedRestaurants}
            restaurant={restaurant} 
            tabIndex={i} 
          />)
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { 
    showMap: state.showMap
  };
};

export default connect(mapStateToProps)(RestaurantList);
