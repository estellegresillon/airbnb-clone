import React from "react";
import { Link } from "react-router-dom";

import Badge from "../common/badge";

const AwardListItem = props => {
  const { restaurant, tabIndex } = props;

  return (
    <div 
      className={`tab-number-${tabIndex} awarded-restaurant`}
      tabIndex={tabIndex + 1}
      id={`${restaurant.award.scroll}`}
    >
      <div className="card">
        <img src={restaurant.imageUrl} alt="awarded-restaurant-overview" width="200" />
        <Badge 
          icon={restaurant.award.icon}
          description={restaurant.award.description}
        />
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
          <Link to={{pathname: `/restaurants/${restaurant.id}`, restaurant: restaurant}} target="_blank">
            <div className="card-see-infos">Voir infos</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AwardListItem;
