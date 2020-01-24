export const filterArrByType = (type, arr, restaurants, setArrOptions, sortRestaurants) => {
  // sort Restaurants according to type
  const sortedRestaurants = filterByType(restaurants, type);

  // we want to show only available location in the list
  const newArrOptions = displayAvailableArr(sortedRestaurants);
  setArrOptions(newArrOptions);

  // filter only the available cuisine types
  if (arr !== "Tous les arr.") {
    const sortRestaurantsByArr = filterByArr(sortedRestaurants, arr);
    sortRestaurants(sortRestaurantsByArr);
  } else {
    sortRestaurants(sortedRestaurants);
  };
};

export const filterTypeByArr = (arr, type, restaurants, setTypeOptions, sortRestaurants) => {
  // sort Restaurants according to location
  const sortedRestaurants = filterByArr(restaurants, arr);

  // we want to show only available cuisine type in the list
  const newTypeOptions = displayAvailableType(sortedRestaurants);
  setTypeOptions(newTypeOptions);

  // filter only the available locations
  if (type !== "Tous les types") {
    const sortRestaurantsByType = filterByType(sortedRestaurants, type);
    sortRestaurants(sortRestaurantsByType);
  } else {
    sortRestaurants(sortedRestaurants);
  };
};

const filterByType = (restaurants, type) => {
  const sortedRestaurants = [...restaurants].filter(val => {
    if (val.type) {
      return val.type === type;
    } else return null;
  });

  return sortedRestaurants;
}

const filterByArr = (restaurants, arr) => {
  const sortedRestaurants = [...restaurants].filter(val => {
    if (val.arr) {
      return val.arr === arr;
    } else return null;
  });

  return sortedRestaurants;
}

const displayAvailableArr = restaurants => {
  const arrOptions = [];
  restaurants.forEach(restaurant => {
    arrOptions.push(restaurant.arr);
  });

  const uniqueItems = [...new Set(arrOptions)];
  uniqueItems.sort((a, b) => a - b);

  const newArrOptions = [];
  uniqueItems.forEach(itm => {
    newArrOptions.push({ label: itm, value: itm });
  });

  return newArrOptions;
}

const displayAvailableType = restaurants => {
  const typeOptions = [];
  restaurants.forEach(restaurant => {
    typeOptions.push(restaurant.type);
  });

  const uniqueItems = [...new Set(typeOptions)]
  uniqueItems.sort();

  const newTypeOptions = [];
  uniqueItems.forEach(itm => {
    newTypeOptions.push({ label: itm, value: itm });
  });

  return newTypeOptions;
}
