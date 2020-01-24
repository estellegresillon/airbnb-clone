import React from "react";

const MiddleSection = ({ location, restaurant }) => (
  <div key={location.pathname} className="middle-section">
    <div className="detail-page-reviews">
      <div className="foodlab-review">
        <div className="foodlab-review-title">Avis FoodLab : </div>
        {restaurant.foodlabreview ? `« ${restaurant.foodlabreview} »` : "Rédaction en cours"}
      </div>

      <ul className="customers-reviews">
        {restaurant.reviews ? restaurant.reviews.map((review, i) => {
          return (
            <li key={i}>
              <div className="review-date">Review utilisateur {i + 1} - le {review.date} :</div>
              <div className="review-comment">"{review.comment}"</div>
            </li>
          )
        }) : <li>Pas de reviews enregistrées</li>}
      </ul>
    </div>
    
    <div 
      className="detail-page-cropped-img"
      style={{ backgroundImage: `url(${restaurant.imageUrl2 || restaurant.imageUrl})` }}
    />
  </div>
);

export default MiddleSection;
