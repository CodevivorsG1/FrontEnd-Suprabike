import React from 'react';
import Bicycle from './Bicycle';
import Carousel from './newCarousel.js';
import axios from 'axios';
import swal from 'sweetalert';
import store from '../store';
import './BuildStyles.css'

class Build extends React. Component {
    constructor() {
        super();
        this.state = {            
            bikeID:0 ,
            type: "mountain",
            size: "xs",
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
            type: "",
            data: []
        }
    }

    chooseLoad = (part) =>{
        console.log(this.state)
        switch (part){
            case "sillas":
                return this.loadData("sillas")
                //return this.loadSillas();
            case "tecnicos":
                return this.loadData("tecnicos")
                //return this.loadTech();
            case "manubrios":
                return this.loadData("manubrios")
                //return this.loadManubrio();
            case "forks":
                return this.loadData("forks")
                //return this.loadFork();
            case "tires":
                return this.loadData("tires")
                //return this.loadTires();
            case "wheels":
                return this.loadData("wheels")
                //return this.loadWheels();
            case "frames":
                return this.loadData("frames")
                ////return this.loadFrame();
            default:
                //nothing
            
        }
    }

    loadData(part) {
        let currentChoice = part.charAt(0).toUpperCase() + part.substr(1);
        let loaded = false;
        switch (part) {
            case "manubrios":
                loaded = this.state.loadedManubrios;
                break;
            case "frames":
                loaded = this.state.loadedFrames;
                break;
            case "wheels":
                loaded = this.state.loadedWheels;
                break;
            case "tires":
                loaded = this.state.loadedTires;
                break;
            case "forks":
                loaded = this.state.loadedForks;
                break;
            case "sillas":
                loaded = this.state.loadedSillas;
                break;
            default:                            
        }
        if (! loaded) {
            let path = 'components/';
            switch (part) {
                case "manubrios":
                    path += "get_handlebar";
                    break;
                case "frames":
                    path += "get_frame_size";
                    break;
                case "wheels":
                    path += "get_wheel";
                    break;
                case "tires":
                    path += "get_tire";
                    break;
                case "forks":
                    path += "get_fork";
                    break;
                case "sillas":
                    path += "get_seats";
                    break;
                default:                            
            }
            switch (this.state.type) {
                case "mountain":
                     if (part != 'sillas') {
                        path += '_to_mountain';
                     }
                     break;
                case "road":
                     if (part !== "sillas") {
                        path += '_to_road';
                     }
                     break;
                case "urban":
                     path += '_to_urban';
                     break;
                case "bmx":
                     path += '_to_bmx';
                     break;
                default:
            }

            if (part === 'frames') {
                path += '_' + this.state.size;
            }
            path += "/";
            console.log("path: " + store.getState().globalUrl + path)
            axios.get(store.getState().globalUrl + path,
                {
                    headers:{
                        'X-User-Token': store.getState().token,
                        'X-User-Email': store.getState().userEmail
                    }
                }
            )
                .then( (response) => {       
                    this.data.data = [];             
                    for (let x in response.data) {
                        console.log("pushing");
                        this.data.data.push(response.data[x]);
                    }
                    switch (part) {
                        case "manubrios":
                            this.data = {
                                ...this.data,
                                bikeId: this.state.bikeID,
                                type: "manubrios"
                            }
                            this.setState({
                                manubrios: this.data.data,
                                loadedManubrios: true
                            });                            
                            break;
                        case "frames":
                            this.data = {
                                ...this.data,
                                bikeId: this.state.bikeID,
                                type: "frames"
                            }
                            this.setState({
                                frames: this.data.data,
                                loadedFrames: true
                            });          
                            break;
                        case "wheels":
                            this.data = {
                                ...this.data,
                                bikeId: this.state.bikeID,
                                type: "wheels"
                            }
                            this.setState({
                                wheels: this.data.data,
                                loadedWheels: true
                            });          
                            break;
                        case "tires":
                            this.data = {
                                ...this.data,
                                bikeId: this.state.bikeID,
                                type: "tires"
                            }
                            this.setState({
                                tires: this.data.data,
                                loadedTires: true
                            });          
                            break;
                        case "forks":
                            this.data = {
                                ...this.data,
                                bikeId: this.state.bikeID,
                                type: "forks"
                            }
                            this.setState({
                                forks: this.data.data,
                                loadedForks: true
                            });          
                            break;
                        case "sillas":
                            this.data = {
                                ...this.data,
                                bikeId: this.state.bikeID,
                                type: "sillas"
                            }
                            this.setState({
                                sillas: this.data.data,
                                loadedSillas: true
                            });          
                            break;
                        default:                            
                    }
                    console.log(this.data)
                })
                .catch ( (error) => {
                    swal("Error", "Error al obtener datos", "error")
                    console.log("fuck")                    
                })
        } else {
            switch (part) {
                case "manubrios":
                    this.data = {
                        ...this.data,
                        bikeId: this.state.bikeID,
                        type: 'manubrio',
                        data: this.state.manubrios
                    }
                    this.setState({loadedManubrios: true});                  
                    break;
                case "frames":
                    this.data = {
                        ...this.data,
                        bikeId: this.state.bikeID,
                        type: 'frames',
                        data: this.state.frames
                    }
                    this.setState({loadedFrames: true});
                    break;
                case "wheels":
                    this.data = {
                        ...this.data,
                        bikeId: this.state.bikeID,
                        type: 'wheels',
                        data: this.state.wheels
                    }
                    this.setState({loadedWheels: true});
                    break;
                case "tires":
                    this.data = {
                        ...this.data,
                        bikeId: this.state.bikeID,
                        type: 'tires',
                        data: this.state.tires
                    }
                    this.setState({loadedTires: true});
                    break;
                case "forks":
                    this.data = {
                        ...this.data,
                        bikeId: this.state.bikeID,
                        type: "forks",
                        data: this.state.forks

                    }
                    this.setState({loadedForks: true});          
                    break;
                case "sillas":
                    this.data = {    
                        ...this.data,                    
                        bikeId: this.state.bikeID,
                        type: "sillas",
                        data: this.state.sillas
                    }
                    this.setState({loadedSillas: true});          
                    break;
                default:                            
            }
        }
    } 

