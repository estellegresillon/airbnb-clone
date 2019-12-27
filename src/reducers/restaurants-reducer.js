export default function(state, action) {
  if (state === undefined) {
    return [];
  };

  const sortByRate = (restaurants) => {
    const sortedByRate = [...restaurants].sort((a, b) => {
      if (a.rate < b.rate) return 1;
      if (a.rate > b.rate) return -1;
      return 0;
    });
    
    return sortedByRate;
  }
  
  switch (action.type) {
    case "SET_RESTAURANTS":
      return sortByRate(action.payload);
    default:
      return state;
  };
};
