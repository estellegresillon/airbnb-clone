import React from "react";

const Footer = props => {
  const { previousRestaurantRef, nextRestaurantRef, handleNavigation, hasSeenSuggestion } = props;

  return (
    <div className="detail-page-footer">
      {previousRestaurantRef.current &&
        <div 
          className={`footer-button-left ${!hasSeenSuggestion ? "footer-button-shiny" : ""}`}
          onClick={() => handleNavigation("left")}
        >
          <i className="fas fa-chevron-left" />
        </div>}

      <div className="footer-text"></div>

      {nextRestaurantRef.current &&
        <div 
          className={`footer-button-right ${!hasSeenSuggestion ? "footer-button-shiny" : ""}`}
          onClick={() => handleNavigation("right")}
        >
          <i className="fas fa-chevron-right" />
        </div>}
    </div>
  );
};

export default Footer;
