export default function(state, action) {
  if (state === undefined) {
    return [];
  };

  const sortByRate = (flats) => {
    const sortedByRate = [...flats].sort((a, b) => {
      if (a.rate < b.rate) return 1;
      if (a.rate > b.rate) return -1;
      return 0;
    });
    
    return sortedByRate;
  }
  
  switch (action.type) {
    case "SET_FLATS":
      return sortByRate(action.payload);
    default:
      return state;
  };
};
