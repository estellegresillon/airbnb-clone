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
          {flat.award &&
            <Badge 
              scroll={flat.award.scroll}
              icon={flat.award.icon}
              description={flat.award.description} />}
          <div className="card-description">
            <div className="card-header">
              <div className="card-header-type">
                {flat.type} -{' '}
                <span className="card-header-budget">{flat.price}</span>
              </div>
              <div className="card-header-rate"><i className="fas fa-star"></i> {flat.rate} ({flat.votes}+)</div>
            </div>
            <h2>
              {flat.name}
              <span className="grid-see-infos">
                Voir infos
                <i className="fas fa-chevron-right" />
              </span>
            </h2>
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
