import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import Unsplash, { toJson } from 'unsplash-js';

import RestaurantListItem from "./restaurant-list-item";
import { useWindowSize } from "../../hooks/useWindowSize";

const RestaurantList = props => {
  const { listedRestaurants, showMap } = props;
  // const [unsplashPhotos, setUnsplashPhotos] = useState([]);
  const windowSize = useWindowSize();

  // const unsplash = new Unsplash({
  //   accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  //   secret: process.env.REACT_APP_NSPLASH_SECRET_KEY,
  // });

  // useEffect(() => {
  //   unsplash.search.photos("restaurant", 3, 30, { orientation: "landscape" })
  //     .then(toJson)
  //     .then(json => {
  //       const array = Array(3).fill(json.results).flat()
  //       setUnsplashPhotos(array)
  //     });
  // }, []);
  
  return (
    <div className={(showMap && windowSize.width > 728) ? "restaurant-list-with-rows" : "restaurant-list-with-grid"}>
      {listedRestaurants.map((restaurant, i) => {
        return (
          <RestaurantListItem 
            key={restaurant.id} 
            listedRestaurants={listedRestaurants}
            restaurant={restaurant} 
            tabIndex={i} 
            // thumbnail={unsplashPhotos[i]}
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
