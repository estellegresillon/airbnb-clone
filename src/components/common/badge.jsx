import React from "react";

const Badge = props => {
  const { icon, description } = props;

  const setColor = icon => {
    if (icon === "fas fa-award") {
      // pink
      return "#ffb0be"
    } else if (
      icon === "fas fa-heart" || 
      icon === "fas fa-medal" || 
      icon === "fas fa-umbrella-beach" ||
      icon === "fab fa-instagram" ||
      icon === "fas fa-crown"
    ) {
      // red
      return "#ea4135"
    } else {
      // orange
      return "#ffb832"
    }
  }

  return (
    <div className="badge-wrapper">
      <i
        className={icon}
        style={{ 
          color: setColor(icon),
          backgroundColor: "white"
        }}
      />
      <div className={`tooltip-${icon}`}>
        {description}
      </div>
    </div>
  );
};

export default Badge;
