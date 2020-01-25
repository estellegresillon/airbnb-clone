import { combineReducers, createStore } from "redux";

import restaurantsReducer from "../reducers/restaurants-reducer";
import selectedRestaurantReducer from "../reducers/selected-restaurant-reducer";
import searchRestaurantReducer from "../reducers/search-restaurant-reducer";
import sortRestaurantsReducer from "../reducers/sort-restaurants-reducer";
import centerMapWithLocationReducer from "../reducers/center-map-with-location";
import toggleMapReducer from "../reducers/toggle-map-reducer";

const reducers = combineReducers({
  restaurants: restaurantsReducer,
  selectedRestaurant: selectedRestaurantReducer,
  searchedRestaurant: searchRestaurantReducer,
  sortedRestaurants: sortRestaurantsReducer,
  showMap: toggleMapReducer,
  selectedLocation: centerMapWithLocationReducer,
});

function makeStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
  );

  return store;
}

export default makeStore