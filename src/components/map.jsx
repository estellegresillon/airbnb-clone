import React from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setFlats } from "../actions";
import { selectFlat } from "../actions";

const MapView = compose(withScriptjs, withGoogleMap)(props => {
  const { markers, onClick, selectedMarker } = props;

  return (
    <GoogleMap 
      defaultZoom={12}
      defaultCenter={{ lat: 48.856614, lng: 2.352222 }}>
      {markers.map((marker, i) => {
        const onMarkerClick = onClick.bind(this, marker)
        return (
          <Marker
            key={i}
            onClick={onMarkerClick}
            position={{ lat: marker.lat, lng: marker.lng }}
          >
            {selectedMarker === marker &&
              <InfoWindow>
                <div>
                  {marker.name}
                </div>
              </InfoWindow>}
          </Marker>
        )
      })}
    </GoogleMap>
  );
});

const MapContainer = props =>{
  const { selectFlat, selectedFlat, flats } = props;

  return (
    <div className="google-map">
      <MapView
        selectedMarker={selectedFlat}
        markers={flats}
        onClick={selectFlat}
        googleMapURL={process.env.REACT_APP_GOOGLE_API_KEY}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    flats: state.flats,
    selectedFlat: state.selectedFlat
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFlats, selectFlat }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
