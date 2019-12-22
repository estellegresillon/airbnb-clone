export default function(state, action) {
  if (state === undefined) {
    return null;
  };

  switch (action.type) {
    case "SEARCH_FLAT":
      return action.payload;
    default:
      return state;
  };
};
