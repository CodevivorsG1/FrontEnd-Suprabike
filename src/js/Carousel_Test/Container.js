import React from 'react';
import Carousel from './Carousel.js';
import Bicycle from './Bicycle';
import AppHeaderComponent from '../AppHeaderComponent';
import AppNavigationComponent from '../AppNavigationComponent';
import '../../css/bicycle-menu.css';
import { POINT_CONVERSION_HYBRID } from 'constants';

export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }

        this.data = {
            type:'',
            data: []
        }
    }

    componentDidMount() {
        console.log("props")
        console.log(this.props)

        this.setState({
            ...this.state,
            size: this.props.data.size,
            type: this.props.data.type
        });       

    }

    /* chooseLoad = (part) =>{
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
    } */

    /* loadData(part) {
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
            axios.get(store.getState().globalUrl + path)
                .then( (response) => {                    
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
                    console.log(this.state)
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
        }
    }  */
    render() {
        
        return(
            <div>
          <div className="container-fluid">
            {/*<button onClick={() => this.loadSillas()}>Sillas</button>
            <button onClick={() => this.loadTech()}>Técnicos</button>*/}
            
            <div className="row menu-navigation">            
            <Bicycle loadChooser={this.props.func}/>
            </div>           
          </div>  
          </div>
        );
    }
}