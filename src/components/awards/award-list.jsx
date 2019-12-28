import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setRestaurants } from "../../actions";
import AwardListItem from "./award-list-item";
import Key from "../common/key";

const AwardList = props => {
  const { setRestaurants, restaurants } = props;
  const [awardedRestaurants, setAwardedRestaurants] = useState([]);
  const [bg, setBg] = useState("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat6.jpg");

  useEffect(() => { setRestaurants(); }, [setRestaurants]);
  useEffect(() => {
    const sortedRestaurants = []
    restaurants.forEach(restaurant => {
      if (restaurant.award) {
        sortedRestaurants.push(restaurant);
      };
      setAwardedRestaurants(sortedRestaurants);
    });
  }, [restaurants]);

  const handleListItemHover = image => {
    setBg(image);
  };
  
  return awardedRestaurants.length > 0 ? (
    <div className="awards-page-wrapper">
      <div 
        className="awards-page-big-img"
        style={{ 
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="awards-listing">
        <div className="title-and-key">
          <h2 className="awards-listing-title">Les restaurants primés</h2>
          <Key listedRestaurants={awardedRestaurants} />
        </div>
        {awardedRestaurants.map((restaurant, i) => {
          return (
            <div 
              key={restaurant.id} 
              onMouseEnter={() => handleListItemHover(restaurant.imageUrl)}
              className="awarded-restaurant">
              <AwardListItem restaurant={restaurant} tabIndex={i} />
            </div>
          )
        })}
      </div>
    </div>
  ) : null;
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setRestaurants }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AwardList);