import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { createStore, combineReducers } from "redux";

import "./styles/application.scss";
import Home from "./components/home";
import Header from "./components/common/header";
import Detail from "./components/detail";

import flatsReducer from "./reducers/flats_reducer";
import selectedFlatReducer from "./reducers/selected_flat_reducer";
import searchFlatReducer from "./reducers/search_flat_reducer";
import sortFlatsReducer from "./reducers/sort_flats_reducer";
import centerMapWithLocationReducer from "./reducers/center_map_with_location";
import toggleMapReducer from "./reducers/toggle_map_reducer";
import toggleListingAwardsReducer from "./reducers/toggle_listing_awards";

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer,
  searchedFlat: searchFlatReducer,
  sortedFlats: sortFlatsReducer,
  showMap: toggleMapReducer,
  selectedLocation: centerMapWithLocationReducer,
  showListingAwards: toggleListingAwardsReducer,
});

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Route exact path="/" render={() => <Redirect to="/restaurants" />} />
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
