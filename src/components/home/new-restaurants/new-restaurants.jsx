import React from "react";

import { NEW_RESTAURANTS } from "../../../constants/new-restaurants";
import Card from "../../common/card";

const NewRestaurants = ({ history, newRestaurantsContainer }) => (
  <div className="home-new">
    <div className="home-new-title">
      <i className="fas fa-rocket" />
      <span className="home-new-title-text">Les petits nouveaux</span>
      <i className="fas fa-rocket" />
    </div>

    <div className="new-restaurants-container" ref={newRestaurantsContainer}>
      {NEW_RESTAURANTS.map((newRest, i) => {
        return (
          <Card
            key={i}
            listedRestaurants={NEW_RESTAURANTS}
            restaurant={newRest}
            tabIndex={i}
          />
        );
      })}
    </div>
  </div>
);

export default NewRestaurants;
