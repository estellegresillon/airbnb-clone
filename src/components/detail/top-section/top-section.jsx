import React from "react";

const TopSection = ({ history, restaurant, detailPageTop, location }) => (
  <>
    <div className="button-go-back" onClick={() => history.back()}>
      <i className="fas fa-chevron-left" /> Retour
    </div>
    {restaurant.award &&
      <div className="detail-page-award">
        {restaurant.award.description}
      </div>}
    <div className="top-section">
      <div 
        className="detail-page-big-img"
        ref={detailPageTop}
        style={{ backgroundImage: `url(${restaurant.imageUrl || restaurant.imageUrl2})` }}
      />
      <div key={location.pathname} className="detail-page-content">
        <div className="detail-page-title">{restaurant.name}</div>
        <ul className="detail-page-resume">
          <li><span className="bolder">Type :</span> {restaurant.type} ({restaurant.price})</li>
          <li>
            <span className="bolder">Note : </span>
            <span className="resume-rate">{restaurant.rate}/5 </span>
            (+ de {restaurant.votes} votes Google)
          </li>
          <li>{restaurant.address}</li>
          <li><span className="bolder">Horaires :</span> {restaurant.openingHours}</li>
          <li><span className="bolder">Téléphone :</span> {restaurant.phone || "Non communiqué"}</li>
          {restaurant.menuLink && 
            <li>
              <a 
                href={restaurant.menuLink}
                target="_blank"
                className="see-menu"
                rel="noopener noreferrer"
              >Voir le menu</a>
            </li>}
        </ul>
      </div>
    </div>
  </>
);

export default TopSection;
