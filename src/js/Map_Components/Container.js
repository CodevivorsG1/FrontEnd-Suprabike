import React from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

    render() {      
    return (
      <div
        style={{
          position: "relative",
          height: "500px",
          width: "100%"
        }}
      >
        < Map google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 4.649737,
          lng: -74.101081
          }}
        >

          < Marker onClick={this.onMarkerClick}
                  name={'Current location'} />       
        </ Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A'
})(MapContainer)