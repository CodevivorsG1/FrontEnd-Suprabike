import React, { Component } from 'react';
import axios from 'axios';
import AppHeaderComponent from './AppHeaderComponent';
import store from './store';
import {UserContext} from './SocialNetworkComponent';

import '../css/loader.css';

class RegisterGoogle extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: 'seleccione',
            cities: [],
            city_id: '1',
            names: '',
            surnames: '',
            email: '',
            cellphone: '',
            telephone: '',
            gender: '',
            isLoading: false,
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSmallChange = this.handleSmallChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentWillMount(){
        this.setState({
            names: this.props.match.params.name,
            surnames: this.props.match.params.surname,
            email: this.props.match.params.email
        })
        axios.get(store.getState().globalUrl + 'cities')
        .then((response) =>{
          this.setState({cities: response.data})
        })
        .catch((e) =>{
          console.log("error cities, ", e)
        })
    }
    login = () =>{
      axios.post( store.getState().globalUrl + 'auth_google_token',
                  {
                    "id_token": this.props.match.params.userToken,
                    "email": this.state.email
                  }
              , 
              {headers: {
                'Content-type': 'application/json'
              }
            })
      .then((response) =>{
        this.setState({isLoading: false})
        store.dispatch({
          type: 'ADD_TOKEN',
          token: response.data.authentication_token,
          userType: 'users' 
        })
        this.props.history.push('/home/undefined')
      })
      .catch(() =>{
        this.setState({isLoading: false})
      })
    }
    registerAccount = () => {
      axios.put(store.getState().globalUrl + `users/${this.props.match.params.id}`,
      {
        'user':{
        "email": this.state.email,
        "password": "",
        "password_confirmation": "",
        "idUser": "456",
        "nameUser": this.state.names,
        "surnameUser": this.state.surnames, 
        "genderUser": this.state.gender, 
        "phonenumUser": this.state.telephone, 
        "celphoneUser": this.state.cellphone,
        "city_id": this.state.city_id
        }
      }
    )
    .then((response) =>{
      console.log("respuesta edición login google", response)
      this.login()
    })
    .catch((response)=>{
      this.setState({isLoading: false})
      console.log("respuesta error edición login google", response)
    })
    }
    handleSubmit(e) {
    
        e.preventDefault();
        
        console.log('Component state:', JSON.stringify(this.state));
    
        if (!this.showFormErrors()) {
          console.log('Form is invalid: do not submit');
        } else {
          console.log('Form is valid: submit');
          this.setState({ isLoading: true })
          this.registerAccount()
                      
        }
    }
    handleChange (e){
        e.target.classList.add('active');

        this.setState({
            [e.target.name]: e.target.value
        });

        this.showInputError(e.target);
    }
    
    handleSmallChange (e){
    this.setState({
        [e.target.name]: e.target.value
    });
    }
    showFormErrors() {
        const inputs = document.querySelectorAll('.getIt');
        let isFormValid = true;
    
        inputs.forEach(input => {
          input.classList.add('active');
    
          const isInputValid = this.showInputError(input);
    
          if (!isInputValid) {
            isFormValid = false; 
          }
        });
    
        return isFormValid;
    }
    
    showInputError(input) {
        const name = input.name;
        const validity = input.validity;
        const label = document.getElementById(`${name}Label`).textContent;
        const error = document.getElementById(`${name}Error`);
    
         
        if (!validity.valid) {
          if (validity.valueMissing) {
            error.textContent = `${label} es un campo requerido`;
          } else if (validity.typeMismatch) {
            error.textContent = `${label} debe ser una dirección valida`;
          } 
          return false;
        }
    
        error.textContent = '';
        return true;
    }
    render() {
        if (this.state.isLoading){
            return(
                <div>
                    <AppHeaderComponent />
                    <div className="loader position-middle"/>
                </div>
            )
        }else{
        return (
        <div>
          <AppHeaderComponent />
            <form onSubmit={this.handleSubmit} noValidate>    
            <div class="container-fluid">
              <div class="panel register-square">
                <div class="panel-heading">
                  <h3 class="panel-heading">Registrese en SupraBikes</h3>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <select name="city_id" id="city-list"
                      defaultValue={this.state.city} onChange={(e)=>this.setState({city_id: e.target.value })}>
                      {
                        this.state.cities.map((city) =>(
                          <option value={city.id}>{city.name_city}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      
                      <label id="namesLabel">Nombres</label>
                      <input type="text" name="names"
                       id="first_name" class="form-control input-sm getIt"
                       value={this.state.names} onChange={this.handleChange}
                       placeholder="Nombres" required/>
                     <div className="error" id="namesError" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="surnamesLabel">Apellidos</label>
                      <input type="text" name="surnames"
                       id="last_name" class="form-control input-sm getIt"
                       value={this.state.surnames} onChange={this.handleChange}
                       placeholder="Apellidos" required/>
                     <div className="error" id="surnamesError" />
                    </div>
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Email</label>
                      <p
                       class="form-control input-sm"
                       
                       >{this.state.email}</p>
                    </div>
  
                  </div>
                </div>
  
                <div class="row gen_part">
                  <div class="col-md-3">
                    Género
                  </div>
                  <div class="col-md-3">
                    <input type="radio" name="gender"
                       value="hombre" checked={this.state.gender === "hombre"}
                       onChange={this.handleSmallChange} /> Hombre
                  </div>
                  <div class="col-md-3">
                    <input type="radio" name="gender"
                       value="mujer" checked={this.state.gender === "mujer"}
                       onChange={this.handleSmallChange} /> Mujer
                  </div>
                  <div class="col-md-3">
                    <input type="radio" name="gender"
                       value="otro" checked={this.state.gender === "otro"}
                       onChange={this.handleSmallChange} /> Otro
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="cellphoneLabel">Celular</label>
                      <input type="tel" name="cellphone"
                       class="form-control input-sm getIt"
                       value={this.state.cellphone} onChange={this.handleChange}
                       placeholder="Celular"
                       maxlength="10" required/>
                     <div className="error" id="cellphoneError" />
                    </div>
  
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="telephoneLabel">Telefono</label>
                      <input type="tel" name="telephone"
                       class="form-control input-sm"
                       value={this.state.telephone} onChange={this.handleChange}
                       maxlength="7"
                       placeholder="Telefono"/>
                     <div className="error" id="telephoneError" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4 col-md-offset-4">
                    <input type="submit" value="Registrarse" class="btn btn-info btn-block"/>
                  </div>
                </div>
  
              </div>
  
            </div>
          </form>
        </div>
        );
      }
    }
}

export default RegisterGoogle;