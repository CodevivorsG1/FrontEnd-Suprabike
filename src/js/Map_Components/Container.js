import React from 'react';
import axios from 'axios';
import Map from './Map.js';
import store from '../store';
import "../../css/loader.css";

export default class Container extends React.Component {

  state = {
    addresses:[],
    loaded: false
  }

  getGeocode = (url, num, aux) => {
    axios.get(url)
        .then((response) => {
            //console.log(response);
            let data = response.data.results[0].geometry.location;
            this.state.addresses.push({...aux, data: data, id: num});            
            //console.log(this.state.storesMarkers);
        })
        .catch((error) => {
            console.log("No data found!");
        })
  }

  componentWillMount(){
    axios.get(store.getState().globalUrl + 'stores/',
    {
      headers:{
        'X-User-Token': store.getState().token,
        'X-User-Email': store.getState().userEmail
      }
    }
    )
        .then((response) => {
            console.log(response);
            for(var x in response.data){    // Obtiene todas las direcciones del pedido
                let record = response.data[x]
                let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + record.address_store +",Bogotá&key=AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A";                    
                this.getGeocode(url, x, {name: record.name_store, phone: record.phonenum_store});
            }
            this.setState({loaded:true})
            console.log(this.state.addresses);
        })
        .catch((error) => {
            console.log("Nothing happened");
        })
  }
  
  render() {
    if(this.state.loaded){
      return (
        <Map
          addresses = {this.state.addresses}
          googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A&v=3.exp&libraries=geometry,drawing,places'}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}          
        />
      );
    } else {
      return(
			
      <div className="">
        <div class="">
          <i class="fa fa-bicycle fa-5x bici"></i>
          <div class="back">
            <i class="fa fa-cog fa-3x spin"></i>
          </div>
          <div class="front">
            <i class="fa fa-cog fa-3x spin"></i>
          </div>
        </div>
      </div>
    
			);
    }
  }
}