import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setRestaurants } from "../../actions";
import PopIn from "./pop-in";
import TopSection from "./top-section";
import MiddleSection from "./middle-section";
import BottomSection from "./bottom-section";
import Footer from "./footer";

const Detail = props => {
  const { setRestaurants, restaurants, match, location, history } = props;
  const [restaurant, setRestaurant] = useState({})
  const [hasSeenSuggestion, setHasSeenSuggestion] = useState(false)
  const [similarRestaurants, setSimilarRestaurants] = useState([])
  const nextRestaurantRef = useRef(null);
  const previousRestaurantRef = useRef(null);
  const detailPageTop = useRef(null);
  const listedRestaurants = location.listedRestaurants;
  
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
    } else previousRestaurantRef.current = null;
    if (next) {
      nextRestaurantRef.current = next.id;
    } else nextRestaurantRef.current = null;
  };

  const scrollToTop = () => {
    detailPageTop.current.scrollIntoView();
  }

  // if a user arrives on the pageId directly 
  // he doesn't get the restaurantS or listedRestaurantS objects in the props
  useEffect(() => { 
    if (!location.restaurant) {
      setRestaurants(); 
    }
  }, [location.restaurant, setRestaurants]);

  useEffect(() => {
    if (location.listedRestaurants) {
      setNavigation(location.listedRestaurants);
    } else {
      setNavigation(restaurants);
    };

    if (location.restaurant) {
      setRestaurant(location.restaurant);
      const filterByType = [...restaurants].filter(val => {
        if (val.type && val.name !== location.restaurant.name) {
          return val.type === location.restaurant.type;
        } else return null;
      });
  
      setSimilarRestaurants(filterByType.slice(0, 9));
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
  
      setSimilarRestaurants(filterByType.slice(0, 9));
    };
  // eslint-disable-next-line
  }, [location.restaurant, restaurants, match.params.id]);

  const handleKeyDown = e => {
    // 37 arrow left / 39 arrow right
    if (e.keyCode === 37) {
      if (previousRestaurantRef.current) {
        history.push({ pathname: `/detail/${previousRestaurantRef.current}`, listedRestaurants });
      };
    } else if (e.keyCode === 39) {
      if (nextRestaurantRef.current) {
        history.push({ pathname: `/detail/${nextRestaurantRef.current}`, listedRestaurants });
      };
    };

    scrollToTop();
  };

  const handleNavigation = (direction, id) => {
    if (direction === "left") {
      if (previousRestaurantRef.current) {
        history.push({ pathname: `/detail/${previousRestaurantRef.current}`, listedRestaurants });
      };
    } else if (direction === "next-page") {
      history.push({ pathname: `/detail/${id}`, listedRestaurants });
    } else if (direction === "right") {
      if (nextRestaurantRef.current) {
        history.push({ pathname: `/detail/${nextRestaurantRef.current}`, listedRestaurants });
      };
    };

    scrollToTop();
  };

  useEffect(() => { 
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const disclaimer = localStorage.getItem('has_seen_suggestion');
    disclaimer ? setHasSeenSuggestion(true) : setHasSeenSuggestion(false);
  }, []);

  return restaurant ? (
    <>
      <div className="detail-page-wrapper">
        <PopIn 
          setHasSeenSuggestion={setHasSeenSuggestion}
          hasSeenSuggestion={hasSeenSuggestion}
        />
        <TopSection
          history={history}
          restaurant={restaurant}
          location={location}
          detailPageTop={detailPageTop}
        />
        <MiddleSection location={location} restaurant={restaurant} />
        <BottomSection
          similarRestaurants={similarRestaurants}
          handleNavigation={handleNavigation}
        />
      </div>
      <Footer
        handleNavigation={handleNavigation}
        previousRestaurantRef={previousRestaurantRef}
        nextRestaurantRef={nextRestaurantRef}
        hasSeenSuggestion={hasSeenSuggestion}
      />
    </>
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
