export default function(state, action) {
  if (state === undefined) {
    return [];
  };
  
  switch (action.type) {
    case "SORT_RESTAURANTS":
      return action.payload;
    default:
      return state;
  };
};
