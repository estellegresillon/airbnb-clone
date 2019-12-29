import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RestaurantList from "./restaurant-list";
import Map from "./map";
import Filters from "./filters";
import Key from "../common/key";
import { useWindowSize } from "../../hooks/useWindowSize";

import { setRestaurants } from "../../actions";

const Restaurants = props => {
  const { restaurants, setRestaurants, sortedRestaurants, searchedRestaurant } = props;
  const [listNumber, setListNumber] = useState(null);
  const [listedRestaurants, setListedRestaurants] = useState(restaurants);
  const windowSize = useWindowSize();

  // load restaurants and sort them
  useEffect(() => { setRestaurants(); }, [setRestaurants]);

  // filters restaurants
  useEffect(() => {
    // 1 - priority on autocomplete, displays only one restaurant
    // 2 -  if not any restaurant is searched, display the filtered Restaurants
    // 3 - if not any restaurant is searched nor filtered, displays all Restaurants
    // never display 0 Restaurants
    if (searchedRestaurant) {
      setListNumber(1)
      setListedRestaurants(searchedRestaurant)
    } else {
      if (sortedRestaurants.length) {
        setListNumber(sortedRestaurants.length)
        setListedRestaurants(sortedRestaurants)
      } else {
        setListNumber(restaurants.length)
        setListedRestaurants(restaurants)
      }
    }
  }, [restaurants, sortedRestaurants, searchedRestaurant]);

  return (
    <div className={`restaurants-page-wrapper ${windowSize.width > 728 ? "" : "mobile-view"}`}>
      <Filters />
      <div className="counter-keys-wrapper">
        <div className="restaurant-counter">
          {listNumber}
          {listNumber === 1 ? " restaurant correspond à votre recherche." : " restaurants correspondent à votre recherche."}
        </div>
        <Key listedRestaurants={listedRestaurants} />
      </div>
      <div className="main-view">
        <RestaurantList listedRestaurants={listedRestaurants} />
        <Map listedRestaurants={listedRestaurants} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { 
    restaurants: state.restaurants,
    searchedRestaurant: state.searchedRestaurant,
    sortedRestaurants: state.sortedRestaurants
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setRestaurants }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
