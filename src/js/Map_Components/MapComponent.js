import React from 'react';
import {withGoogleMap, withScriptjs, GoogleMap} from 'react-google-maps';


class SimpleMap extends React.Component{
    render(){

        const GoogleMapExample = withScriptjs(withGoogleMap(props => (
            <GoogleMap
              defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
              defaultZoom = { 13 }
            >
            </GoogleMap>
         )));

        return(
            <div>
                <h1>This is a map!</h1>
                <GoogleMapExample
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
                    mapElement={ <div style={{ height: `100%` }} /> }
                />
            </div>
        );
    }
}

export default SimpleMap;