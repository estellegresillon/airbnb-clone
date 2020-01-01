import React, { useState } from "react";
import Select from "react-select";

import { initArrOptions, initTypeOptions } from "../../constants/filter-options";
import { weeklyRestaurant } from "../../constants/weekly-restaurant";

const Home = props => {
  const { history } = props;
  const [arr, setArr] = useState("Tous les arr.");
  const [type, setType] = useState("Tous les types");

  const handleArrChange = e => {
    const selectedArr = e.value;
    setArr(selectedArr);
  };

  const handleTypeChange = e => {
    const selectedType = e.value;
    setType(selectedType);
  };

  const goToRestaurantsPage = () => {
    history.push({ pathname: "/restaurants", homeArr: arr, homeType: type })
  }

  return (
    <div className="home-wrapper">
      <div className="home-hero-scene">
        <div className="home-hero-scene-intro-wrapper">
          <div className="home-hero-scene-intro">
            <div className="home-catchphrase">Foodlab, la sélection des meilleurs resto de Paris</div>
            <div className="home-catchphrase-underline" />
            <div className="home-subtitle">classés par note, type de cuisine et arrondissement.</div>
          </div>
        </div>
        <div className="home-hero-scene-image">
          <Select
            value={arr}
            options={initArrOptions}
            onChange={handleArrChange}
            placeholder={arr}
            isSearchable={false}
            className="filters-react-select filter-arr"
          />
          <Select
            value={type}
            options={initTypeOptions} 
            onChange={handleTypeChange} 
            placeholder={type}
            isSearchable={false}
            className="filters-react-select filter-type"
          />
          <button className="button-home-go" onClick={() => goToRestaurantsPage()}>Voir notre sélection</button>
        </div>
      </div>

      <div className="home-weekly-new">
        <div className="home-weekly-new-title">
          Le resto de la semaine
        </div>
        <div className="weekly-restaurant" onClick={() => props.history.push({ pathname: `/restaurants/${weeklyRestaurant.id}`, restaurant: weeklyRestaurant })}>
          <div className="card">
            <img alt="restaurant-overview" src={weeklyRestaurant.imageUrl} />
            <div className="card-description">
              <div className="card-header">
                <div className="card-header-type">
                  {weeklyRestaurant.type} -{' '}
                  <span className="card-header-budget">{weeklyRestaurant.price}</span>
                </div>
                <div className="card-header-rate"><i className="fas fa-star"></i> {weeklyRestaurant.rate} ({weeklyRestaurant.votes}+)</div>
              </div>
              <h2>{weeklyRestaurant.name}</h2>
              <div className="card-restaurant-address">{weeklyRestaurant.address}</div>
              <div className="card-see-infos">Voir infos</div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-footer">
        <div className="home-footer-brand">
          <i className="fas fa-copyright" />
          Foodlab
        </div>
      </div>
    </div>
  );
};

export default Home;
