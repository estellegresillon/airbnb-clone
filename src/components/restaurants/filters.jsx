import React, { useState } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from 'react-select';

import { 
  setRestaurants,
  searchRestaurant, 
  sortRestaurants,
  toggleMap,
  centerMapWithLocation,
  toggleListingAwards,
} from "../../actions";
import { initArrOptions, initTypeOptions } from "../../constants/filter-options";
import { useWindowSize } from "../../hooks/useWindowSize";


const SearchByName = props => {
  const { restaurants, searchRestaurant, centerMapWithLocation, toggleListingAwards, sortRestaurants, toggleMap, showMap } = props;
  const [arr, setArr] = useState("Tous les arr.");
  const [type, setType] = useState("Toutes les cuisines");
  const [searchedRestaurant, setSearchedRestaurant] = useState(null);
  const [typeOptions, setTypeOptions] = useState(initTypeOptions);
  const [arrOptions, setArrOptions] = useState(initArrOptions);
  const windowSize = useWindowSize();

  const scrollToTop = () => {
    document.querySelector(".tab-number-0").scrollIntoView();
  };

  const handleSearchChange = (event, value) => {
    setSearchedRestaurant(value);
    setArr("Tous les arr.");
    setType("Toutes les cuisines");
    toggleListingAwards(false);
    if (value) {
      // put in an array to map on it on other components
      searchRestaurant([value]);
    } else {
      searchRestaurant(null);
      setRestaurants();
    }

    if (windowSize.width > 728) {
      scrollToTop();
    }
  }

  const filterByArr = (arr) => {
    setSearchedRestaurant(null);
    searchRestaurant(null);
    centerMapWithLocation(arr);
    toggleListingAwards(false);

    // sort Restaurants according to location
    const sortedRestaurants = [...restaurants].filter(val => {
      if (val.arr) {
        return val.arr === arr;
      } else return null;
    });

    // we want to show only available cuisine type in the list
    const typeOptions = [];
    sortedRestaurants.forEach(restaurant => {
      typeOptions.push(restaurant.type);
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
      const sortRestaurantsByType = [...sortedRestaurants].filter(val => {
        if (val.type) {
          return val.type === type;
        } else return null;
      });
      sortRestaurants(sortRestaurantsByType);
    } else {
      sortRestaurants(sortedRestaurants);
    };

    if (windowSize.width > 728) {
      scrollToTop();
    }
  }

  const filterByType = (type) => {
    setSearchedRestaurant(null);
    searchRestaurant(null);
    centerMapWithLocation(null);
    toggleListingAwards(false);

    // sort Restaurants according to type
    const sortedRestaurants = [...restaurants].filter(val => {
      if (val.type) {
        return val.type === type;
      } else return null;
    });

    // we want to show only available location in the list
    const arrOptions = [];
    sortedRestaurants.forEach(restaurant => {
      arrOptions.push(restaurant.arr);
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
      const sortRestaurantsByArr = [...sortedRestaurants].filter(val => {
        if (val.arr) {
          return val.arr === arr;
        } else return null;
      });
      sortRestaurants(sortRestaurantsByArr);
    } else {
      sortRestaurants(sortedRestaurants);
    };

    if (windowSize.width > 728) {
      scrollToTop();
    }
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
    searchRestaurant(null);
    setSearchedRestaurant(null);

    // resort Restaurants by rate
    sortRestaurants([]);
    // display all Restaurants
    setRestaurants();

    // reinit filter options
    setTypeOptions(initTypeOptions);
    setArrOptions(initArrOptions);
    // set default values
    setArr("Tous les arr.");
    setType("Toutes les cuisines");

    // reset map location
    centerMapWithLocation(null);

    // show awards selection again
    toggleListingAwards(true);

    // scroll to top only after the list is re-rendered
    if (windowSize.width > 728) {
      scrollToTop();
    }
  };

  return (
    <div className="filters">
      <div className="filters-left">
        <i className="fas fa-search" />
        <Autocomplete
          id="search-by-name"
          options={restaurants}
          getOptionLabel={option => option.name}
          style={{ width: "300px", marginRight: "10px"}}
          value={searchedRestaurant}
          onChange={handleSearchChange}
          renderInput={params => (
            <TextField {...params} style={{ width: "100%", marginRight: "20px", padding: "0px"}} value={searchedRestaurant} placeholder="Rechercher un nom de restaurant..." variant="outlined" fullWidth />
          )}
        />
        <Select
          value={arr}
          options={arrOptions}
          onChange={handleArrChange}
          placeholder={arr}
          isSearchable={false}
          className="filters-react-select filter-arr"
        />
        <Select
          value={type}
          options={typeOptions} 
          onChange={handleTypeChange} 
          placeholder={type}
          isSearchable={false}
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
    restaurants: state.restaurants,
    showMap: state.showMap,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setRestaurants, searchRestaurant, sortRestaurants, toggleMap, centerMapWithLocation, toggleListingAwards }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchByName);