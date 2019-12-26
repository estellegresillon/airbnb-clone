import restaurants from "../constants/restaurants";

export function setRestaurants() {
  return {
    type: "SET_RESTAURANTS",
    payload: restaurants
  };
};

export function selectRestaurant(restaurant) {
  return {
    type: "SELECT_RESTAURANT",
    payload: restaurant
  };
};

export function searchRestaurant(restaurant) {
  return {
    type: "SEARCH_RESTAURANT",
    payload: restaurant
  };
};

export function sortRestaurants(restaurants) {
  return {
    type: "SORT_RESTAURANTS",
    payload: restaurants
  };
};

export function centerMapWithLocation(location) {
  return {
    type: "CENTER_MAP_WITH_LOCATION",
    payload: location
  };
};

export function toggleListingAwards(boolean) {
  return {
    type: "TOGGLE_LISTING_AWARDS",
    payload: boolean
  };
};

export function toggleMap(boolean) {
  return {
    type: "TOGGLE_MAP",
    payload: boolean
  };
};
