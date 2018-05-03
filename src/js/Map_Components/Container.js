import React from 'react';
import axios from 'axios';
import {GoogleApiWrapper} from 'google-maps-react';
import { Route } from 'react-router-dom';
import Map from './Map.js';

export class MapContainer extends React.Component {

    state = {
      addresses: []
    }

    getGeocode = (url) => {
      axios.get(url)
          .then((response) => {
              let data = response.data.results[0].geometry.location;
              this.state.addresses.push(data);              
              //console.log(this.state.storesMarkers);
          })
          .catch((error) => {
              console.log("No data found!");
          })  
    };

    componentDidMount(){
      axios.get("http://localhost:4000/stores")
        .then((response) => {
            //console.log(response);
            for(var x in response.data){    // Obtiene todas las direcciones del pedido
                let record = response.data[x]
                let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + record.address_store +",Bogotá&key=AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A";                    
                this.getGeocode(url);
            }
            console.log(this.state.addresses);
        })
        .catch((error) => {
            console.log("Nothing happened");
        })
    }

    render() {      
      return (
        <div className="MapContainer">
          <div className="wrapper">
            <Route path='/map' render={(props) => < Map google={this.props.google} addresses={this.state.addresses} {...props}/>} />
          </div>
        </div>
      );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A'
})(MapContainer)