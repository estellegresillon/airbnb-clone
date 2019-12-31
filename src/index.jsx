import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { createStore, combineReducers } from "redux";

import "./styles/index.scss";
import Restaurants from "./components/restaurants";
import Header from "./components/common/header";
import Home from "./components/home";
import Detail from "./components/detail";
import Awards from "./components/awards";
// import MessageButton from "./components/common/contact";
// import { useWindowSize } from "./hooks/useWindowSize";

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

const App = () => {
  // const windowSize = useWindowSize();

  return (
    <Router>
      <React.Fragment>
        <Header />
        <Route exact path="/" render={() => <Redirect to="/restaurants" />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/awards" component={Awards} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route exact path="/restaurants/:id" component={Detail} />
        {/* {windowSize.width > 728 && <MessageButton />} */}
      </React.Fragment>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("app")
);
