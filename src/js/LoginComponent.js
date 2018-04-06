import React from 'react';
import '../css/login.css';
import {Link} from 'react-router-dom';
import AppHeaderComponent from './AppHeaderComponent.js';
import store from './store'
import axios from 'axios';

class LoginComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      role:'user'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSmallChange = this.handleSmallChange.bind(this);
  }

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
    e.preventDefault();

    console.log('Component state:', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('Form is invalid: do not submit');
    } else {
      console.log('Form is valid: submit');

      var new_user = this.state

      axios.post('https://suprabikes-backend.herokuapp.com/sessions/',
                  {new_user})
                  .then(function(response){
                    console.log('Authenticated ...(?)')
                    console.log(response)
                  })
                  .catch(function(error){
                    console.log('Failed miserably :(')
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
    return(
      <div>
      <AppHeaderComponent />
      <form onSubmit={this.handleSubmit} noValidate>
        <div class="container-fluid">
          <div class="panel login-square">
            <div class="panel-heading">
              <h3 class="panel-heading">Ingrese por favor ...</h3>
            </div>
            <div class="row">
              <div class="col-md-6">
                <button class="btn btn-block google-btn btnSocial"><i class="fab fa-google icon-pos"></i>Ingresar con <b>Google</b></button>
                <button class="btn btn-block facebook-btn btnSocial"><i class="fab fa-facebook-f icon-pos"></i>Ingresar con <b>Facebook</b></button>
                <button class="btn btn-block twitter-btn btnSocial"><i class="fab fa-twitter icon-pos"></i>Ingresar con <b>Twitter</b></button>
              </div>

              <div class="col-md-6">
                <label id="emailLabel">Email</label>
                <input id="email" name="email"
                   type="email" class="form-control input-md getIt"
                   placeholder="Email"
                   value={this.state.email} onChange={this.handleChange}
                   required/>
                 <div className="error" id="emailError" />
                <div class="spacing"></div>

                <label id="passwordLabel">Contraseña</label>
                <input id="password" name="password"
                   type="password" placeholder="Contraseña"
                   class="form-control input-md getIt"
                   value={this.state.password} onChange={this.handleChange}
                   pattern=".{5,}" required/>
                <div className="error" id="passwordError" />
                <div class="spacing">
                  <label id="checkboxLabel">Check</label>

                  <select name="role" id="role-list"
                    defaultValue={this.state.role} onChange={this.handleSmallChange}>
                    <option value="user">Usuario</option>
                    <option value="store">Tienda</option>
                    <option value="tech">Técnico</option>

                  </select>

                  <input type="checkbox" name="checkbox" id="checkbox" value="1" /><small> Recordarme</small><br/>
                  <div className="error" id="checkboxError" />
                  <a href="#"><small> Olvidaste la clave?</small></a><br/>
                  <Link to="/register"><small>No te has registrado?</small></Link><br/></div>
                  <button id="singlebutton" name="singlebutton" class="btn btn-info btn-sm pull-right">Entrar</button>
              </div>

            </div>
          </div>
        </div>
      </form>
      </div>
    );
  }
}

export default LoginComponent;
