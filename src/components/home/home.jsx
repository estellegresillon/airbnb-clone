import React, { useState, useEffect, useRef } from "react";

import HeroScene from "./hero-scene";
import WeeklyNew from "./weekly-new";
import FoodlabConcept from "./foodlab-concept";
import NewRestaurants from "./new-restaurants";
import ContactSection from "./contact-section";
import Footer from "./footer";

const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Home = props => {
  const { history } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const hotDogRef = useRef(null);
  const contactTitle = useRef(null);
  const contactIconContainer = useRef(null);
  const conceptContainer = useRef(null);
  const weeklyCard = useRef(null);
  const newRestaurantsContainer = useRef(null);
  const contactContainer = useRef(null);
  const prevCount = usePrevious(count)

  const triggerHotDog = () => {
    const windowHeight = window.innerHeight;
    const view = window.pageYOffset;
    const hotDogIconDistance = hotDogRef.current.offsetTop;
    const hotDogIconHeight = hotDogRef.current.height;

    if ((windowHeight + view - hotDogIconHeight) >= hotDogIconDistance) {
      setIsVisible(true);
    }
  }

  const moveContactElements = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    contactIconContainer.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * 0.04},${distanceFromMiddleY * 0.08},0,1)`;
    contactTitle.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000007},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    if (count < prevCount) {
      if (prevCount - count < 40) {
        return;
      }
      weeklyCard.current.classList.remove("bg-spin-down");
      weeklyCard.current.classList.add("bg-spin-up");
      conceptContainer.current.classList.remove("bg-spin-down");
      conceptContainer.current.classList.add("bg-spin-up");
      newRestaurantsContainer.current.classList.remove("bg-spin-down");
      newRestaurantsContainer.current.classList.add("bg-spin-up");
    } else if (count > prevCount) {
      if (count - prevCount < 40) {
        return;
      }
      weeklyCard.current.classList.remove("bg-spin-up");
      weeklyCard.current.classList.add("bg-spin-down");
      conceptContainer.current.classList.remove("bg-spin-up");
      conceptContainer.current.classList.add("bg-spin-down");
      newRestaurantsContainer.current.classList.remove("bg-spin-up");
      newRestaurantsContainer.current.classList.add("bg-spin-down");
    }
  }, [count, prevCount]);

  useEffect(() => {
    window.addEventListener("scroll", () => { setCount(window.pageYOffset) }, false);
    return () => window.removeEventListener("scroll", () => { setCount(null) }, false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", triggerHotDog, false);
    return () => window.removeEventListener("scroll", triggerHotDog, false);
  }, [])

  useEffect(() => {
    contactContainer.current.addEventListener("mousemove", moveContactElements, false);
    return () => contactContainer.current.removeEventListener("mousemove", moveContactElements, false);
  }, [])

  return (
    <div className="home-wrapper">
      <HeroScene history={history} />
      <WeeklyNew history={history} weeklyCard={weeklyCard} />
      <FoodlabConcept conceptContainer={conceptContainer} />
      <NewRestaurants history={history} newRestaurantsContainer={newRestaurantsContainer} />
      <ContactSection
        history={history}
        contactContainer={contactContainer}
        contactIconContainer={contactIconContainer}
        contactTitle={contactTitle}
      />
      <Footer hotDogRef={hotDogRef} isVisible={isVisible} />
    </div>
  );
};

export default Home;
