import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import axios from 'axios';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.getGeocode = this.getGeocode.bind(this);


    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      storesAddresses: []
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      storesAddresses: [],
      storesMarkers: []
    });
  }

  getGeocode(url){
    axios.get(url)
        .then((response) => {
            console.log(response.data.results);
            let data = response.data.results[0].geometry.location;
            this.state.storesAddresses.push(data);
            //this.state.storesMarkers.push(<Marker position={data}/>)
            //console.log(this.state.storesMarkers);
        })
        .catch((error) => {
            console.log("No data found!");
        })

  } 

  componentWillMount(){
    axios.get("http://localhost:4000/stores")
        .then((response) => {
            //console.log(response);
            for(var x in response.data){    // Obtiene todas las direcciones del pedido
                let record = response.data[x]
                let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + record.address_store +",Bogotá&key=AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A";                    
                this.getGeocode(url);
            }
            console.log(this.state.storesAddresses);
        })
        .catch((error) => {
            console.log("Nothing happened");
        })
}

 /* loadMarkers = ({list}) => {
    if(this.props.google){
      return(
        list.map(item =>
          <Marker position={item}/>
        )
      )
    }
  }*/

  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }
    console.log("Ready? ");
    
    return (
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 60px)"
        }}>
        
        <Map style={{}}
            google={this.props.google}
            zoom={14}
            initialCenter={{
                lat: 4.649737,
                lng: -74.101081
            }}
        >
          {
            this.state.storesAddresses.map((item, i) => {
              console.log(i)
              return(
                <Marker key={i} position={item}/>
              )
            })
          }     
          <Marker position={this.state.storesAddresses[6]}/>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A"
})(MapContainer);
