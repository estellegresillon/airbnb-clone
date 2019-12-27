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

  const setSize = icon => {
    if (
      icon === "fas fa-frog" ||
      icon === "fas fa-leaf"
    ) {
      return "13px"
    } else return "15px"
  }

  const iconWrapper = {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    fontSize: setSize(icon),
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "50%"
  }

  const tooltipBadge = {
    position: "absolute",
    backgroundColor: "#fff",
    fontSize: "12px",
    fontFamily: "Roboto",
    borderRadius: "4px",
    padding: "6px 8px",
    whiteSpace: "nowrap",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
    zIndex: 999,
    color: setColor(icon)
  }

  return (
    <div className="badge-wrapper">
      <div className="icon-wrapper" style={iconWrapper}>
        <i className={icon} style={{ color: setColor(icon)}} />
      </div>
      <div className="tooltip-badge" style={tooltipBadge}>
        {description}
      </div>
    </div>
  );
};

export default Badge;
