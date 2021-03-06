import React, { useState } from "react";
import Select from "react-select";

import { INIT_ARR_OPTIONS, INIT_TYPE_OPTIONS } from "../../../constants/filter-options";

const HeroScene = ({ history }) => {
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
    <div className="home-hero-scene">
      <div className="home-hero-scene-intro-wrapper">
        <div className="home-hero-scene-intro">
          <div className="home-catchphrase">Foodlab, la sélection des meilleurs restos de Paris</div>
          <div className="home-catchphrase-underline" />
          <div className="home-subtitle">classés par notes, types de cuisine et arrondissements.</div>
          <div className="searchbar">
            <Select
              value={arr}
              options={INIT_ARR_OPTIONS}
              onChange={handleArrChange}
              placeholder={arr}
              isSearchable={false}
              className="filters-react-select filter-arr"
            />
            <Select
              value={type}
              options={INIT_TYPE_OPTIONS}
              onChange={handleTypeChange}
              placeholder={type}
              isSearchable={false}
              className="filters-react-select filter-type"
            />
            <button className="button-home-go" onClick={() => goToRestaurantsPage()}>
              <span className="btn-first-text">Voir notre sélection</span>
              <span className="btn-second-text">Voir notre sélection</span>
            </button>
          </div>
        </div>
      </div>
      <div className="home-hero-scene-image-overlay"></div>
      <div className="home-hero-scene-image">
        
      </div>

      <div className="scroll-animation">
        <div className="mouse-scroll-ball" />
      </div>
    </div>
  );
};

export default HeroScene;
