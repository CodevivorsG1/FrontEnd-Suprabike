import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Markers from './Marker.js';

const Map = withScriptjs(withGoogleMap((props) => {
    
  const markers = props.addresses.map( add =>         
    <Markers      
      key={add.id}
      id={add.id}
      location={{lat: add.data.lat, lng: add.data.lng}}      
    />);

  return (
    <GoogleMap
      defaultZoom={12}
      center={ { lat:  4.666778, lng: -74.091332 } }
    >    
      {markers}
    </GoogleMap>
    );
  }
))

export default Map;