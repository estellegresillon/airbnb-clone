import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectFlat } from "../../actions";

const Flat = props => {
  const { selectFlat, selectedFlat, flat, tabIndex, showMap } = props;

  const handleClick = () => {
    selectFlat(flat);
  };

  return (
    <>
      <div 
        className={`flat card-container ${flat === selectedFlat ? "selected" : null}`}
        onClick={handleClick}
        role="link"
        id={`flat-${flat.id}`}
        tabIndex={tabIndex + 1}
      >
        {!showMap && <Link to={{pathname: `/restaurants/${flat.id}`, flat: flat}} target="_blank"></Link>}
        <div className="card">
          {!showMap && <div className="grid-img-overlay" />}
          <img src={flat.imageUrl} alt="flat-overview" width="200" />
          {flat.name === "Siseng" && <i className="fas fa-award" />}
          {flat.votes > 5000 && <i className="fas fa-medal" />}
          {flat.name === "Buddha Bar" && <i className="fas fa-heart" />}
          {flat.name === "Benedict" && <i className="fas fa-bacon" />}
          {flat.name === "Papelli - Fbg Saint Denis" && <i className="fas fa-pizza-slice" />}
          {flat.name === "Hank Burger - Archives" && <i className="fas fa-carrot" />}
          {flat.name === "B&M - Montmartre" && <i className="fas fa-hamburger" />}
          {flat.name === "Bocamexa - Oberkampf" && <i className="fas fa-pepper-hot" />}
          {flat.name === "L'Hôtel Amour" && <i className="fas fa-umbrella-beach" />}
          {flat.name === "La Gare" && <i className="fab fa-instagram" />}
          {flat.name === "Maison Landemaine - Oberkampf" && <i className="fas fa-birthday-cake" />}
          {flat.name === "The Used Book Café (Merci)" && <i className="fas fa-book" />}
          {flat.name === "Le Nid - Cocon Ludique" && <i className="fas fa-chess" />}
          {flat.name === "Canal Poké - Saint-Martin" && <i className="fas fa-leaf" />}
          {flat.name === "Wunderbär" && <i className="fas fa-hotdog" />}
          {flat.name === "Presto Fresco" && <i className="fas fa-cheese" />}
          {flat.name === "La Cevicheria" && <i className="fas fa-fish" />}
          {flat.name === "Le Jeroboam" && <i className="fas fa-utensils" />}
          {flat.name === "Boteco Lapa" && <i className="fas fa-sun" />}
          {flat.name === "Café du Musée Jacquemart André" && <i className="fas fa-crown" />}
          {flat.name === "Aki" && <i className="fas fa-torii-gate" />}
          <div className="card-description">
            <div className="card-header">
              <div className="card-header-type">
                {flat.type} -{' '}
                <span className="card-header-budget">{flat.price}</span>
              </div>
              <div className="card-header-rate"><i className="fas fa-star"></i> {flat.rate} ({flat.votes}+)</div>
            </div>
            <h2>{flat.name}</h2>
            <div className="card-flat-address">{flat.address}</div>
            {showMap && 
              <Link to={{pathname: `/restaurants/${flat.id}`, flat: flat}} target="_blank">
                <div className="card-see-infos">Voir infos</div>
              </Link>}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { 
    selectedFlat: state.selectedFlat,
    showMap: state.showMap
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectFlat }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
