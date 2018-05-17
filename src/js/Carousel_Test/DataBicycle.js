import React, { Component } from 'react';
import '../../css/register.css';
import '../../css/loader.css';
import AppHeaderComponent from '../AppHeaderComponent';
class DataBicycle extends Component {
    constructor(props){
        super(props)
        this.state ={
            type: "road",
            size: "xs"
        }
    }
    handleSubmit = () =>{
        this.props.history.push("/bicycle");
    }
    render() {
        return (
            <div>
          <AppHeaderComponent/>
            <form onSubmit={this.handleSubmit} noValidate>
            
            <div class="container-fluid">
              <div class="panel register-square">
                <div class="panel-heading">
                  <h3 class="panel-heading">Registra tus datos para Armar Tu Bici</h3>
                </div>
                <div class="row mt-5">
                  <div class="col-md-12">
                    <h2 className="text-center">¿Qué tipo de bici quieres?</h2>
                  </div>
                </div>
                <div class="row gen_part">
                  <div class="col-md-3">
                    <input type="radio" name="bike"
                       value="road" checked={this.state.type === "road"}
                       onChange={() =>this.setState({type: "road"})} checked/> Road
                  </div>
                  <div class="col-md-3">
                  <input type="radio" name="bike"
                       value="bmx" checked={this.state.type === "bmx"}
                       onChange={() =>this.setState({type: "bmx"})} /> BMX
                  </div>
                  <div class="col-md-3">
                  <input type="radio" name="bike"
                       value="urban" checked={this.state.type === "urban"}
                       onChange={() =>this.setState({type: "urban"})} /> Urban
                  </div>
                  <div class="col-md-3">
                  <input type="radio" name="bike"
                       value="mountain" checked={this.state.type === "mountain"}
                       onChange={() =>this.setState({type: "mountain"})} /> Mountain
                  </div>
                </div>
  
                <div class="row mt-5">
                  <div class="col-md-12">
                    <h3 className="text-center"> ¿Escoge una talla? </h3>
                  </div>
                </div>
  
                <div class="row gen_part text-center">
                  <div class="col-md-4">
                    <input type="radio" name="size"
                       value="xs" checked={this.state.size === "xs"}
                       onChange={() =>this.setState({size: "xs"})} checked/> XS
                  </div>
                  <div class="col-md-4">
                  <input type="radio" name="size"
                       value="s" checked={this.state.size === "s"}
                       onChange={() =>this.setState({size: "s"})} /> S
                  </div>
                  <div class="col-md-4">
                  <input type="radio" name="size"
                       value="m" checked={this.state.size === "m"}
                       onChange={() =>this.setState({size: "m"})} /> M
                  </div>
                </div>
                <div className="row gen_part text-center">
                  <div class="col-md-6">
                  <input type="radio" name="size"
                       value="l" checked={this.state.size === "l"}
                       onChange={() =>this.setState({size: "l"})} /> L
                  </div>
                  <div class="col-md-6">
                  <input type="radio" name="size"
                       value="xl" checked={this.state.size === "xl"}
                       onChange={() =>this.setState({size: "xl"})} /> XL
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4 col-md-offset-4">
                    <input type="submit" value="Siguiente" class="btn btn-info btn-block"/>
                  </div>
                </div>
  
              </div>
  
            </div>
          </form>
        </div>
        );
    }
}

export default DataBicycle;