import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Flat from "./flat";
import { setFlats } from "../../actions";

const FlatList = props => {
  const { setFlats, flats, sortedFlats, searchedFlat, showMap } = props;

  useEffect(() => { setFlats(); }, [setFlats]);
  
  return (
    <div className={showMap ? "flat-list-with-rows" : "flat-list-with-grid"}>
      {searchedFlat ? 
        <Flat flat={searchedFlat} tabIndex={1} /> :
          sortedFlats.length ?
          sortedFlats.map((flat, i) => <Flat key={flat.id} flat={flat} tabIndex={i} />) :
          flats.map((flat, i) => <Flat key={flat.id} flat={flat} tabIndex={i} />)
      }
    </div>
  );
};

const mapStateToProps = state => {
  return { 
    flats: state.flats,
    searchedFlat: state.searchedFlat,
    sortedFlats: state.sortedFlats,
    showMap: state.showMap
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFlats }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
