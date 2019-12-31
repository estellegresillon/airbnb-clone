import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setRestaurants } from "../../actions";
// import { handleTouchMove, handleTouchStart, setNavigation } from "./navigation-mobile";

const DetailMobile = props => {
  const { setRestaurants, restaurants, match, location } = props;
  const [restaurant, setRestaurant] = useState({})
  const [similarRestaurants, setSimilarRestaurants] = useState([])
  const nextRestaurantRef = useRef(null);
  const previousRestaurantRef = useRef(null);
  const listedRestaurants = location.listedRestaurants;
  // const yDown = useRef(null);
  // const xDown = useRef(null);

  const setNavigation = restaurantList => {
    let previous;
    let next;

    restaurantList.forEach((val, i) => {
      if (val.id.toString() === match.params.id) {
        previous = restaurantList[i - 1];
        next = restaurantList[i + 1];
      };
    });

    if (previous) {
      previousRestaurantRef.current = previous.id;
    };
    if (next) {
      nextRestaurantRef.current = next.id;
    };
  };
  
  // if a user arrives on the pageId directly 
  // he doesn't get the restaurant object in the props so we execute these 2 hooks
  useEffect(() => { 
    if (!location.restaurant) {
      setRestaurants(); 
    };
  }, [location.restaurant, setRestaurants]);

  useEffect(() => {
    if (location.listedRestaurants) {
      setNavigation(location.listedRestaurants);
    } else {//
      setNavigation(restaurants);
    };

    if (location.restaurant) {
      setRestaurant(location.restaurant);

      const filterByType = [...restaurants].filter(val => {
        if (val.type && val.name !== location.restaurant.name) {
          return val.type === location.restaurant.type;
        } else return null;
      });
  
      setSimilarRestaurants(filterByType.slice(0, 6));
    } else {
      const detailRestaurant = [...restaurants].filter(val => {
        if (val.id) {
          return val.id.toString() === match.params.id;
        } else return null;
      });
  
      setRestaurant(detailRestaurant[0]);

      const filterByType = [...restaurants].filter(val => {
        if (val.type && val.name !== detailRestaurant[0].name) {
          return val.type === detailRestaurant[0].type;
        } else return null;
      });
  
      setSimilarRestaurants(filterByType.slice(0, 6));
    };
  }, [location.restaurant, restaurants, match.params.id]);

  // go to top because it keeps the same scroll position as the previous page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   document.addEventListener('touchstart', handleTouchStart, false);        
  //   document.addEventListener('touchmove', handleTouchMove, false);
  // // eslint-disable-next-line
  // }, []);
  const handleNavigation = (direction, id) => {
    if (direction === "left") {
      if (previousRestaurantRef.current) {
        props.history.push({ pathname: `/restaurants/${previousRestaurantRef.current}`, listedRestaurants });
      };
    } else if (direction === "next-page") {
      props.history.push({ pathname: `/restaurants/${id}`, listedRestaurants });
    } else if (direction === "right") {
      if (nextRestaurantRef.current) {
        props.history.push({ pathname: `/restaurants/${nextRestaurantRef.current}`, listedRestaurants });
      };
    };

    document.querySelector(".detail-page-big-img").scrollIntoView();
  };

  return restaurant ? (
    <div className="detail-page-wrapper-mobile">
      <div className="button-go-back" onClick={() => props.history.goBack()}>
        <i className="fas fa-chevron-left" /> Retour
      </div>
      {restaurant.award &&
        <div className="detail-page-award">
          {restaurant.award.description}
        </div>}
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
                  <div className="similar-restaurant-card-name">{simRest.name}</div>
                  <div className="similar-restaurant-card-rate">{simRest.rate}/5 ({simRest.votes}+ votes)</div>
                  <div className="similar-restaurant-card-address">{simRest.address}</div>
                </div>
              )
            })}
          </div>
        </div>}
      <div className="detail-page-footer">
        <div 
          className="footer-button-left"
          onClick={() => handleNavigation("left")}
        >
          <i className="fas fa-chevron-left" />
        </div>
        <div className="footer-text"></div>
        <div 
          className="footer-button-right"
          onClick={() => handleNavigation("right")}
        >
          <i className="fas fa-chevron-right" />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailMobile);
