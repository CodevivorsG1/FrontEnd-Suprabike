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
            tech: [],
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

    componentDidMount() {
        this.setState({
            ...this.state,
            size: this.props.location.state.size,
            type: this.props.location.state.type
        });
    }

    chooseLoad = (part) =>{
        switch (part){
            case "sillas":
                console.log("sillas")
                return this.loadSillas();
            case "tecnicos":
                console.log("tecnicos")
                return this.loadTech();
            case "manubrios":
                console.log("manubrios")
                return this.loadManubrio();
            case "forks":
                console.log("forks")
                return this.loadFork();
            case "tires":
                console.log("tires")
                return this.loadTires();
            case "wheels":
                console.log("wheels")
                return this.loadWheels();
            case "frames":
                console.log("frames")
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
                        this.state.tech.push(response.data[x])
                    }								
                    this.state.tech.length === 0 ? swal("No hay tecnicos en el momento"):  console.log(this.state);
                    this.data = {
                        type: 'tech',
                        data: this.state.tech
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
                data: this.state.tech
            }
            this.setState({loadedTech: true});
        }
    }
    loadManubrio = () =>{
        if(!this.state.loadedManubrios) {
            var path = 'components/get_handlebar'
            console.log(this.state)
            switch(this.state.type) {
                case "mountain":
                     path += '_to_mountain/';
                     break;
                case "road":
                     path += '_to_road/';
                     break;
                case "urban":
                     path += '_to_urban/';
                     break;
                case "bmx":
                     path += '_to_bmx/';
                     break;
                default:
            }
            console.log(path)
            axios.get(store.getState().globalUrl + path)
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
            var path = 'components/get_frame_size'
            console.log(this.state)
            switch(this.state.type) {
                case "mountain":
                     path += '_to_mountain_' + this.state.size + '/';
                     break;
                case "road":
                     path += '_to_road_' + this.state.size + '/';
                     break;
                case "urban":
                     path += '_to_urban_' + this.state.size + '/';
                     break;                
                default:
            }
            console.log(path)
            axios.get(store.getState().globalUrl + '/components/get_frame_size_to_urban_xs')
                .then((response) => {
                    for(var x in response.data){
                        this.state.frames.push(response.data[x])
                    }								
                    this.state.frames.length === 0 ? swal("No hay marcos en el momento"):  console.log(this.state);
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
            var path = 'components/get_wheel'
            console.log(this.state)
            switch(this.state.type) {
                case "mountain":
                     path += '_to_mountain/';
                     break;
                case "road":
                     path += '_to_road/';
                     break;
                case "urban":
                     path += '_to_urban/';
                     break;
                case "bmx":
                     path += '_to_bmx/';
                     break;
                default:
            }
            console.log(path)
            axios.get(store.getState().globalUrl + path)
                .then((response) => {
                    for(var x in response.data){
                        this.state.wheels.push(response.data[x])
                    }								
                    this.state.wheels.length === 0 ? swal("No hay llantas en el momento"):  console.log(this.state);
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
            var path = 'components/get_fork'
            console.log(this.state)
            switch(this.state.type) {
                case "mountain":
                     path += '_to_mountain/';
                     break;
                case "road":
                     path += '_to_road/';
                     break;
                case "urban":
                     path += '_to_urban/';
                     break;
                case "bmx":
                     path += '_to_bmx/';
                     break;
                default:
            }
            console.log(path)
            axios.get(store.getState().globalUrl + path)
                .then((response) => {
                    for(var x in response.data){
                        this.state.forks.push(response.data[x])
                    }								
                    this.state.forks.length === 0 ? swal("No hay  en el momento"):  console.log(this.state);
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
            var path = 'components/get_tire'
            console.log(this.state)
            switch(this.state.type) {
                case "mountain":
                     path += '_to_mountain/';
                     break;                
                case "urban":
                     path += '_to_urban/';
                     break;
                case "bmx":
                     path += '_to_bmx/';
                     break;
                default:
            }
            console.log(path)
            axios.get(store.getState().globalUrl + '/components/get_tire_to_urban')
                .then((response) => {
                    for(var x in response.data){
                        this.state.tires.push(response.data[x])
                    }								
                    this.state.tires.length === 0 ? swal("No hay rines en el momento"):  console.log(this.state);
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

            var path = 'components/get_seats'
            console.log(this.state)
            switch(this.state.type) {
                case "mountain":
                case "road":
                     path += '/';
                     break;
                case "urban":
                     path += '_to_urban/';
                     break;
                case "bmx":
                     path += '_to_bmx/';
                     break;
                default:
            }
            console.log(store.getState().globalUrl + path)
            axios.get(store.getState().globalUrl + path)
                .then((response) => {
                    for(var x in response.data){
                        this.state.sillas.push(response.data[x])
                    }								
                    this.state.sillas.length === 0 ? swal("No hay sillines en el momento"):  console.log(this.state);
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
                <div className="menu-component">
                    <AppNavigationComponent/>
                </div>
                <div className="bike-component">
                    <Bicycle loadChooser={this.chooseLoad}/>
                </div>
            </div>
            <div className="row">
            <Carousel data = {this.data}/>
            </div>
          </div>  
          </div>
        );
    }
}