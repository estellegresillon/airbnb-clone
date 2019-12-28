import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setRestaurants } from "../../actions";

const Detail = props => {
  const { setRestaurants, restaurants, match, location } = props;
  const [restaurant, setRestaurant] = useState({})
  
  // if a user arrives on the pageId directly 
  // he doesn't get the restaurant object in the props so we execute these 2 hooks
  useEffect(() => { 
    if (!location.restaurant) {
      setRestaurants(); 
    }
  }, [location.restaurant, setRestaurants]);

  useEffect(() => {
    if (location.restaurant) {
      setRestaurant(location.restaurant);
    } else {
      const detailRestaurant = [...restaurants].filter(val => {
        if (val.id) {
          return val.id.toString() === match.params.id;
        } else return null;
      });
  
      setRestaurant(detailRestaurant[0]);
    }
  }, [location.restaurant, restaurants, match.params.id]);

  return restaurant ? (
    <div className="detail-page-wrapper">
      <div className="top-section">
        <div 
          className="detail-page-big-img"
          style={{ 
            backgroundImage: `url(${restaurant.imageUrl})`,
            marginRight: "30px",
            backgroundPosition: "right",
            backgroundSize: "800px",
          }}
        />
        <div className="detail-page-content">
          <div className="detail-page-title">{restaurant.name}</div>
          <div>{restaurant.type}</div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="detail-page-menu">
          Avis
        </div>
        <div className="cropped-img-overlay" />
        <div 
          className="detail-page-cropped-img"
          style={{ 
            backgroundImage: `url(${restaurant.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "800px",
          }}
        />
      </div>
    </div>
  ) :
  <div>no restaurant corresponding</div>
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setRestaurants }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
