import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Markers from './Marker.js';

const Map = withScriptjs(withGoogleMap((props) => {
  
  console.log("En mapa");
  console.log(props.addresses);
  for(var x in props.addresses){
    console.log(props.addresses[x].id);        
  }
  const markers = props.addresses.map( add =>         
    <Markers      
      id={add.id}
      location={{lat: add.data.lat, lng: add.data.lng}}
      activeMarker={null}      
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