    render() {
        return(
            <div class="container-fluid">
                <div class="row">
                    <h2>Que bici te gustaria?</h2>
                </div>
                <div class="row">
                        <div class="col-md-3 pull-left">
                            <div class="column">
                                <img src="../../img/MTBIcon.png" />
                                <div class="text-center">
                                    <h2>MTB</h2>
                                    <input type="radio" name="bike"
                                    value="mountain" checked={this.state.type === "mountain"}
                                    onChange={() =>this.setState({type: "mountain"})}
                                    style={{margin: '10px'}} checked />
                                    Ningun terreno sera obstaculo para ti.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 pull-left">
                            <div class="column">
                                <img src="../../img/RoadIcon.png" />
                                <div class="text-center">
                                    <h2>Road</h2>
                                    <input type="radio" name="bike"
                                    value="road" checked={this.state.type === "road"}
                                    onChange={() =>this.setState({type: "road"})}
                                    style={{margin: '10px'}} />
                                    La velocidad es primordial para ti.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 pull-left">
                            <div class="column">
                                <img src="../../img/UrbanIcon.png"  />                        
                                <div class="text-center">
                                    <h2>Urban</h2>
                                    <input type="radio" name="bike"
                                    value="urban" checked={this.state.type === "urban"}
                                    onChange={() =>this.setState({type: "urban"})}
                                    style={{margin: '10px'}} />                                    
                                    Navega con estilo por la ciudad. 
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 pull-left">
                            <div class="column">
                                <img src="../../img/BmxIcon.png"  />
                                <div class="text-center">
                                    <h2>BMX</h2>
                                    <input type="radio" name="bike"
                                    value="bmx" checked={this.state.type === "bmx"}
                                    onChange={() =>this.setState({type: "bmx"})}
                                    style={{margin: '10px'}} />
                                    El mundo es tu área de juegos.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <h2>Tamaño del marco</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="text-center">
                            <h1>47 cm</h1>
                            <input type="radio" name="size_bike"
                            value="xs" checked={this.state.size === "xs"}
                            onChange={() =>this.setState({size: "xs"})}
                            style={{margin: '0 10px'}} checked />
                            155cm - 160cm
                        </div>
                        </div>
                        <div class="col-md-2">
                            <div class="text-center">
                            <h1>50 cm</h1>
                            <input type="radio" name="size_bike"
                            value="s" checked={this.state.size === "s"}
                            onChange={() =>this.setState({size: "s"})}
                            style={{margin: '0 10px'}} />
                            162cm - 167cm
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="text-center">
                            <h1>53 cm</h1>
                            <input type="radio" name="size_bike"
                            value="m" checked={this.state.size === "m"}
                            onChange={() =>this.setState({size: "m"})}
                            style={{margin: '0 10px'}} />
                            170cm - 175cm
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="text-center">
                            <h1>56 cm</h1>
                            <input type="radio" name="size_bike"
                            value="l" checked={this.state.size === "l"}
                            onChange={() =>this.setState({size: "l"})}
                            style={{margin: '0 10px'}} />
                            177cm - 182cm
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="text-center">
                                <h1>59 cm</h1>
                                <input type="radio" name="size_bike"
                                value="xl" checked={this.state.size === "xl"}
                                onChange={() =>this.setState({size: "xl"})}
                                style={{margin: '0 10px'}} />
                                184cm - 189cm
                            </div>
                        </div>
                        
                    </div>
                    <div class="row">
                        <h2>Escoge tus componentes</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-8 blackborder">
                            <Bicycle loadChooser={this.chooseLoad}/>
                        </div>
                        <div class="col-md-4">
                            <Carousel data={this.data}/>
                        </div>
                    </div>
                    <div class="row">
                    <a href= {store.getState().globalUrl+"/bicycles/showpdf.pdf"} target="_blank">
                        <button class="btn btn-info btn-sm pdfBtn" role="button"><i class="far fa-file-pdf"></i> Pre-validar</button>
                    </a>
                    <a href= {store.getState().globalUrl+"/bicycles/showpdf.pdf"} target="_blank">
					    <button class="btn btn-info btn-sm pdfBtn" role="button"><i class="far fa-file-pdf"></i> Genera cotización</button>
					</a>
                    </div>


            </div>
        );
    }
}

export default Build;