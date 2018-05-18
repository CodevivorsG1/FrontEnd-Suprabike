import React, { Component } from 'react';
import AppHeaderComponent from '../AppHeaderComponent';
import axios from 'axios';
import store from '../store';

class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            type:"",
            price: "",
            brand: "",
            material: "",
            size: "",
            tComponent: "",
            torque: "",
            tyre: "",
            height: "",
            profile:"",
            frameSize: "",
            suspension: ""
        }
    }
    handleSubmitCom = () =>{
      let component ={
        "id": "31",
        "type_component": this.state.tComponent,
        "price_component": this.state.price,
        "description_component": this.state.description,
        "brand_component": this.state.brand,
        "sizes_component": this.state.size,
        "material_component": this.state.material,
        "store_id": "4",
        "part_of_bike": this.state.type,
        "strength": this.state.torque,
        "height": this.state.height,
        "rin": this.state.tyre,
        "profile": this.state.profile,
        "frame_size": this.state.frameSize,
        "rear_suspension": this.state.suspension,
        "bicycle_to_assembles": [ ],
        "images": [ ]
      }
      axios.post(store.getState().globalUrl +'components', component)
      .then(response =>{
        console.log("re bien, funciona", response)
      })
      .catch(response =>{
        console.log("fuck component", response)
      })
    }
    render() {
        return (
            <div>
            <div onSubmit={this.handleSubmitCom}>
            
            <div class="container-fluid">
                <div class="panel-heading">
                  <h3 class="panel-heading">Agregar un componente</h3>
                </div>
                <div class="row">
                  <div class="col-md-12">
                  <select name="role" id="role-list"
                    defaultValue={this.state.type} onChange={(e)=>this.setState({type: e.target.value })}>
                    <option value="manubrio">Manubrio</option>
                    <option value="marco">Marco</option>
                    <option value="rines">Rines</option>
                    <option value="grupo">Grupo</option>
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
                      <label id="passwordConfirmLabel">Tamaño</label>
                      <input type="text" name="passwordConfirm"
                       class="form-control input-sm required"
                       value={this.state.size} onChange={(e) =>this.setState({size: e.target.value})}
                       placeholder="tamaño" required/>
                      <div className="error" id="passwordConfirmError" />
                    </div>
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6">
                  <div class="form-group">
                      <label id="techCostLabel">Tipo de componente</label>
                      <input type="text" name="techCost"
                       class="form-control input-sm"
                       value={this.state.tComponent}
                       onChange={(e) =>this.setState({tComponent: e.target.value})}
                       placeholder="Tipo de componente"
                       required/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="workTypeLabel">Torque</label>
                      <input type="text" name="workType"
                       class="form-control input-sm"
                       value={this.state.torque}
                       onChange={(e) =>this.setState({torque: e.target.value})}
                       placeholder="Torque" required/>
                     <div className="error" id="telephoneError" />
                    </div>
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="cellphoneLabel">Altura</label>
                      <input type="text" name="cellphone"
                       class="form-control input-sm getIt"
                       value={this.state.height} onChange={(e) => this.setState({height: e.target.value})}
                       placeholder="Altura"
                       required/>
                     <div className="error" id="cellphoneError" />
                    </div>
  
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="telephoneLabel">Rin</label>
                      <input type="text" name="telephone"
                       class="form-control input-sm"
                       value={this.state.tyre} onChange={(e)=>this.setState({tyre: e.target.value})}
                       placeholder="Numero Rin"/>
                     <div className="error" id="telephoneError" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div class="col-md-4">
                      <div class="form-group">
                        <label id="surnamesLabel">Perfil</label>
                        <input type="text" name="surnames"
                        id="last_name" class="form-control input-sm getIt"
                        value={this.state.profile} onChange={(e)=>this.setState({profile: e.target.value})}
                        placeholder="Perfil" required/>
                      <div className="error" id="surnamesError" />
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                        <label id="surnamesLabel">Tamaño de marco</label>
                        <input type="number" name="surnames"
                        id="last_name" class="form-control input-sm getIt"
                        value={this.state.frameSize} onChange={(e)=>this.setState({frameSize: e.target.value})}
                        placeholder="Tamaño del marco" required/>
                      <div className="error" id="surnamesError" />
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                        <label id="surnamesLabel">Suspensión</label>
                        <input type="text" name="surnames"
                        id="last_name" class="form-control input-sm getIt"
                        value={this.state.suspension} onChange={(e)=>this.setState({suspension: e.target.value})}
                        placeholder="Suspensión" required/>
                      <div className="error" id="surnamesError" />
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

export default Form;