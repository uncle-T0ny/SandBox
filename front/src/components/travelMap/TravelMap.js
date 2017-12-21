import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';

import './TravelMap.scss';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 0, lng: 0 }}
  >
    {props.isMarkerShown && (
      <div>
        <Marker position={{ lat: 54.354366, lng: 18.645884 }} />
        <Marker position={{ lat: 50.440013, lng: 30.528565 }} />
        <Marker position={{ lat: 43.349877, lng: 42.445394 }} />
      </div>
      )}
  </GoogleMap>
))

@connect(mapStateToProps)
class TravelMap extends PureComponent {

  render() {
    return (
      <div className="TravelMap">
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA52pneVWNj8OkUtFx6D7I5i1KDrGNrNnI&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '800px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
};

export { TravelMap };