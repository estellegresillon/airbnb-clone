import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"

import { selectFlat } from "../../actions";
import googleMapCustomSkin from "../../constants/google_map_skin";
import { setCoordinatesWithLocation } from "../../constants/locations_coordinates";

const MapContainer = props =>{
  const { selectFlat, selectedFlat, listedFlats, showMap, selectedLocation } = props;

  const onClick = marker => {
    selectFlat(marker);
  };

  return showMap ? (
    <div className="google-map">
      <MapView
        selectedMarker={selectedFlat}
        selectedLocation={selectedLocation}
        markers={listedFlats}
        onClick={onClick}
        googleMapURL={process.env.REACT_APP_GOOGLE_API_KEY}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  ) : null;
};

const MapView = compose(withScriptjs, withGoogleMap)(props => {
  const { markers, onClick, selectedMarker, selectedLocation } = props;
  const [newCenter, setNewCenter] = useState({ lat: 48.868614, lng: 2.362222 });

  // center on pin if only one flat is selected, else center to whole paris area
  useEffect(() => {
    if (markers.length === 1) {
      setNewCenter({ lat: markers[0].lat, lng: markers[0].lng });
    } else {
      if (selectedLocation) {
        setCoordinatesWithLocation(selectedLocation, setNewCenter);
      } else {
        setNewCenter({ lat: 48.868614, lng: 2.362222 });
      };
    };
  }, [markers, selectedLocation]);

  return (
    <GoogleMap 
      defaultZoom={14}
      defaultOptions={{ styles: googleMapCustomSkin }}
      center={newCenter}
      defaultCenter={{ lat: 48.868614, lng: 2.362222 }}>
      {markers.map(marker => {
        const onMarkerClick = onClick.bind(this, marker);
        return (
          <Marker
            key={marker.id}
            onClick={onMarkerClick}
            position={{ lat: marker.lat, lng: marker.lng }}
          >
            {selectedMarker === marker &&
              <InfoWindow style={{ padding: 0 }}>
                <Link to={{pathname: `/restaurants/${marker.id}`, flat: marker}} target="_blank">
                  <div className="marker-info-window">
                    <img src={marker.imageUrl} alt="flat-preview" />
                    <div className="marker-header">
                      <i className="fas fa-star" />
                      <span className="marker-rating">{marker.rate} ({marker.votes}+)</span>
                    </div>
                    <div className="marker-flat-name">{marker.name}</div>
                    <div className="marker-flat-type">{marker.type}</div>
                  </div>
                </Link>
              </InfoWindow>}
          </Marker>
        )
      })}
    </GoogleMap>
  );
});

const mapStateToProps = state => {
  return {
    selectedFlat: state.selectedFlat,
    showMap: state.showMap,
    selectedLocation: state.selectedLocation,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectFlat }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
