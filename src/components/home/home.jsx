import React, { useState, useEffect } from "react";
import Select from "react-select";

import { INIT_ARR_OPTIONS, INIT_TYPE_OPTIONS } from "../../constants/filter-options";
import { WEEKLY_RESTAURANT } from "../../constants/weekly-restaurant";
import { NEW_RESTAURANTS } from "../../constants/new-restaurants";
import { useWindowSize } from "../../hooks/useWindowSize";
import { CONCEPT_STEPS } from "../../constants/concept-steps";

const Home = props => {
  const { history } = props;
  const windowSize = useWindowSize();
  const [arr, setArr] = useState("Tous les arr.");
  const [type, setType] = useState("Tous les types");
  const [isVisible, setIsVisible] = useState(false);

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

  const triggerHotDog = e => {
    const windowHeight = window.innerHeight;
    const view = window.pageYOffset;
    const hotDogIconDistance = document.querySelector(".hot-dog").offsetTop;
    const hotDogIconHeight = document.querySelector(".hot-dog").height;

    if ((windowHeight + view - hotDogIconHeight) >= hotDogIconDistance) {
      setIsVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", triggerHotDog, false);
    return () => window.removeEventListener("scroll", triggerHotDog, false);
  }, [])

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
          <button className="button-home-go" onClick={() => goToRestaurantsPage()}>Voir notre sélection</button>
        </div>
      </div>

      <div className="home-weekly-new">
        <div className="home-weekly-new-title">
          <i className="fas fa-award" />
          <span className="home-weekly-title-text">Le resto de la semaine</span>
          <i className="fas fa-award" />
        </div>
        <div className="weekly-restaurant" onClick={() => history.push({ pathname: `/restaurants/${WEEKLY_RESTAURANT.id}`, restaurant: WEEKLY_RESTAURANT })}>
          <div className="card">
            <img alt="restaurant-overview" src={WEEKLY_RESTAURANT.imageUrl} />
            <div className="card-description">
              <div className="card-header">
                <div className="card-header-type">
                  {WEEKLY_RESTAURANT.type} -{' '}
                  <span className="card-header-budget">{WEEKLY_RESTAURANT.price}</span>
                </div>
                <div className="card-header-rate"><i className="fas fa-star"></i> {WEEKLY_RESTAURANT.rate} ({WEEKLY_RESTAURANT.votes}+)</div>
              </div>
              <h2>{WEEKLY_RESTAURANT.name}</h2>
              <div className="card-restaurant-address">{WEEKLY_RESTAURANT.address}</div>
              <div className="card-see-infos">Voir infos</div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-foodlab-concept">
        {CONCEPT_STEPS.map(step => {
          return (
            <div key={step.nb} className={`home-concept-step home-step-${step.nb}`}>
              <img src={step.src} alt={step.nb}></img>
              <div className="home-concept-description">{step.description}</div>
            </div>
          )
        })}
      </div>

      <div className="home-new">
        <div className="home-new-title">
          Les nouveaux dans le top
        </div>

        {NEW_RESTAURANTS.map(newRest => {
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
      
      <div className="footer-img">
        <img className="fried-potatoes" src="/fried-potatoes.svg" alt="fried-potatoes" />
        <img className="fried-chicken" src="/fried-chicken.svg" alt="fried-chicken" />
        <img 
          className="hot-dog"
          src="/hot-dog.svg"
          alt="hot-dog"
          style={{ 
            visibility: isVisible ? "visible" : "hidden", 
            animation: isVisible ? "3s translateHotDog" : ""
          }}
        />
        <img className="cola" src="/cola.svg" alt="cola" />
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
