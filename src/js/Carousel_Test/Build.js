import React from 'react';
import Bicycle from './Bicycle';
import Carousel from './newCarousel.js';
import './BuildStyles.css'

class Build extends React. Component {
    constructor() {
        super();
        this.state = {
            type: '',
        }
        this.data = {
            type: "",
            data: []
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
                                    style={{margin: '10px'}} />
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
                            <input type="radio" name="bike"
                            value="bmx" checked={this.state.type === "bmx"}
                            onChange={() =>this.setState({type: "bmx"})}
                            style={{margin: '10px'}} />
                            155cm - 160cm
                        </div>
                        </div>
                        <div class="col-md-2">
                            <div class="text-center">
                            <h1>50 cm</h1>
                            <input type="radio" name="bike"
                            value="bmx" checked={this.state.type === "bmx"}
                            onChange={() =>this.setState({type: "bmx"})}
                            style={{margin: '10px'}} />
                            155cm - 160cm
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="text-center">
                            <h1>53 cm</h1>
                            <input type="radio" name="bike"
                            value="bmx" checked={this.state.type === "bmx"}
                            onChange={() =>this.setState({type: "bmx"})}
                            style={{margin: '10px'}} />
                            155cm - 160cm
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="text-center">
                            <h1>56 cm</h1>
                            <input type="radio" name="bike"
                            value="bmx" checked={this.state.type === "bmx"}
                            onChange={() =>this.setState({type: "bmx"})}
                            style={{margin: '10px'}} />
                            155cm - 160cm
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="text-center">
                                <h1>59 cm</h1>
                                <input type="radio" name="bike"
                                value="bmx" checked={this.state.type === "bmx"}
                                onChange={() =>this.setState({type: "bmx"})}
                                style={{margin: '10px'}} />
                                155cm - 160cm
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="text-center">
                                <h1>62 cm</h1><input type="radio" name="bike"
                                value="bmx" checked={this.state.type === "bmx"}
                                onChange={() =>this.setState({type: "bmx"})}
                                style={{margin: '10px'}} />
                                155cm - 160cm
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <h2>Escoge tus componentes</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <Bicycle/>
                        </div>
                        <div class="col-md-4">
                            <Carousel data={this.data}/>
                        </div>
                    </div>


            </div>
        );
    }
}

export default Build;