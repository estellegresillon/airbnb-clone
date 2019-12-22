import flats from "../constants/flats";

export function setFlats() {
  return {
    type: "SET_FLATS",
    payload: flats
  };
}

export function selectFlat(flat) {
  return {
    type: "SELECT_FLAT",
    payload: flat
  };
}

export function searchFlat(flat) {
  return {
    type: "SEARCH_FLAT",
    payload: flat
  };
}

export function sortFlats(flats) {
  return {
    type: "SORT_FLATS",
    payload: flats
  };
}
