import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";

import { INIT_ARR_OPTIONS, INIT_TYPE_OPTIONS } from "../../constants/filter-options";
import { WEEKLY_RESTAURANT } from "../../constants/weekly-restaurant";
import { NEW_RESTAURANTS } from "../../constants/new-restaurants";
import { CONCEPT_STEPS } from "../../constants/concept-steps";
import Card from "../common/card";

const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Home = props => {
  const { history } = props;
  const [arr, setArr] = useState("Tous les arr.");
  const [type, setType] = useState("Tous les types");
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count)

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

  const goToContactPage = () => {
    history.push({ pathname: "/contact" })
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

  const moveContactElements = e => {
    const contactTitle = document.getElementById("home-contact-title");
    const iconContainer = document.querySelector(".contact-icon-container");
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    iconContainer.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * 0.04},${distanceFromMiddleY * 0.08},0,1)`;
    contactTitle.style.transform = 
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000007},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`; 
  }

  useEffect(() => {
    const weeklyCard = document.querySelector(".weekly-restaurant");
    const conceptContainer = document.querySelector(".home-foodlab-concept");
    const newRestaurants = document.querySelectorAll(".new-restaurant");

    if (count < prevCount) {
      if (prevCount - count < 40) {
        return;
      }
      weeklyCard.classList.remove("bg-spin-down")
      weeklyCard.classList.add("bg-spin-up")
      conceptContainer.classList.remove("bg-spin-down")
      conceptContainer.classList.add("bg-spin-up")
      newRestaurants.forEach(restaurant => restaurant.classList.remove("bg-spin-down"))
      newRestaurants.forEach(restaurant => restaurant.classList.add("bg-spin-up"))
    } else if (count > prevCount) {
      if (count - prevCount < 40) {
        return;
      }
      weeklyCard.classList.remove("bg-spin-up")
      weeklyCard.classList.add("bg-spin-down")
      conceptContainer.classList.remove("bg-spin-up")
      conceptContainer.classList.add("bg-spin-down")
      newRestaurants.forEach(restaurant => restaurant.classList.remove("bg-spin-up"))
      newRestaurants.forEach(restaurant => restaurant.classList.add("bg-spin-down"))
    }
  }, [count, prevCount]);

  useEffect(() => {
    document.addEventListener("scroll", () => { setCount(window.pageYOffset) }, false);
    return () => document.removeEventListener("scroll", () => { setCount(null) }, false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", triggerHotDog, false);
    return () => window.removeEventListener("scroll", triggerHotDog, false);
  }, [])

  useEffect(() => {
    const contact = document.querySelector(".home-contact");

    contact.addEventListener("mousemove", moveContactElements, false);
    return () => contact.removeEventListener("mousemove", moveContactElements, false);
  }, [])

  return (
    <div className="home-wrapper">
      <div className="home-hero-scene">
        <div className="home-hero-scene-intro-wrapper">
          <div className="home-hero-scene-intro">
            <div className="home-catchphrase">Foodlab, la sélection des meilleurs restos de Paris</div>
            <div className="home-catchphrase-underline" />
            <div className="home-subtitle">classés par notes, types de cuisine et arrondissements.</div>
          </div>
        </div>
        <div className="home-hero-scene-image-overlay"></div>
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
          <button className="button-home-go" onClick={() => goToRestaurantsPage()}>
            <span className="btn-first-text">Voir notre sélection</span>
            <span className="btn-second-text">Voir notre sélection</span>
          </button>
        </div>
      </div>

      <div className="home-weekly-new">
        <div className="home-weekly-new-title">
          <i className="fas fa-award" />
          <span className="home-weekly-title-text">Le resto de la semaine</span>
          <i className="fas fa-award" />
        </div>
        <div 
          className="weekly-restaurant"
          onClick={() => history.push({
            pathname: `/detail/${WEEKLY_RESTAURANT.id}`,
            restaurant: WEEKLY_RESTAURANT,
            listedRestaurants: [WEEKLY_RESTAURANT],
            })}>

          <Card tabIndex={0} restaurant={WEEKLY_RESTAURANT} />
        </div>
      </div>

      <div className="home-foodlab-concept">
        {CONCEPT_STEPS.map(step => {
          return (
            <div key={step.nb} className={`home-concept-step home-step-${step.nb}`}>
              <img src={step.src} alt={step.nb}></img>
              <div className="home-concept-description"><span>{step.description}</span></div>
            </div>
          )
        })}
      </div>

      <div className="home-new">
        <div className="home-new-title">
          <i className="fas fa-rocket" />
          <span className="home-new-title-text">Les petits nouveaux</span>
          <i className="fas fa-rocket" />
        </div>

        {NEW_RESTAURANTS.map((newRest, i) => {
          return (
            <div 
              key={newRest.id}
              className="new-restaurant"
              onClick={() => history.push({ 
                pathname: `/detail/${newRest.id}`, 
                restaurant: newRest,
                listedRestaurants: NEW_RESTAURANTS,
              })}>
              <Card 
                key={i} 
                listedRestaurants={NEW_RESTAURANTS}
                restaurant={newRest} 
                tabIndex={i} 
              />
            </div>
          )
        })}
      </div>

      <div className="home-contact">
        <div className="gradient-stroke" id="home-contact-title">
          Un resto à proposer ?
        </div>
        <button className="go-to-contact" onClick={() => goToContactPage()}>
          <span className="btn-first-text">Ecrivez-nous !</span>
          <span className="btn-second-text">Ecrivez-nous !</span>
        </button>

        <div className="contact-icon-container">
          <img className="contact-burger" src="contact-burger.svg" alt="burger-svg" />
          <img className="contact-lobster" src="contact-lobster.svg" alt="lobsterer-svg" />
          <img className="contact-salad" src="contact-salad.svg" alt="dalad-svg" />

          <img className="contact-ice-cream" src="contact-ice-cream.svg" alt="ice-cream-svg" />
          <img className="contact-pizza" src="contact-pizza.svg" alt="pizza-svg" />
          <img className="contact-pasta" src="contact-pasta.svg" alt="pasta-svg" />
        </div>
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
