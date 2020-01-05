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

import { selectRestaurant } from "../../actions";
import GOOGLE_MAP_CUSTOM_SKIN from "../../constants/google-map-skin";
import { setCoordinatesWithLocation } from "../../constants/locations-coordinates";

const MapContainer = props =>{
  const { selectRestaurant, selectedRestaurant, listedRestaurants, showMap, selectedLocation } = props;

  const onClick = marker => {
    selectRestaurant(marker);
  };

  return showMap ? (
    <div className="google-map">
      <MapView
        selectedMarker={selectedRestaurant}
        selectedLocation={selectedLocation}
        markers={listedRestaurants}
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
  const [newCenter, setNewCenter] = useState({ lat: 48.863, lng: 2.34 });

  // center on pin if only one restaurant is selected, else center to whole paris area
  useEffect(() => {
    if (markers.length === 1) {
      setNewCenter({ lat: markers[0].lat, lng: markers[0].lng });
    } else {
      if (selectedLocation) {
        setCoordinatesWithLocation(selectedLocation, setNewCenter);
      } else {
        setNewCenter({ lat: 48.863, lng: 2.34 });
      };
    };
  }, [markers, selectedLocation]);

  return (
    <GoogleMap 
      defaultZoom={13}
      defaultOptions={{ styles: GOOGLE_MAP_CUSTOM_SKIN }}
      center={newCenter}>
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
                <Link to={{pathname: `/restaurants/${marker.id}`, restaurant: marker}}>
                  <div className="marker-info-window">
                    <img src={marker.imageUrl} alt="restaurant-preview" />
                    <div className="marker-header">
                      <i className="fas fa-star" />
                      <span className="marker-rating">{marker.rate} ({marker.votes}+)</span>
                    </div>
                    <div className="marker-restaurant-name">{marker.name}</div>
                    <div className="marker-restaurant-type">{marker.type}</div>
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
    selectedRestaurant: state.selectedRestaurant,
    showMap: state.showMap,
    selectedLocation: state.selectedLocation,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectRestaurant }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
