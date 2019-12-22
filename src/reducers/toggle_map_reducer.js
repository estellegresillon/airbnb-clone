export default function(state, action) {
  if (state === undefined) {
    return true;
  };

  switch (action.type) {
    case "TOGGLE_MAP":
      return !action.payload;
    default:
      return state;
  };
};