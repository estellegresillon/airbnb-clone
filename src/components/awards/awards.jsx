import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setRestaurants } from "../../actions";

const Awards = props => {
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
          backgroundPosition: "center",
          transition: "0.5s all ease-in",
          marginRight: "50px",
        }}
      />
      <div className="awards-listing">
        {awardedRestaurants.map(restaurant => {
          return (
            <div 
              key={restaurant.id} 
              onMouseEnter={() => handleListItemHover(restaurant.imageUrl)}
              className="awarded-restaurant">
              {restaurant.name}
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

export default connect(mapStateToProps, mapDispatchToProps)(Awards);