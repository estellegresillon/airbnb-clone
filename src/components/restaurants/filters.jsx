import React, { useState, useEffect } from 'react';
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
import { INIT_ARR_OPTIONS, INIT_TYPE_OPTIONS } from "../../constants/filter-options";
import { useWindowSize } from "../../hooks/useWindowSize";
import { filterArrByType, filterTypeByArr } from './helper';


const SearchByName = props => {
  const { 
    restaurants,
    searchRestaurant,
    centerMapWithLocation,
    toggleListingAwards,
    sortRestaurants,
    toggleMap,
    showMap,
    homeArr,
    homeType
  } = props;
  const [arr, setArr] = useState("Tous les arr.");
  const [type, setType] = useState("Tous les types");
  const [searchedRestaurant, setSearchedRestaurant] = useState(null);
  const [typeOptions, setTypeOptions] = useState(INIT_TYPE_OPTIONS);
  const [arrOptions, setArrOptions] = useState(INIT_ARR_OPTIONS);
  const windowSize = useWindowSize();

  const scrollToTop = () => {
    document.querySelector(".tab-number-0").scrollIntoView();
  };

  const handleSearchChange = (event, value) => {
    setSearchedRestaurant(value);
    setArr("Tous les arr.");
    setType("Tous les types");
    toggleListingAwards(false);

    if (value) {
      searchRestaurant([value]);
    } else {
      searchRestaurant(null);
      setRestaurants();
    }

    if (windowSize.width > 728) {
      scrollToTop();
    }
  }

  const filterList = (list, option) => {
    setSearchedRestaurant(null);
    searchRestaurant(null);
    toggleListingAwards(false);

    if (option === "type") {
      centerMapWithLocation(null);
      filterArrByType(list, arr, restaurants, setArrOptions, sortRestaurants);
    } else {
      centerMapWithLocation(arr);
      filterTypeByArr(list, type, restaurants, setTypeOptions, sortRestaurants);
    }

    if ((windowSize.width > 728 && (option === "arr" && !homeArr)) || 
      (windowSize.width > 728 && (option === "type" && !homeType))) {
      scrollToTop();
    }
  }

  const handleOptionsChange = (e, option) => {
    const selectedValue = e.value;

    if (option === "type") {
      setType(selectedValue);
    } else {
      setArr(selectedValue);
    }
    filterList(selectedValue, option);
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
    setTypeOptions(INIT_TYPE_OPTIONS);
    setArrOptions(INIT_ARR_OPTIONS);

    // set default values
    setArr("Tous les arr.");
    setType("Tous les types");

    // reset map location
    centerMapWithLocation(null);

    // show awards selection again
    toggleListingAwards(true);

    // scroll to top only after the list is re-rendered
    if (windowSize.width > 728) {
      scrollToTop();
    }
  };

  useEffect(() => {
    if (restaurants && homeArr && homeArr !== "Tous les arr.") {
      setArr(homeArr);
      filterList(homeArr, "arr");
    };

    if (restaurants && homeType && homeType !== "Tous les types") {
      setType(homeType);
      filterList(homeType, "type");
    };
  // eslint-disable-next-line
  }, [restaurants])

  return (
    <div className="filters">
      <div className="filters-left">
        <i className="fas fa-search" />
        <Autocomplete
          id="search-by-name"
          options={restaurants}
          getOptionLabel={option => `${option.name} - ${option.type}`}
          style={{ width: "300px", marginRight: "10px"}}
          value={searchedRestaurant}
          onChange={handleSearchChange}
          renderInput={params => {
            return (
              <TextField 
                {...params}
                style={{ width: "100%", marginRight: "20px", padding: "0px"}}
                value={searchedRestaurant}
                placeholder="Rechercher par nom ou type de restaurant"
                variant="outlined"
                fullWidth
              />
            )}}
        />
        <Select
          value={arr}
          options={arrOptions}
          onChange={e => handleOptionsChange(e, "arr")}
          placeholder={arr}
          isSearchable={false}
          className="filters-react-select filter-arr"
        />
        <Select
          value={type}
          options={typeOptions} 
          onChange={e => handleOptionsChange(e, "type")} 
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
              backgroundColor: showMap ? "#ea4235" : "#ff6643"
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
