import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 60px)"
        }}>
        <h1>This Fucking Map</h1>
        <Map style={{}}
            google={this.props.google}
            zoom={14}
            initialCenter={{
                lat: 4.649737,
                lng: -74.101081
            }}
        >
          <Marker
            onClick={this.onMarkerClick}
            position={{lat: 4.649737,lng: -74.101081}}            
            name={"Current location"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A"
})(MapContainer);
