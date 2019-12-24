export default function(state, action) {
  if (state === undefined) {
    return null;
  };

  switch (action.type) {
    case "CENTER_MAP_WITH_LOCATION":
      return action.payload;
    default:
      return state;
  };
};
