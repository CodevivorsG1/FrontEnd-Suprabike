import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Markers from './Marker.js';

const Map = withScriptjs(withGoogleMap((props) => {
  
  console.log("En mapa");
  console.log(props.addresses);
  for(var x in props.addresses){
    console.log(x);        
  }
  const markers = props.addresses.map( add =>         
    <Markers      
      id={add.id}
      location={{lat: add.data.lat, lng: add.data.lng}}
    />);

    

  return (
    <GoogleMap
      defaultZoom={14}
      center={ { lat:  4.640198, lng: -74.084305 } }
    >
      {markers}
    </GoogleMap>
    );
  }
))

export default Map;