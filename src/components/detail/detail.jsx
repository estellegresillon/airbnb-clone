import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setFlats } from "../../actions";

const Detail = props => {
  const { setFlats, flats, match, location } = props;
  const [flat, setFlat] = useState({})
  
  useEffect(() => { 
    if (!location.flat) {
      setFlats(); 
    }
  }, [location.flat, setFlats])

  useEffect(() => {
    if (location.flat) {
      setFlat(location.flat)
    } else {
      const detailFlat = [...flats].filter(val => {
        if (val.id) {
          return val.id.toString() === match.params.id;
        } else return null;
      });
  
      setFlat(detailFlat[0]);
    }
  }, [location.flat, flats, match.params.id])

  return flat ? (
    <div className="detail-page-wrapper">
      <div 
        className="detail-page-big-img"
        style={{ 
          background: `url(${flat.imageUrl})`,
          marginRight: "20px",
        }}
      />
      <div className="detail-page-content">
        <div className="detail-page-title">
          {flat.name}
        </div>
      </div>
    </div>
  ) :
  <div>no flat corresponding</div>
}

const mapStateToProps = state => {
  return {
    flats: state.flats,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFlats }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
