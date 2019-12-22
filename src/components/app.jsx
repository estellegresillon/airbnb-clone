import React from "react";

import FlatList from "./flat-list";
import Map from "./map";
import Header from "./header/header";
import Filters from "./header/filters";

const App = () => {
  return (
    <>
      <Header />
      <Filters />
      <div className="main-view">
        <FlatList />
        <Map />
      </div>
    </>
  );
};

export default App;
