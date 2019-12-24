import React from "react";
import { connect } from "react-redux";

import Flat from "./flat";


const FlatList = props => {
  const { listedFlats, showMap } = props;
  
  return (
    <div className={showMap ? "flat-list-with-rows" : "flat-list-with-grid"}>
      {listedFlats.map((flat, i) => <Flat key={flat.id} flat={flat} tabIndex={i} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return { 
    showMap: state.showMap
  };
};

export default connect(mapStateToProps)(FlatList);
