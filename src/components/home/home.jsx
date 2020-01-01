import React, { useState } from "react";
import Select from 'react-select';

import { initArrOptions, initTypeOptions } from "../../constants/filter-options";

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

      <div className="home-about">
        Hello
      </div>
    </div>
  );
};

export default Home;
