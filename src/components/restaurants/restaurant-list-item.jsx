import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectRestaurant } from "../../actions";
import Badge from "../common/badge";

const RestaurantListItem = props => {
  const { selectRestaurant, selectedRestaurant, restaurant, tabIndex, showMap } = props;

  const handleClick = () => {
    selectRestaurant(restaurant);
  };

  return (
    <div 
      className={`tab-number-${tabIndex} restaurant ${restaurant === selectedRestaurant ? "selected" : null}`}
      onClick={handleClick}
      role="link"
      id={`${restaurant.award ? restaurant.award.scroll : ""}`}
      tabIndex={tabIndex + 1}
    >
      {!showMap && <Link to={{pathname: `/restaurants/${restaurant.id}`, restaurant: restaurant}}></Link>}
      <div className="card">
        {!showMap && <div className="grid-img-overlay" />}
        <img src={restaurant.imageUrl} alt="restaurant-overview" width="200" />
        {restaurant.award &&
          <Badge 
            icon={restaurant.award.icon}
            description={restaurant.award.description} />}
        <div className="card-description">
          <div className="card-header">
            <div className="card-header-type">
              {restaurant.type} -{' '}
              <span className="card-header-budget">{restaurant.price}</span>
            </div>
            <div className="card-header-rate"><i className="fas fa-star"></i> {restaurant.rate} ({restaurant.votes}+)</div>
          </div>
          <h2>{restaurant.name}</h2>
          <div className="card-restaurant-address">{restaurant.address}</div>
          {showMap && 
            <Link to={{pathname: `/restaurants/${restaurant.id}`, restaurant: restaurant}}>
              <div className="card-see-infos">Voir infos</div>
            </Link>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { 
    selectedRestaurant: state.selectedrestaurant,
    showMap: state.showMap
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectRestaurant }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListItem);
