import React from "react";

import FlatList from "./flat-list";
import Map from "./map";
import Header from "./header";

const App = () => {
  return (
    <>
      <Header />
      <div className="map-view">
        <FlatList />
        <Map />
      </div>
    </>
  );
};

export default App;
