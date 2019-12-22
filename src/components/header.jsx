import React, { useState } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { searchFlat, sortFlats } from "../actions";

const SearchByName = props => {
  const { flats, searchFlat, sortFlats } = props;
  const [arr, setArr] = useState('');
  const [type, setType] = useState('');
  const [searchedFlat, setSearchedFlat] = useState(null);

  const handleSearchChange = (event, value) => {
    setSearchedFlat(value)
    setArr('');
    setType('');

    if (value) {
      searchFlat(value);
    }
  }

  const filterByArr = (arr) => {
    setSearchedFlat(null);
    searchFlat(null);

    const sortedFlats = [...flats].filter(val => {
      if (val.arr) {
        return val.arr === arr
      } else return null;
    });

    if (type) {
      const sortFlatsByType = [...sortedFlats].filter(val => {
        if (val.type) {
          return val.type === type
        } else return null;
      });
      sortFlats(sortFlatsByType)
    } else {
      sortFlats(sortedFlats)
    }
  }

  const filterByType = (type) => {
    setSearchedFlat(null);
    searchFlat(null);

    const sortedFlats = [...flats].filter(val => {
      if (val.type) {
        return val.type === type
      } else return null;
    });

    if (arr) {
      const sortFlatsByArr = [...sortedFlats].filter(val => {
        if (val.arr) {
          return val.arr === arr
        } else return null;
      });
      sortFlats(sortFlatsByArr)
    } else {
      sortFlats(sortedFlats)
    }
  }

  const handleArrChange = e => {
    const selectedArr = e.target.value;
    setArr(selectedArr);
    filterByArr(selectedArr);
  }

  const handleTypeChange = e => {
    const selectedType = e.target.value;
    setType(selectedType);
    filterByType(selectedType);
  }

  return (
    <div className="header">
      Foodlab
      <Autocomplete
        id="search-by-name"
        options={flats}
        getOptionLabel={option => option.name}
        style={{ width: "40%", marginRight: "20px"}}
        value={searchedFlat}
        onChange={handleSearchChange}
        renderInput={params => (
          <TextField {...params} value={searchedFlat} placeholder="What are you hungry for ?" variant="outlined" fullWidth />
        )}
      />

      <FormControl style={{ width: "20%", marginRight: "20px" }}>
        <InputLabel id="category-filter-by-arr-label">Arrondissement :</InputLabel>
        <Select
          labelId="category-filter-by-arr-label"
          id="category-filter-by-arr"
          value={arr}
          onChange={handleArrChange}
        >
          {[...Array(20)].map((e, i) => <MenuItem value={i + 1} key={i + 1}>{i + 1}</MenuItem>)}
        </Select>
      </FormControl>
      
      <FormControl style={{ width: "15%", marginRight: "20px" }}>
        <InputLabel id="category-filter-by-type-label">Type :</InputLabel>
        <Select
          labelId="category-filter-by-type-label"
          id="category-filter-by-type"
          value={type}
          onChange={handleTypeChange}
        >
          <MenuItem value="Japonais">Japonais</MenuItem>
          <MenuItem value="Français">Français</MenuItem>
          <MenuItem value="Coréen">Coréen</MenuItem>
          <MenuItem value="Brunch">Brunch</MenuItem>
          <MenuItem value="Américain">Américain</MenuItem>
          <MenuItem value="Irlandais">Irlandais</MenuItem>
          <MenuItem value="Café">Café</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

const mapStateToProps = state => {
  return { flats: state.flats };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchFlat, sortFlats }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchByName);