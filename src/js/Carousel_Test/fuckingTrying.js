import React from 'react';
import Slider from 'react-slick';
import './genCar.css';
import Build from'./Container.js';


class BuildBike extends React.Component {
    constructor() {
        super();
        this.state = {
            type: "road",
            size: "xs"
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
    

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
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
                            <br/><br/>
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
                        <Build data={this.state}/>
                    </div>
                </Slider>

            </div>
        );
    }
}

export default BuildBike;