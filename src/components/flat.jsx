import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectFlat } from "../actions";

const Flat = props => {
  const { selectFlat, selectedFlat, flat, tabIndex, showMap, displayFirst } = props;

  const handleClick = () => {
    selectFlat(flat);
  };

  return (
    <div 
      className={`flat card-container ${flat === selectedFlat ? "selected" : null}`}
      onClick={handleClick}
      role="link"
      id={`flat-${flat.id}`}
      tabIndex={tabIndex + 1}
    >
      <div className="card">
        {!showMap && <div className="grid-img-overlay" />}
        <img src={flat.imageUrl} alt="flat-overview" width="200" />
        {displayFirst && tabIndex === 0 && <i className="fas fa-award" />}
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
          {showMap && <div className="card-see-infos" onClick={() => console.log(flat.id)}>Voir infos</div>}
        </div>
      </div>
      {!showMap && <div className="card-see-infos" onClick={() => console.log(flat.id)}>Voir infos</div>}
    </div>
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
