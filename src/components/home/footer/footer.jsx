import React from "react";

const Footer = ({ hotDogRef, isVisible }) => (
  <>
    <div className="footer-img">
      <img className="fried-potatoes" src="/fried-potatoes.svg" alt="fried-potatoes" />
      <img className="fried-chicken" src="/fried-chicken.svg" alt="fried-chicken" />
      <img
        className="hot-dog"
        src="/hot-dog.svg"
        alt="hot-dog"
        ref={hotDogRef}
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
  </>
);

export default Footer;
