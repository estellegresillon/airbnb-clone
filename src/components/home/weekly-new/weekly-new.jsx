import React from "react";

import { WEEKLY_RESTAURANT } from "../../../constants/weekly-restaurant";
import Card from "../../common/card";

const WeeklyNew = ({ history, weeklyCard }) => (
  <div className="home-weekly-new">
    <div className="home-weekly-new-title">
      <i className="fas fa-award" />
      <span className="home-weekly-title-text">Le resto de la semaine</span>
      <i className="fas fa-award" />
    </div>
    <div
      className="weekly-restaurant"
      ref={weeklyCard}
      onClick={() => history.push({
        pathname: `/detail/${WEEKLY_RESTAURANT.id}`,
        restaurant: WEEKLY_RESTAURANT,
        listedRestaurants: [WEEKLY_RESTAURANT],
      })}>

      <Card tabIndex={0} restaurant={WEEKLY_RESTAURANT} />
    </div>
  </div>
);

export default WeeklyNew;
