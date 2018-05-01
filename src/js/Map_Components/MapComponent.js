import React from 'react';
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from 'react-google-maps';
import axios from 'axios';


class SimpleMap extends React.Component{
    constructor(){
        super();
        this.fillMarkers = this.fillMarkers.bind(this);
        this.getGeocode = this.getGeocode.bind(this);

        this.state = {
            storesAddresses:[],
            storesMarkers:[]
        }
    }

    fillMarkers(){        
        for(var x in this.state.storesAddresses){
            let address = this.state.storesAddresses[x];
            let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address +",Bogotá&key=AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A";
            axios.get(url)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log("Fuck, we failed");
                })
        }
    }

    getGeocode(url){
        axios.get(url)
            .then((response) => {
                let data = response.data.results[0].geometry.location;
                this.state.storesAddresses.push(data);
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
            })
            .catch((error) => {
                console.log("Nothing happened");
            })
    }

    render(){

        const GoogleMapExample = withScriptjs(withGoogleMap(props => (
            <GoogleMap
              defaultCenter = { { lat: 4.639428, lng: -74.084143 } }
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
                    containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
                    mapElement={ <div style={{ height: `100%` }} /> }
                />
            </div>
        );
    }
}

export default SimpleMap;