import React, { useState } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from 'react-select';

import { setFlats, searchFlat, sortFlats, toggleMap } from "../../actions";

const typeOptions = [
  { label: "Japonais", value: "Japonais"},
  { label: "Français", value: "Français"},
  { label: "Coréen", value: "Coréen"},
  { label: "Américain", value: "Américain"},
  { label: "Brunch", value: "Brunch"},
  { label: "Irlandais", value: "Irlandais"},
  { label: "Café", value: "Café"},
]

const arrOptions = [...Array(20)].map((e, i) => (
    { label: `${i + 1}`, value: `${i + 1}` }
  ));

const SearchByName = props => {
  const { flats, searchFlat, sortFlats, toggleMap, showMap } = props;
  const [arr, setArr] = useState("");
  const [type, setType] = useState("");
  const [searchedFlat, setSearchedFlat] = useState(null);

  const handleSearchChange = (event, value) => {
    setSearchedFlat(value)
    setArr("");
    setType("");
    if (value) {
      searchFlat(value);
    } else {
      searchFlat(null)
      setFlats()
    }
  }

  const filterByArr = (arr) => {
    setSearchedFlat(null);
    searchFlat(null);

    const sortedFlats = [...flats].filter(val => {
      if (val.arr) {
        return val.arr.toString() === arr;
      } else return null;
    });

    if (type) {
      const sortFlatsByType = [...sortedFlats].filter(val => {
        if (val.type) {
          return val.type.toString() === type;
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

    const sortedFlats = [...flats].filter(val => {
      if (val.type) {
        return val.type.toString() === type
      } else return null;
    });

    if (arr) {
      const sortFlatsByArr = [...sortedFlats].filter(val => {
        if (val.arr) {
          return val.arr.toString()=== arr;
        } else return null;
      });
      sortFlats(sortFlatsByArr);
    } else {
      sortFlats(sortedFlats);
    };
  }

  const handleArrChange = e => {
    const selectedArr = e.value;
    setArr(selectedArr);
    filterByArr(selectedArr);
  }

  const handleTypeChange = e => {
    const selectedType = e.value;
    setType(selectedType);
    filterByType(selectedType);
  }

  const handleToggleMap = () => {
    toggleMap(showMap)
  }

  const reinitializeFilters = () => {
    searchFlat(null);
    setSearchedFlat(null);

    sortFlats([]);
    setArr("")
    setType("")
  }

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
          placeholder={arr || "Filtrer par arr."}
          className="filters-react-select filter-arr"
        />
        <Select
          value={type}
          options={typeOptions} 
          onChange={handleTypeChange} 
          placeholder={type || "Filtrer par type"}
          className="filters-react-select filter-type"
        />
      </div>
      <div className="filters-right">
        <button className="button-filter-reinitialize" onClick={reinitializeFilters}>Réinitialiser</button>
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
  return bindActionCreators({ setFlats, searchFlat, sortFlats, toggleMap }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchByName);