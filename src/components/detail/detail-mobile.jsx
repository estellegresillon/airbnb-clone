import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setRestaurants } from "../../actions";

const DetailMobile = props => {
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
    <div className="detail-page-wrapper-mobile">
      <div className="button-go-back" onClick={() => props.history.goBack()}>
        <i className="fas fa-chevron-left" /> Retour
      </div>
      <div 
        className="detail-page-big-img"
        style={{ 
          backgroundImage: `url(${restaurant.imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="detail-page-content">
        <div className="detail-page-title">{restaurant.name}</div>
        <ul className="detail-page-resume">
          <li><span className="bolder">Type :</span> {restaurant.type} ({restaurant.price})</li>
          <li><span className="bolder">Note :</span> {restaurant.rate}/5 (+ de {restaurant.votes} votes Google)</li>
          <li>{restaurant.address}</li>
          <li><span className="bolder">Horaires :</span> {restaurant.openingHours}</li>
          <li><span className="bolder">Téléphone :</span> {restaurant.phone || "Non communiqué"}</li>
          <li>
            <a 
              href={restaurant.menuLink}
              target="_blank"
              className="see-menu"
              rel="noopener noreferrer"
            >Voir le menu</a>
          </li>
        </ul>
      </div>
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
      {restaurant.imageUrl2 && 
        <div 
          className="detail-page-cropped-img"
          style={{ 
            backgroundImage: `url(${restaurant.imageUrl2})`,
            backgroundPosition: "right",
            backgroundSize: "cover",
          }}
        />}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailMobile);
