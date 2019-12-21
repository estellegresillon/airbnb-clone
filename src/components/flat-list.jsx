import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Flat from "./flat";
import { setFlats } from "../actions";

class FlatList extends React.Component {
  componentWillMount() {
    const { setFlats } = this.props;
    setFlats();
  }

  render() {
    const { flats } = this.props;
    
    return (
      <div className="flat-list">
        {flats.map((flat, i) => <Flat key={i} flat={flat} tabIndex={i} />)}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFlats }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
