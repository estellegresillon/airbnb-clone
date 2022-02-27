import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";

import "./styles/index.scss";
import Restaurants from "./components/restaurants";
import Header from "./components/common/header";
import Awards from "./components/awards";
import Contact from "./components/contact";

import restaurantsReducer from "./reducers/restaurants-reducer";
import selectedRestaurantReducer from "./reducers/selected-restaurant-reducer";
import searchRestaurantReducer from "./reducers/search-restaurant-reducer";
import sortRestaurantsReducer from "./reducers/sort-restaurants-reducer";
import centerMapWithLocationReducer from "./reducers/center-map-with-location";
import toggleMapReducer from "./reducers/toggle-map-reducer";

const reducers = combineReducers({
  restaurants: restaurantsReducer,
  selectedRestaurant: selectedRestaurantReducer,
  searchedRestaurant: searchRestaurantReducer,
  sortedRestaurants: sortRestaurantsReducer,
  showMap: toggleMapReducer,
  selectedLocation: centerMapWithLocationReducer,
});

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Restaurants} />
      <Route exact path="/awards" component={Awards} />
      <Route exact path="/restaurants" component={Restaurants} />
      <Route exact path="/contact" component={Contact} />
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("app")
);
