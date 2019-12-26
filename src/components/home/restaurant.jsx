import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectRestaurant } from "../../actions";
import Badge from "../common/badge";

const Restaurant = props => {
  const { selectRestaurant, selectedRestaurant, restaurant, tabIndex, showMap } = props;

  const handleClick = () => {
    selectRestaurant(restaurant);
  };

  return (
    <>
      <div 
        className={`restaurant card-container ${restaurant === selectedRestaurant ? "selected" : null}`}
        onClick={handleClick}
        role="link"
        id={`restaurant-${restaurant.id}`}
        tabIndex={tabIndex + 1}
      >
        {!showMap && <Link to={{pathname: `/restaurants/${restaurant.id}`, restaurant: restaurant}} target="_blank"></Link>}
        <div className="card">
          {!showMap && <div className="grid-img-overlay" />}
          <img src={restaurant.imageUrl} alt="restaurant-overview" width="200" />
          {restaurant.award &&
            <Badge 
              scroll={restaurant.award.scroll}
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
            <h2>
              {restaurant.name}
              <span className="grid-see-infos">
                Voir infos
                <i className="fas fa-chevron-right" />
              </span>
            </h2>
            <div className="card-restaurant-address">{restaurant.address}</div>
            {showMap && 
              <Link to={{pathname: `/restaurants/${restaurant.id}`, restaurant: restaurant}} target="_blank">
                <div className="card-see-infos">Voir infos</div>
              </Link>}
          </div>
        </div>
      </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
