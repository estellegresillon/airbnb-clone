import React, { useRef } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectFlat } from "../actions";

const Flat = props => {
  const { selectFlat, selectedFlat, flat, tabIndex } = props;
  
  const handleClick = () => {
    selectFlat(flat);
  };

  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${
      flat.imageUrl
    }')`
  };

  return (
    <div 
      className={`flat card-container ${flat === selectedFlat ? "selected" : null}`}
      onClick={handleClick}
      role="link"
      id={`flat-${flat.id}`}
      tabIndex={tabIndex + 1}
    >
      <div className="card" style={style}>
        <div className="card-description">
          <h2>{flat.name}</h2>
          <p>{flat.price} {flat.priceCurrency}</p>
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
