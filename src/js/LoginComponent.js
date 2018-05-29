import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import '../css/login.css';
import '../css/google.css';
import {Link} from 'react-router-dom';
import AppHeaderComponent from './AppHeaderComponent.js';
import AppFooterComponent from './AppFooterComponent.js';
import AppHomeComponent from './AppHomeComponent.js'
import Recaptcha from 'react-recaptcha';
import ReactDOM from 'react-dom';
import store from './store'
import axios from 'axios';
import swal from 'sweetalert';
import SocialNetworkComponent from './SocialNetworkComponent';


class LoginComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      role:'users',
      token: '',
      redirect: false,
      isLoading: false,
    };
    console.info(store.getState().globalUrl)
    store.subscribe(() => {
        this.state.token = store.getState().token
      });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSmallChange = this.handleSmallChange.bind(this);
    this.callback = this.callback.bind(this);
  }
  callback  () {
    this.setState({recaptcha:true})
    document.getElementById("singlebutton").classList.remove('d-none');
    this.state.recaptcha = true;
    console.log("recaptcha")
  };
  handleChange (e){
    e.target.classList.add('active');

    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.name !== 'role'){
      this.showInputError(e.target);
    }
  }
  
  handleSmallChange (e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    
      
    this.setState({isLoading: true})
    e.preventDefault();

    console.log('Component state:', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('Form is invalid: do not submit');
      this.setState({isLoading: false})
    } else {
      console.log('Form is valid: submit');
      console.log("role", this.state.role)

      var new_user = this.state

      axios.post(store.getState().globalUrl + `${this.state.role}_sessions`,
                  {
                    'password': new_user.password,
                    'email': new_user.email
                  }
              , 
              {headers: {
                'Content-type': 'application/json'
              }
            })
                  .then((response)=>{
                    console.log('login')
                    console.log("esta es la respuesta",response.data.id)
                    store.dispatch({
                      type: 'ADD_TOKEN',
                      token: response.data.authentication_token,
                      userType: this.state.role ,
                      userId : response.data.id
                    })
                    this.state.token = response.data.authentication_token;
                    this.setState({ redirect: true, isLoading: false });

                    //window.location.reload()
                    //ReactDOM.render(<AppHomeComponent /> , document.getElementById('root'))
                    
                  })
                  .catch((error) =>{
                    swal ( "Error" ,  "correo o contraseña incorrecta" ,  "error" )
                    console.log('Failed miserably :(')
                    console.log(error)
                    this.setState({isLoading: false, error: true})
                  })

      }
    
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

    const isPassword = name.indexOf('password') !== -1;
    const isPasswordConfirm = name === 'passwordConfirm';
    if (isPasswordConfirm) {
      if (this.password.value !== this.passwordConfirm.value) {
        this.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.passwordConfirm.setCustomValidity('');
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} es un campo requerido`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} debe ser una dirección valida`;
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} debe tener más de 4 caracteres`;
      }
      return false;
    }

    error.textContent = '';
    return true;
  }

  
  

  render() {
  
     const { redirect } = this.state;
     const section = store.getState().sectionView
     if (redirect) {
       return <Redirect to={'/home/'+section} />;
     }
    
    var match = { params:{section:''}};
    if (this.state.isLoading){
      return (
        this.state.token != '' ?
        <AppHomeComponent  match={match}/>  
            :
        <div>
          <AppHeaderComponent />        
          <div className="">
        
        <div class="">
          <i class="fa fa-bicycle fa-5x bici"></i>
          <div class="back">
            <i class="fa fa-cog fa-3x spin"></i>
          </div>
          <div class="front">
            <i class="fa fa-cog fa-3x spin"></i>
          </div>
        </div>
        </div>
        <AppFooterComponent/>
        </div>
      );
    }else{
      return(
        this.state.token != '' ?
        <AppHomeComponent  match={match}/>  
            :
            <div>
        <AppHeaderComponent />
        
        <div class="container-fluid">
            <div class="panel login-square">
            <div class="panel-heading">
                <h3 class="panel-heading">Ingrese por favor ...</h3>
              </div>
              <div class="row">
                <SocialNetworkComponent className="google-btn"/>
                <div class="col-md-6">
                  <form onSubmit={this.handleSubmit} noValidate>
                  <div class="container-fluid">
                    <div class="row">
                    <div class="col-md-12">
                      <label id="emailLabel">Email</label>
                      <input id="email" name="email" onKeyPress={e => {
  if (e.key === 'Enter') e.preventDefault(); }} 
                        type="email" class="form-control input-md getIt"
                        placeholder="Email"
                        value={this.state.email} onChange={this.handleChange}
                        required/>
                      <div className="error" id="emailError" />
                      <div class="spacing"></div>

                      <label id="passwordLabel">Contraseña</label>
                      <input id="password" onKeyPress={e => {
  if (e.key === 'Enter') e.preventDefault();
}} name="password"
                        type="password" placeholder="Contraseña"
                        class="form-control input-md getIt"
                        value={this.state.password} onChange={this.handleChange}
                        pattern=".{5,}" required/>
                      <div className="error" id="passwordError" />
                      <div class="spacing">
                        <label id="checkboxLabel">Check</label>

                        <select name="role" id="role-list"
                          defaultValue={this.state.role} onChange={this.handleSmallChange}>
                          <option value="users">Usuario</option>
                          <option value="stores">Tienda</option>
                          <option value="technicians">Técnico</option>

                        </select>

                        <input type="checkbox" name="checkbox" id="checkbox" value="1" /><small> Recordarme</small><br/>
                        <div className="error" id="checkboxError" />
                        <a href="#"><small> Olvidaste la clave?</small></a><br/>
                        <Link to="/register"><small>No te has registrado?</small></Link><br/></div>
                        <Recaptcha
                          sitekey="6LfeyVsUAAAAABStZq31KWq_VcIUnwrWMOKOm5EP"
                          verifyCallback={this.callback}
                        />
                        <button id="singlebutton" name="singlebutton" class="d-none btn btn-info btn-sm pull-right">Entrar</button>
                        <div class="d-none g-recaptcha" verifyCallback={this.callback} data-sitekey="6LfeyVsUAAAAABStZq31KWq_VcIUnwrWMOKOm5EP"></div>
                    </div>
                </div>
                </div>
              </form>
              </div>
              </div>
            </div>
          </div>
        </div>      
      );
    }
  }
}

export default LoginComponent;
