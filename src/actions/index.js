import flats from "../constants/flats";

export function setFlats() {
  return {
    type: "SET_FLATS",
    payload: flats
  };
};

export function selectFlat(flat) {
  return {
    type: "SELECT_FLAT",
    payload: flat
  };
};

export function searchFlat(flat) {
  return {
    type: "SEARCH_FLAT",
    payload: flat
  };
};

export function sortFlats(flats) {
  return {
    type: "SORT_FLATS",
    payload: flats
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
