import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import store from '../store';
import Carousel from './Carousel.js';

export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            loadedTech: false,
            techs: [],
            loadSillas: false,
            sillas: []
        }

        this.data = {
            type:'',
            data: []
        }
    }

    loadTech() {
        if(!this.state.loadedTech) {
            axios.get(store.getState().globalUrl + 'technicians/')
                .then((response) => {
                    for(var x in response.data){
                        this.state.techs.push(response.data[x])
                    }								
                    console.log(this.state);
                    this.data = {
                        type: 'tech',
                        data: this.state.techs
                    }
                    this.setState({loadedTech: true});
                })
                .catch((error) => {
                    swal("Error", "Error al obtener datos", "error")
                    console.log("fuck")                    
                })
        } else {
            this.data = {
                type: 'tech',
                data: this.state.techs
            }
            this.setState({loadedTech: true});
        }
    }

    loadSillas() {
        if(!this.state.loadedSillas) {
            axios.get(store.getState().globalUrl + 'get_seats/')
                .then((response) => {
                    for(var x in response.data){
                        this.state.sillas.push(response.data[x])
                    }								
                    console.log(this.state);
                    this.data = {
                        type: 'sillas',
                        data: this.state.sillas
                    }
                    this.setState({loadedTech: true});
                })
                .catch((error) => {
                    swal("Error", "Error al obtener datos", "error")
                    console.log("fuck")                    
                })
        } else {
            this.data = {
                type: 'sillas',
                data: this.state.sillas
            }
            this.setState({loadedSillas: true});
        }
    }

    render() {
        return(
          <div className="container">
            <button onClick={() => this.loadSillas()}>Sillas</button>
            <button onClick={() => this.loadTech()}>Técnicos</button>
            <Carousel data = {this.data}/>
          </div>  
        );
    }
}