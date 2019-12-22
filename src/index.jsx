// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

// internal modules
import "./styles/application.scss";
import App from "./components/app";

// Reducers
import flatsReducer from "./reducers/flats_reducer";
import selectedFlatReducer from "./reducers/selected_flat_reducer";
import searchFlatReducer from "./reducers/search_flat_reducer";
import sortFlatsReducer from "./reducers/sort_flats_reducer";

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer,
  searchedFlat: searchFlatReducer,
  sortedFlats: sortFlatsReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("app")
);
