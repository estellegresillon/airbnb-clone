import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Flat from "./flat";
import { setFlats } from "../actions";

const FlatList = props => {
  const { setFlats, flats } = props;

  useEffect(() => { setFlats(); }, [setFlats]);
  
  return (
    <div className="flat-list">
      {flats.map((flat, i) => <Flat key={flat.id} flat={flat} tabIndex={i} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return { flats: state.flats };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFlats }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
