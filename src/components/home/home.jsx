import React, { useState } from "react";
import Select from "react-select";

import { initArrOptions, initTypeOptions } from "../../constants/filter-options";
import { weeklyRestaurant } from "../../constants/weekly-restaurant";
import { newRestaurants } from "../../constants/new-restaurants";
import { useWindowSize } from "../../hooks/useWindowSize";

const Home = props => {
  const { history } = props;
  const windowSize = useWindowSize();
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
    <div className={`${windowSize.width < 728 ? "home-wrapper-mobile-view" : "home-wrapper"}`}>
      <div className="home-hero-scene">
        <div className="home-hero-scene-intro-wrapper">
          <div className="home-hero-scene-intro">
            <div className="home-catchphrase">Foodlab, la sélection des meilleurs restos de Paris</div>
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
          <i className="fas fa-award" />
          <span className="home-weekly-title-text">Le resto de la semaine</span>
          <i className="fas fa-award" />
        </div>
        <div className="weekly-restaurant" onClick={() => history.push({ pathname: `/restaurants/${weeklyRestaurant.id}`, restaurant: weeklyRestaurant })}>
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

      <div className="home-foodlab-concept">
        <div className="home-concept-step home-step-one">
          <img src="/undraw_progress_tracking.svg" alt="step-one"></img>
          <div className="home-concept-description">Les meilleurs lieux où manger à Paris, toujours triés par note</div>
        </div>

        <div className="home-concept-step home-step-two">
          <img src="/undraw_progressive_app.svg" alt="step-two"></img>
          <div className="home-concept-description">Accessible partout où vous êtes, desktop ou mobile</div>
        </div>

        <div className="home-concept-step home-step-three">
          <img src="/undraw_wishlist.svg" alt="step-three"></img>
          <div className="home-concept-description">Recherche simplifiée par type de cuisine et arrondissement</div>
        </div>

        <div className="home-concept-step home-step-four">
          <img src="/undraw_winners.svg" alt="step-four"></img>
          <div className="home-concept-description">Uniquement le meilleur du meilleur, plus besoin de chercher</div>
        </div>
      </div>

      <div className="home-new">
        <div className="home-new-title">
          Les nouveaux dans le top
        </div>

        {newRestaurants.map(newRest => {
          return (
            <div key={newRest.id} className="new-restaurant" onClick={() => history.push({ pathname: `/restaurants/${newRest.id}`, restaurant: newRest })}>
              <div className="card">
                <img alt="restaurant-overview" src={newRest.imageUrl} />
                <div className="card-description">
                  <div className="card-header">
                    <div className="card-header-type">
                      {newRest.type} -{' '}
                      <span className="card-header-budget">{newRest.price}</span>
                    </div>
                    <div className="card-header-rate"><i className="fas fa-star"></i> {newRest.rate} ({newRest.votes}+)</div>
                  </div>
                  <h2>{newRest.name}</h2>
                  <div className="card-restaurant-address">{newRest.address}</div>
                  <div className="card-see-infos">Voir infos</div>
                </div>
              </div>
            </div>
          )
        })}
        
        
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
