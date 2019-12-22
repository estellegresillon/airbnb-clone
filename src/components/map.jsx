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
import googleMapCustomSkin from "../constants/google_map_skin";

const MapView = compose(withScriptjs, withGoogleMap)(props => {
  const { markers, onClick, selectedMarker } = props;

  return (
    <GoogleMap 
      defaultZoom={12}
      defaultOptions={{
        styles: googleMapCustomSkin,
      }}
      defaultCenter={{ lat: 48.856614, lng: 2.352222 }}>
      {markers.map(marker => {
        const onMarkerClick = onClick.bind(this, marker)
        return (
          <Marker
            key={marker.id}
            onClick={onMarkerClick}
            position={{ lat: marker.lat, lng: marker.lng }}
          >
            {selectedMarker === marker &&
              <InfoWindow style={{ padding: 0 }}>
                <div onClick={() => console.log(marker.id)} className="marker-info-window">
                  <img src={marker.imageUrl} alt="flat-preview" />
                  <div className="marker-flat-name">{marker.name}</div>
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

  const onClick = marker => {
    selectFlat(marker)
  }

  return (
    <div className="google-map">
      <MapView
        selectedMarker={selectedFlat}
        markers={flats}
        onClick={onClick}
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
    selectedFlat: state.selectedFlat,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFlats, selectFlat }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
