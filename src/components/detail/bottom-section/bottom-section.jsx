import React from "react";

const BottomSection = ({ similarRestaurants, handleNavigation }) => (
  <>
    {similarRestaurants.length > 0 &&
      <div className="bottom-section">
        <div className="bottom-section-title">Restaurants similaires :</div>
        <div className="similar-restaurants-wrapper">
          {similarRestaurants.map(simRest => {
            return (
              <div 
                className="similar-restaurant-card"
                key={simRest.id}
                onClick={() => handleNavigation("next-page", simRest.id)}
              >
                <div className="similar-restaurant-description">
                  <div className="similar-restaurant-card-name">{simRest.name}</div>
                  <div className="similar-restaurant-card-rate">{simRest.rate}/5 ({simRest.votes}+ votes)</div>
                  <div className="similar-restaurant-card-address">{simRest.address}</div>
                </div>
                <div className="similar-restaurant-image">
                  <img src={simRest.imageUrl} alt="similar-restaurant" />
                </div>
              </div>
            )
          })}
        </div>
      </div>}
  </>
);

export default BottomSection;
