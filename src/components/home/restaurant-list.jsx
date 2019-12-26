import React from "react";
import { connect } from "react-redux";

import Restaurant from "./restaurant";


const RestaurantList = props => {
  const { listedRestaurants, showMap } = props;
  
  return (
    <div className={showMap ? "restaurant-list-with-rows" : "restaurant-list-with-grid"}>
      {listedRestaurants.map((restaurant, i) => <Restaurant key={restaurant.id} restaurant={restaurant} tabIndex={i} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return { 
    showMap: state.showMap
  };
};

export default connect(mapStateToProps)(RestaurantList);
