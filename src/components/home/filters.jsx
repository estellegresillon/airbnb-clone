import React, { useState } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from 'react-select';

import { 
  setFlats,
  searchFlat, 
  sortFlats,
  toggleMap,
  centerMapWithLocation,
} from "../../actions";
import { initArrOptions, initTypeOptions } from "../../constants/filter_options";


const SearchByName = props => {
  const { flats, searchFlat, centerMapWithLocation, sortFlats, toggleMap, showMap } = props;
  const [arr, setArr] = useState("Tous les arr.");
  const [type, setType] = useState("Toutes les cuisines");
  const [searchedFlat, setSearchedFlat] = useState(null);
  const [typeOptions, setTypeOptions] = useState(initTypeOptions);
  const [arrOptions, setArrOptions] = useState(initArrOptions);

  const handleSearchChange = (event, value) => {
    setSearchedFlat(value)
    setArr("Tous les arr.");
    setType("Toutes les cuisines");
    if (value) {
      // put in an array to map on it on other components
      searchFlat([value]);
    } else {
      searchFlat(null)
      setFlats()
    }
  }

  const filterByArr = (arr) => {
    setSearchedFlat(null);
    searchFlat(null);
    centerMapWithLocation(arr);

    // sort flats according to location
    const sortedFlats = [...flats].filter(val => {
      if (val.arr) {
        return val.arr === arr;
      } else return null;
    });

    // we want to show only available cuisine type in the list
    const typeOptions = [];
    sortedFlats.forEach(flat => {
      typeOptions.push(flat.type);
    });
    const uniqueItems = [...new Set(typeOptions)]
    uniqueItems.sort();
    const newTypeOptions = [];
    uniqueItems.forEach(itm => {
      newTypeOptions.push({ label: itm, value: itm });
    });
    setTypeOptions(newTypeOptions);

    // filter only the available locations
    if (type !== "Toutes les cuisines") {
      const sortFlatsByType = [...sortedFlats].filter(val => {
        if (val.type) {
          return val.type === type;
        } else return null;
      });
      sortFlats(sortFlatsByType);
    } else {
      sortFlats(sortedFlats);
    };
  }

  const filterByType = (type) => {
    setSearchedFlat(null);
    searchFlat(null);
    centerMapWithLocation(null);

    // sort flats according to type
    const sortedFlats = [...flats].filter(val => {
      if (val.type) {
        return val.type === type;
      } else return null;
    });

    // we want to show only available location in the list
    const arrOptions = [];
    sortedFlats.forEach(flat => {
      arrOptions.push(flat.arr);
    });
    const uniqueItems = [...new Set(arrOptions)];
    uniqueItems.sort((a, b) => a - b);
    const newArrOptions = [];
    uniqueItems.forEach(itm => {
      newArrOptions.push({ label: itm, value: itm });
    });
    setArrOptions(newArrOptions);

    // filter only the available cuisine types
    if (arr !== "Tous les arr.") {
      const sortFlatsByArr = [...sortedFlats].filter(val => {
        if (val.arr) {
          return val.arr === arr;
        } else return null;
      });
      sortFlats(sortFlatsByArr);
    } else {
      sortFlats(sortedFlats);
    };
  };

  const handleArrChange = e => {
    const selectedArr = e.value;
    setArr(selectedArr);
    filterByArr(selectedArr);
  };

  const handleTypeChange = e => {
    const selectedType = e.value;
    setType(selectedType);
    filterByType(selectedType);
  };

  const handleToggleMap = () => {
    toggleMap(showMap)
  };

  const reinitializeFilters = () => {
    // empty autocomplete input
    searchFlat(null);
    setSearchedFlat(null);

    // resort flats by rate
    sortFlats([]);
    // display all flats
    setFlats();

    // reinit filter options
    setTypeOptions(initTypeOptions);
    setArrOptions(initArrOptions);
    // set default values
    setArr("Tous les arr.");
    setType("Toutes les cuisines");

    // reset map location
    centerMapWithLocation(null);
  };

  return (
    <div className="filters">
      <div className="filters-left">
        <Autocomplete
          id="search-by-name"
          options={flats}
          getOptionLabel={option => option.name}
          style={{ width: "300px", marginRight: "10px"}}
          value={searchedFlat}
          onChange={handleSearchChange}
          renderInput={params => (
            <TextField {...params} style={{ width: "100%", marginRight: "20px", padding: "0px"}} value={searchedFlat} placeholder="Rechercher un nom de restaurant..." variant="outlined" fullWidth />
          )}
        />
        <Select
          value={arr}
          options={arrOptions}
          onChange={handleArrChange}
          placeholder={arr}
          className="filters-react-select filter-arr"
        />
        <Select
          value={type}
          options={typeOptions} 
          onChange={handleTypeChange} 
          placeholder={type}
          className="filters-react-select filter-type"
        />
        <button className="button-filter-reinitialize" onClick={reinitializeFilters}>Réinitialiser</button>
      </div>

      <div className="filters-right">
        <div className="button-toggle-map" onClick={handleToggleMap}>
          {showMap ? "Cacher la carte" : "Afficher la carte"}
          <div 
            style={{ 
              justifyContent: showMap ? "flex-end" : "flex-start",
              // backgroundColor: showMap ? "#c1c1c1" : "#e8e8e8"
              backgroundColor: showMap ? "#ea4235" : "#ffb0be"
            }}
            className="switch-toggle-map">
            <div className="toggle-circle" />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { 
    flats: state.flats,
    showMap: state.showMap,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFlats, searchFlat, sortFlats, toggleMap, centerMapWithLocation }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchByName);