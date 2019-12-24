import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import FlatList from "./flat-list";
import Map from "./map";
import Filters from "./filters";
import Keys from "./keys";

import { setFlats } from "../../actions";

const Home = props => {
  const { flats, setFlats, sortedFlats, searchedFlat } = props;
  const [listNumber, setListNumber] = useState(null);
  const [listedFlats, setListedFlats] = useState(flats);

  // load flats and sort them
  useEffect(() => { setFlats(); }, [setFlats]);

  // filters flats
  useEffect(() => {
    // 1 - priority on autocomplete, displays only one flat
    // 2 -  if not any flat is searched, display the filtered flats
    // 3 - if not any flat is searched nor filtered, displays all flats
    // never display 0 flats
    if (searchedFlat) {
      setListNumber(1)
      setListedFlats(searchedFlat)
    } else {
      if (sortedFlats.length) {
        setListNumber(sortedFlats.length)
        setListedFlats(sortedFlats)
      } else {
        setListNumber(flats.length)
        setListedFlats(flats)
      }
    }
  }, [flats, sortedFlats, searchedFlat]);

  return (
    <>
      <Filters />
      <div className="counter-keys-wrapper">
        <div className="flat-counter">
          {listNumber}
          {listNumber === 1 ? " résultat correspond à votre recherche." : " résultats correspondent à votre recherche."}
        </div>
        <Keys />
      </div>
      <div className="main-view">
        <FlatList listedFlats={listedFlats} />
        <Map listedFlats={listedFlats} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFlats }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
