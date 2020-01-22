import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setRestaurants } from "../../actions";
import Card from "../common/card";
import Key from "../common/key";

const AwardList = props => {
  const { setRestaurants, restaurants } = props;
  const [awardedRestaurants, setAwardedRestaurants] = useState([]);
  const [bg, setBg] = useState("http://benedict-paris.com/img/lightbox/plats/B-17.jpg");
  const [title, setImageTitle] = useState("Les restaurants primés");
  const [subtitle, setImageSubtitle] = useState("chaque semaine");

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

  const handleListItemHover = restaurant => {
    if (restaurant) {
      setBg(restaurant.imageUrl);
      setImageTitle(restaurant.award.description);
      setImageSubtitle(restaurant.name);
    } else {
      setBg("http://benedict-paris.com/img/lightbox/plats/B-17.jpg");
      setImageTitle("Les restaurants primés");
      setImageSubtitle("chaque semaine");
    }
  };
  
  return awardedRestaurants.length > 0 ? (
    <div className="awards-page-wrapper">
      <div 
        className="awards-page-big-img"
        key={bg}
        style={{ 
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="awards-image-title">{title}</h1>
        <div className="awards-image-subtitle">{subtitle}</div>
      </div>
      <div className="awards-listing">
        <div className="title-and-key">
          <h2 className="awards-listing-title">Les restaurants primés</h2>
          <Key listedRestaurants={awardedRestaurants} />
        </div>
        {awardedRestaurants.map((restaurant, i) => {
          return (
            <div 
              key={restaurant.id} 
              onMouseEnter={() => handleListItemHover(restaurant)}
              onMouseLeave={() => handleListItemHover()}
              className="awarded-restaurant">
              <Card listedRestaurants={awardedRestaurants} restaurant={restaurant} tabIndex={i} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AwardList);