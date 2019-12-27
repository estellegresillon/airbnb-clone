import restaurants from "../constants/restaurants";

export const setRestaurants = () => {
  return {
    type: "SET_RESTAURANTS",
    payload: restaurants
  };
};

export const selectRestaurant = restaurant => {
  return {
    type: "SELECT_RESTAURANT",
    payload: restaurant
  };
};

export const searchRestaurant = restaurant => {
  return {
    type: "SEARCH_RESTAURANT",
    payload: restaurant
  };
};

export const sortRestaurants = restaurants => {
  return {
    type: "SORT_RESTAURANTS",
    payload: restaurants
  };
};

export const centerMapWithLocation = location => {
  return {
    type: "CENTER_MAP_WITH_LOCATION",
    payload: location
  };
};

export const toggleListingAwards = boolean => {
  return {
    type: "TOGGLE_LISTING_AWARDS",
    payload: boolean
  };
};

export const toggleMap = boolean => {
  return {
    type: "TOGGLE_MAP",
    payload: boolean
  };
};
