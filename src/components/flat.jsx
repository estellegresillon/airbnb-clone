import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectFlat } from "../actions";

const Flat = props => {
  const { selectFlat, selectedFlat, flat, tabIndex } = props;
  
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
        <img src={flat.imageUrl} width="200" />
        <div className="card-description">
          <div className="card-header">
            <div>{flat.type}</div>
            <div>{flat.rate} ({flat.votes})</div>
          </div>
          <h2>{flat.name}</h2>
          <div>{flat.price}</div>
          <div>{flat.address}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedFlat: state.selectedFlat};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectFlat }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
