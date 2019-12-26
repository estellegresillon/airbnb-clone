import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { createStore, combineReducers } from "redux";

import "./styles/application.scss";
import Home from "./components/home";
import Header from "./components/common/header";
import Detail from "./components/detail";
import Awards from "./components/awards";

import restaurantsReducer from "./reducers/restaurants_reducer";
import selectedRestaurantReducer from "./reducers/selected_restaurant_reducer";
import searchRestaurantReducer from "./reducers/search_restaurant_reducer";
import sortRestaurantsReducer from "./reducers/sort_restaurants_reducer";
import centerMapWithLocationReducer from "./reducers/center_map_with_location";
import toggleMapReducer from "./reducers/toggle_map_reducer";

const reducers = combineReducers({
  restaurants: restaurantsReducer,
  selectedRestaurant: selectedRestaurantReducer,
  searchedRestaurant: searchRestaurantReducer,
  sortedRestaurants: sortRestaurantsReducer,
  showMap: toggleMapReducer,
  selectedLocation: centerMapWithLocationReducer,
});

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Route exact path="/" render={() => <Redirect to="/restaurants" />} />
      <Route exact path="/awards" component={Awards} />
      <Route exact path="/restaurants" component={Home} />
      <Route exact path="/restaurants/:id" component={Detail} />
    </React.Fragment>
  </Router>
)

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("app")
);
