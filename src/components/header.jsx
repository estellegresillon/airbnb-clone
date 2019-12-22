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
  const [sort, setSort] = useState(null);
  const [arr, setArr] = useState(null);
  const [type, setType] = useState(null);

  const onChange = (event, values) => {
    searchFlat(values);
  }

  const filterByRate = (order) => {
    const sortedFlats = [...flats].sort((a, b) => {
      if (a.rate < b.rate) return order === "asc" ? -1 : 1;
      if (a.rate > b.rate) return order === "asc" ? 1 : -1;
      return 0;
    });

    sortFlats(sortedFlats);
  }

  const filterByVotes = (order) => {
    const sortedFlats = [...flats].sort((a, b) => {
      if (a.votes < b.votes) return order === "asc" ? -1 : 1;
      if (a.votes > b.votes) return order === "asc" ? 1 : -1;
      return 0;
    });

    sortFlats(sortedFlats);
  }

  const filterByBudget = (order) => {
    const sortedFlats = [...flats].sort((a, b) => {
      if (a.price_digit < b.price_digit) return order === "asc" ? -1 : 1;
      if (a.price_digit > b.price_digit) return order === "asc" ? 1 : -1;
      return 0;
    });

    sortFlats(sortedFlats);
  }

  const filterByArr = (arr) => {
    const sortedFlats = [...flats].filter(val => {
      if (val.arr) {
        return val.arr === arr
      }
    });

    sortFlats(sortedFlats)
  }

  const filterByType = (type) => {
    const sortedFlats = [...flats].filter(val => {
      if (val.type) {
        return val.type === type
      }
    });

    sortFlats(sortedFlats)
  }

  const handleSortChange = e => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
    
    switch (selectedSort) {
      case "rate-asc":
        filterByRate("asc");
        break;
      case "rate-desc":
        filterByRate("desc");
        break;
      case "votes-asc":
        filterByVotes("asc");
        break;
      case "votes-desc":
        filterByVotes("desc");
        break;
      case "budget-asc":
        filterByBudget("asc");
        break;
      case "budget-desc":
        filterByBudget("desc");
        break;
      default:
        return;
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
        onChange={onChange}
        renderInput={params => (
          <TextField {...params} placeholder="What are you hungry for ?" variant="outlined" fullWidth />
        )}
      />
      <FormControl style={{ width: "15%", marginRight: "20px" }}>
        <InputLabel id="category-sort-by-label">Trier par :</InputLabel>
        <Select
          labelId="category-sort-by-label"
          id="category-sort-by"
          value={sort}
          onChange={handleSortChange}
        >
          <MenuItem value="rate-asc">Note (croissante)</MenuItem>
          <MenuItem value="rate-desc">Note (décroissante)</MenuItem>
          <MenuItem value="votes-asc">Nombres d'avis (croissants)</MenuItem>
          <MenuItem value="votes-desc">Nombres d'avis (décroissants)</MenuItem>
          <MenuItem value="budget-asc">Budget (croissant)</MenuItem>
          <MenuItem value="budget-desc">Budget (décroissant)</MenuItem>
        </Select>
      </FormControl>
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
  return { flats: state.flats};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchFlat, sortFlats }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchByName);