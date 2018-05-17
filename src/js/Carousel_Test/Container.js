import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import store from '../store';
import Carousel from './Carousel.js';
import Bicycle from './Bicycle';
import AppHeaderComponent from '../AppHeaderComponent';
import AppNavigationComponent from '../AppNavigationComponent';
import '../../css/bicycle-menu.css';

export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            loadedTech: false,
            techs: [],
            loadedSillas: false,
            sillas: [],
            loadedManubrios: false,
            manubrios: [],
            loadedForks: false,
            forks:[],
            loadedTires: false,
            tires: [],
            loadedWheels: false,
            wheels: [],
            loadedFrames: false,
            frames: []
        }

        this.data = {
            type:'',
            data: []
        }
    }
    chooseLoad = (part) =>{
        switch (part){
            case "sillas":
                return this.loadSillas();
            case "tecnicos":
                return this.loadTech();
            case "manubrios":
                return this.loadManubrio();
            case "forks":
                return this.loadFork();
            case "tires":
                return this.loadTires();
            case "wheels":
                return this.loadWheels();
            case "frames":
                return this.loadFrame();
            default:
                //nothing
            
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
    loadManubrio = () =>{
        if(!this.state.loadedManubrios) {
            axios.get(store.getState().globalUrl + '/components/get_handlebar_to_urban')
                .then((response) => {
                    for(var x in response.data){
                        this.state.manubrios.push(response.data[x])
                    }
                    this.state.manubrios.length === 0 ? swal("No hay manubrios en el momento"):  console.log(this.state);
                    this.data = {
                        type: 'manubrio',
                        data: this.state.manubrios
                    }
                    this.setState({loadedManubrios: true});
                })
                .catch((error) => {
                    swal("Error", "Error al obtener datos", "error")
                    console.log("fuck")                    
                })
        } else {
            this.data = {
                type: 'manubrio',
                data: this.state.manubrios
            }
            this.setState({loadedManubrios: true});
        }
    }
    loadFrame = () =>{
        if(!this.state.loadedFrames) {
            axios.get(store.getState().globalUrl + '/components/get_frame_size_to_urban_xs')
                .then((response) => {
                    for(var x in response.data){
                        this.state.frames.push(response.data[x])
                    }								
                    console.log(this.state);
                    this.data = {
                        type: 'frames',
                        data: this.state.frames
                    }
                    this.setState({loadedFrames: true});
                })
                .catch((error) => {
                    swal("Error", "Error al obtener datos", "error")
                    console.log("fuck")                    
                })
        } else {
            this.data = {
                type: 'frames',
                data: this.state.frames
            }
            this.setState({loadedWheels: true});
        }                      
    }
    loadWheels = () => {
        if(!this.state.loadedWheels) {
            axios.get(store.getState().globalUrl + '/components/get_wheel_to_urban')
                .then((response) => {
                    for(var x in response.data){
                        this.state.wheels.push(response.data[x])
                    }								
                    console.log(this.state);
                    this.data = {
                        type: 'wheels',
                        data: this.state.wheels
                    }
                    this.setState({loadedWheels: true});
                })
                .catch((error) => {
                    swal("Error", "Error al obtener datos", "error")
                    console.log("fuck")                    
                })
        } else {
            this.data = {
                type: 'wheels',
                data: this.state.wheels
            }
            this.setState({loadedWheels: true});
        }              
    }
    loadFork = () =>{
        if(!this.state.loadedForks) {
            axios.get(store.getState().globalUrl + '/components/get_fork_to_urban')
                .then((response) => {
                    for(var x in response.data){
                        this.state.forks.push(response.data[x])
                    }								
                    console.log(this.state);
                    this.data = {
                        type: 'forks',
                        data: this.state.forks
                    }
                    this.setState({loadedForks: true});
                })
                .catch((error) => {
                    swal("Error", "Error al obtener datos", "error")
                    console.log("fuck")                    
                })
        } else {
            this.data = {
                type: 'forks',
                data: this.state.forks
            }
            this.setState({loadedForks: true});
        }        
    }
    loadTires = () =>{
        if(!this.state.loadedTires) {
            axios.get(store.getState().globalUrl + '/components/get_tire_to_urban')
                .then((response) => {
                    for(var x in response.data){
                        this.state.tires.push(response.data[x])
                    }								
                    console.log(this.state);
                    this.data = {
                        type: 'tires',
                        data: this.state.tires
                    }
                    this.setState({loadedTires: true});
                })
                .catch((error) => {
                    swal("Error", "Error al obtener datos", "error")
                    console.log("fuck")                    
                })
        } else {
            this.data = {
                type: 'tires',
                data: this.state.tires
            }
            this.setState({loadedTires: true});
        }            
    }
    loadSillas = () => {
        if(!this.state.loadedSillas) {
            axios.get(store.getState().globalUrl + '/components/get_seats/')
                .then((response) => {
                    for(var x in response.data){
                        this.state.sillas.push(response.data[x])
                    }								
                    console.log(this.state);
                    this.data = {
                        type: 'sillas',
                        data: this.state.sillas
                    }
                    this.setState({loadedSillas: true});
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
            <div>
            <AppHeaderComponent/>
            
          <div className="container-fluid">
            {/*<button onClick={() => this.loadSillas()}>Sillas</button>
            <button onClick={() => this.loadTech()}>Técnicos</button>*/}
            
            <div className="row menu-navigation">
            <AppNavigationComponent className=""/>
            <Bicycle loadChooser={this.chooseLoad}/>
            </div>
            <div className="row">
            <Carousel data = {this.data}/>
            </div>
          </div>  
          </div>
        );
    }
}