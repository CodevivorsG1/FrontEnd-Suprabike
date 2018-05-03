import React from 'react';
import axios from 'axios';
import Map from './Map.js';

export default class Container extends React.Component {

  state = {
    addresses:[]
  }

  getGeocode = (url, num) => {
    axios.get(url)
        .then((response) => {
            //console.log(response);
            let data = response.data.results[0].geometry.location;
            this.state.addresses.push({data: data, id: num});            
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
                this.getGeocode(url, x);
            }
            //console.log(this.state.addresses);
        })
        .catch((error) => {
            console.log("Nothing happened");
        })
  }

  render() {
    return (
      <Map
        addresses = {this.state.addresses}
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A&v=3.exp&libraries=geometry,drawing,places'}
        loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}