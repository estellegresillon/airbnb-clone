import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import FlatList from "./flat-list";
import Map from "./map";
import Filters from "./filters";

const Home = props => {
  const { flats, sortedFlats, searchedFlat } = props;
  const [listNumber, setListNumber] = useState(null);

  useEffect(() => {
    if (searchedFlat) {
      setListNumber(1)
    } else {
      if (sortedFlats.length) {
        setListNumber(sortedFlats.length)
      } else {
        setListNumber(flats.length)
      }
    }
  }, [flats, sortedFlats, searchedFlat]);
  
  return (
    <>
      <Filters />
      <div className="flat-counter">
        {listNumber}
        {listNumber === 1 ? " résultat correspond à votre recherche." : " résultats correspondent à votre recherche."}
      </div>
      <div className="main-view">
        <FlatList />
        <Map />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { 
    flats: state.flats,
    searchedFlat: state.searchedFlat,
    sortedFlats: state.sortedFlats
  };
};

export default connect(mapStateToProps)(Home);
