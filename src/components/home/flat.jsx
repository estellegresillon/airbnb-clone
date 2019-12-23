import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectFlat } from "../../actions";
import Badge from "../common/badge";

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
          {flat.name === "Dilia" && <Badge icon="fas fa-award" description="Le mieux noté" />}
          {flat.votes > 5000 && <Badge icon="fas fa-medal" description="Le plus populaire" />}
          {flat.name === "Buddha Bar" && <Badge icon="fas fa-heart" description="Notre coup de coeur" />}
          {flat.name === "Benedict" && <Badge icon="fas fa-bacon" description="Le meilleur brunch" />}
          {flat.name === "Papelli - Fbg Saint Denis" && <Badge icon="fas fa-pizza-slice" description="La meilleure pizza" />}
          {flat.name === "Hank Burger - Archives" && <Badge icon="fas fa-carrot" description="Le meilleur vegan" />}
          {flat.name === "B&M - Montmartre" && <Badge icon="fas fa-hamburger" description="Le meilleur burger" />}
          {flat.name === "Bocamexa - Oberkampf" && <Badge icon="fas fa-pepper-hot" description="Le meilleur méxicain" />}
          {flat.name === "L'Hôtel Amour" && <Badge icon="fas fa-umbrella-beach" description="La meilleure terrasse" />}
          {flat.name === "La Gare" && <Badge icon="fab fa-instagram" description="Le plus instagrammable" />}
          {flat.name === "Maison Landemaine - Oberkampf" && <Badge icon="fas fa-birthday-cake" description="La meilleure pâtisserie" />}
          {flat.name === "The Used Book Café (Merci)" && <Badge icon="fas fa-book" description="Pour bouquiner ou travailler" />}
          {flat.name === "Le Nid - Cocon Ludique" && <Badge icon="fas fa-chess" description="Pour jouer" />}
          {flat.name === "Canal Poké - Saint-Martin" && <Badge icon="fas fa-leaf" description="Le meilleur poké" />}
          {flat.name === "Wunderbär" && <Badge icon="fas fa-hotdog" description="Le meilleur germanique" />}
          {flat.name === "Le Jeroboam" && <Badge icon="fas fa-frog" description="Le meilleur français" />}
          {flat.name === "La Cevicheria" && <Badge icon="fas fa-fish" description="Le meilleur ceviche" />}
          {flat.name === "Presto Fresco" && <Badge icon="fas fa-utensils" description="Le meilleur italien" />}
          {flat.name === "Boteco Lapa" && <Badge icon="fas fa-sun" description="Le meilleur brésilien" />}
          {flat.name === "Café du Musée Jacquemart André" && <Badge icon="fas fa-crown" description="Le plus chic" />}
          {flat.name === "Aki" && <Badge icon="fas fa-torii-gate" description="Le meilleur japonais" />}
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
