export default function(state, action) {
  if (state === undefined) {
    return true;
  };

  switch (action.type) {
    case "TOGGLE_LISTING_AWARDS":
      return action.payload;
    default:
      return state;
  };
};
