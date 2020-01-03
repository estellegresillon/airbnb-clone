import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

import { selectRestaurant } from "../../actions";
import Badge from "../common/badge";
import { useWindowSize } from "../../hooks/useWindowSize";

const RestaurantListItem = props => {
  const { 
    scrollPosition,
    selectRestaurant,
    selectedRestaurant,
    restaurant,
    listedRestaurants,
    tabIndex,
    showMap
  } = props;

  const handleClick = () => {
    selectRestaurant(restaurant);
  };

  const windowSize = useWindowSize();

  return (
    <div 
      className={`tab-number-${tabIndex} restaurant ${restaurant === selectedRestaurant ? "selected" : null}`}
      onClick={handleClick}
      role="link"
      id={`${restaurant.award ? restaurant.award.scroll : ""}`}
      tabIndex={tabIndex + 1}
    >
      {(!showMap || (showMap && windowSize.width < 728)) &&
        <Link to={{ pathname: `/restaurants/${restaurant.id}`, restaurant, listedRestaurants }} />}
      <div className="card">
        {!showMap && <div className="grid-img-overlay" />}
        <LazyLoadImage
          alt="restaurant-overview"
          scrollPosition={scrollPosition}
          src={restaurant.imageUrl}
          threshold={500}
        />
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
          {showMap && windowSize.width > 728 &&
            <Link to={{ pathname: `/restaurants/${restaurant.id}`, restaurant, listedRestaurants }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(trackWindowScroll(RestaurantListItem));
