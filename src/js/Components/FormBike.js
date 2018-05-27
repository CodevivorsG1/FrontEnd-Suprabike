import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import swal from 'sweetalert'


class FormBike extends Component {
    constructor(props){
        super(props)
        this.state ={
            type:"",
            price: "",
            brand: "",
            material: "",
            description: "",
            componentBrand: ""
        }
    }
    handleSubmitCom = () =>{
      let component ={
        "id_bicy": "12",
        "brand_bicy": this.state.brand,
        "material_bicy": this.state.material,
        "components_bicy": this.state.componentBrand ,
        "price_bicy": this.state.price,
        "usetype_bicy": this.state.type,
        "description_bicy": this.state.description,
        "store_id":"4",
        "images": [ ]
      }
      axios.post(store.getState().globalUrl +'bicycles', component)
      .then(response =>{
        swal("Bicicleta agregada")
        console.log("re bien, funciona", response)
      })
      .catch(response =>{
        swal("Error, intente de nuevo")
        console.log("fuck component", response)
      })
    }
    render() {
        return (
            <div>
            <div onSubmit={this.handleSubmitCom}>
            
            <div class="container-fluid">
                <div class="panel-heading">
                  <h3 class="panel-heading">Agregar una bicicleta</h3>
                </div>
                <div class="row">
                  <div class="col-md-12">
                  <select name="role" id="role-list"
                    defaultValue={this.state.type} onChange={(e)=>this.setState({type: e.target.value })}>
                    <option value="road">Ruta</option>
                    <option value="mountain">Montaña</option>
                    <option value="urban">Urbana</option>       
                  </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      
                      <label id="namesLabel">Precio</label>
                      <input type="cost" name="names"
                       id="first_name" class="form-control input-sm getIt"
                       value={this.state.price} onChange={(e) =>this.setState({price: e.target.value})}
                       placeholder="Precio" required/>
                     <div className="error" id="namesError" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="surnamesLabel">Marca</label>
                      <input type="text" name="surnames"
                       id="last_name" class="form-control input-sm getIt"
                       value={this.state.brand} onChange={(e)=>this.setState({brand: e.target.value})}
                       placeholder="Marca" required/>
                     <div className="error" id="surnamesError" />
                    </div>
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label id="emailLabel">Descripción</label>
                      <input type="text" name="email"
                       class="form-control input-sm getIt"
                       value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}
                       placeholder="Descripción" required/>
                     <div className="error" id="emailError"/>
                    </div>
  
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="passwordLabel">Material</label>
                      <input type="text" name="password"
                       class="form-control input-sm getIt"
                       value={this.state.material} onChange={(e)=>this.setState({material: e.target.value})}
                       placeholder="Material" required/>
                      <div className="error" id="passwordError" />
                    </div>
  
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="passwordConfirmLabel">Marca de Componentes</label>
                      <input type="text" name="passwordConfirm"
                       class="form-control input-sm required"
                       value={this.state.componentBrand} onChange={(e) =>this.setState({componentBrand: e.target.value})}
                       placeholder="Marca de componentes" required/>
                      <div className="error" id="passwordConfirmError" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4 col-md-offset-4">
                    <input type="submit" value="Agregar" class="btn btn-info btn-block" onClick={this.handleSubmitCom}/>
                  </div>
                </div>
            </div>
          </div>
        </div>
        );
    }
}

export default FormBike;