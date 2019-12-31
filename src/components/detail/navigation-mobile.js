const getTouches = evt => {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

export const handleTouchStart = evt => {
  const firstTouch = getTouches(evt)[0];                                      
  xDown.current = firstTouch.clientX;                                      
  yDown.current = firstTouch.clientY;                                    
}; 

export const handleTouchMove = evt => {
  const listedRestaurants = location.listedRestaurants
  
  if (!xDown.current || !yDown.current) {
    return;
  }

  var xUp = evt.touches[0].clientX;                                    
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown.current - xUp;
  var yDiff = yDown.current - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant diff*/
    if (xDiff > 0) {
      /* left swipe */ 
      props.history.push({ pathname: `/restaurants/${previousRestaurantRef.current}`, listedRestaurants });
    } else {
      /* right swipe */
      props.history.push({ pathname: `/restaurants/${nextRestaurantRef.current}`, listedRestaurants });
    }                       
  } else {
    if (yDiff > 0) {
      /* up swipe */ 
      console.log("up")
    } else { 
      /* down swipe */
      console.log("down")
    }                                                                 
  }
  /* reset values */
  xDown.current = null;
  yDown.current = null;                                             
};

export const setNavigation = (restaurantList) => {
  let previous;
  let next;

  restaurantList.forEach((val, i) => {
    if (val.id.toString() === match.params.id) {
      previous = restaurantList[i - 1];
      next = restaurantList[i + 1];
    };
  });

  if (previous) {
    previousRestaurantRef.current = previous.id;
  };
  if (next) {
    nextRestaurantRef.current = next.id;
  };
};
