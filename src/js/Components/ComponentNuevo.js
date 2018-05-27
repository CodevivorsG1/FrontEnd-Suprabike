import React, { Component } from 'react';
import AppHeaderComponent from '../AppHeaderComponent';
import AppNavigationComponent from '../AppNavigationComponent';
import '../../css/bicycle-menu.css';
import Form from './Form';
import FormBike from './FormBike';

class ComponentNuevo extends Component {
    constructor(props){
        super(props)
        this.state ={
            bike: false
        }
    }
    toggleForm = () => {
        this.setState({
            bike: !this.state.bike
        })
    }
    render() {
        if (this.state.bike){
        return (
            <div>
            <AppHeaderComponent/>
            
            <div className="container-fluid">
            {/*<button onClick={() => this.loadSillas()}>Sillas</button>
            <button onClick={() => this.loadTech()}>Técnicos</button>*/}
            
            <div className="row menu-navigation">
                <div className="menu-component col-md-4">
                    <AppNavigationComponent/>
                </div>
                <div className="col-md-8">
                    <a href="#" class="btn btn-primary mb-5" onClick={this.toggleForm}>Agregar componente</a>
                    <FormBike/>
                </div>
            </div>
            
            </div>  
            </div>
        );
        }else
        return (
            <div>
            <AppHeaderComponent/>
            
          <div className="container-fluid">
            {/*<button onClick={() => this.loadSillas()}>Sillas</button>
            <button onClick={() => this.loadTech()}>Técnicos</button>*/}
            
            <div className="row menu-navigation">
                <div className="menu-component col-md-4">
                    <AppNavigationComponent/>
                </div>
                <div className="col-md-8">
                    <a href="#" class="btn btn-primary mb-5" onClick={this.toggleForm}>Agregar Bicicleta</a>
                    <Form/>
                </div>
            </div>
            
          </div>  
          </div>
        );
    }
}

export default ComponentNuevo;