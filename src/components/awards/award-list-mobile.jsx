import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setRestaurants } from "../../actions";
import AwardListItem from "./award-list-item";
import Key from "../common/key";

const AwardListMobile = props => {
  const { setRestaurants, restaurants } = props;
  const [awardedRestaurants, setAwardedRestaurants] = useState([]);

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
  
  return awardedRestaurants.length > 0 ? (
    <div className="awards-page-wrapper-mobile">
      <div className="awards-listing">
        <div className="title-and-key">
          <h2 className="awards-listing-title">Les restaurants primés</h2>
          <Key listedRestaurants={awardedRestaurants} />
        </div>
        {awardedRestaurants.map((restaurant, i) => {
          return (
            <div key={restaurant.id} className="awarded-restaurant">
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

export default connect(mapStateToProps, mapDispatchToProps)(AwardListMobile);