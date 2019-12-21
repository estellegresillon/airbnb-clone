import React from "react";
import Select from "react-select";

import FlatList from "./flat-list";
import Map from "./map";

const App = () => {
  return (
    <>
      <Select />
      <div className="map-view">
        <FlatList />
        <Map />
      </div>
    </>
  );
};

export default App;
