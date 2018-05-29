import React from 'react';
import Slider from 'react-slick';
import Carousel from './Carousel.js';
import Build from'./Container.js';
import axios from 'axios';
import swal from 'sweetalert';
import store from '../store';
import './genCar.css';


class BuildBike extends React.Component {
    constructor() {
        super();
        this.state = {
            type: "road",
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
            data:[]
        }
        this.handleSmallChange = this.handleSmallChange.bind(this);
    }

    handleSmallChange(e) {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
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
                     path += '_to_mountain';
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
                        type: 'manubrio',
                        data: this.state.manubrios
                    }
                    this.setState({loadedManubrios: true});                  
                    break;
                case "frames":
                    this.data = {
                        type: 'frames',
                        data: this.state.frames
                    }
                    this.setState({loadedFrames: true});
                    break;
                case "wheels":
                    this.data = {
                        type: 'wheels',
                        data: this.state.wheels
                    }
                    this.setState({loadedWheels: true});
                    break;
                case "tires":
                    this.data = {
                        type: 'tires',
                        data: this.state.tires
                    }
                    this.setState({loadedTires: true});
                    break;
                case "forks":
                    this.data = {
                        type: "forks",
                        data: this.state.forks

                    }
                    this.setState({loadedForks: true});          
                    break;
                case "sillas":
                    this.data = {                        
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
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <div className="container-big">
                    <Slider {...settings}>
                        <div className="stage">                    
                            <p>
                                Bienvenido a 'Arma tu Bici'<br/>
                                <small>Empieza en el siguiente slide ...</small>
                            </p>
                        </div>
                        <div className="stage yellow">
                            <p>
                                Que tipo de bicicleta buscas ? <br/><br/>
                                <input type="radio" name="bike"
                                    value="road" checked={this.state.type === "road"}
                                    onChange={() =>this.setState({type: "road"})}checked /> Ruta
                                <br/>
                                <input type="radio" name="bike"
                                    value="mountain" checked={this.state.type === "mountain"}
                                    onChange={() =>this.setState({type: "mountain"})} /> Montaña
                                <br/>
                                <input type="radio" name="bike"
                                    value="bmx" checked={this.state.type === "bmx"}
                                    onChange={() =>this.setState({type: "bmx"})} /> BMX
                                <br/>
                                <input type="radio" name="bike"
                                    value="urban" checked={this.state.type === "urban"}
                                    onChange={() =>this.setState({type: "urban"})} /> Urban
                            </p>                        
                        </div>
                        <div className="stage purple">
                            <p>
                                Que tamaño de marco buscas ? <br/>
                                <select name="size" id="size-list"
                                    defaultValue={this.state.size} onChange={this.handleSmallChange}>
                                    <option value="xs">XS (Extra Small)</option>
                                    <option value="s">S (Small)</option>
                                    <option value="m">M (Medium)</option>
                                    <option value="l">L (Large)</option>
                                    <option value="xl">XL (Extra Large)</option>                                
                                </select>
                                <br/>
                                <table>
                                    <tr>
                                        <th>Estatura</th>
                                        <th>Tamaño del marco</th>
                                    </tr>
                                    <tr>
                                        <td>152cm - 160cm</td>
                                        <td>XS</td>
                                    </tr>
                                    <tr>
                                        <td>160cm - 168cm</td>
                                        <td>S</td>
                                    </tr>
                                    <tr>
                                        <td>168cm - 175cm</td>
                                        <td>M</td>
                                    </tr>
                                    <tr>
                                        <td>175cm - 183cm</td>
                                        <td>L</td>
                                    </tr>
                                    <tr>
                                        <td>183cm - 191cm</td>
                                        <td>XS</td>
                                    </tr>
                                </table>
                            </p>
                        </div>
                        <div className="stage white">
                            Hora de armar algo!                      
                            <Build data={this.state} func={this.chooseLoad}/>
                        </div>
                    </Slider>
                </div>
                <Carousel data={this.data}/>
            </div>
        );
    }
}

export default BuildBike;