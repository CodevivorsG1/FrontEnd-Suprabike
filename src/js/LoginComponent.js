import React from 'react';
import '../css/login.css';
import {Link} from 'react-router-dom';
import AppHeaderComponent from './AppHeaderComponent.js';

class LoginComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e){
    e.target.classList.add('active');

    this.setState({
      [e.target.name]: e.target.value
    });

    this.showInputError(e.target);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('Component state:', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('Form is invalid: do not submit');
    } else {
      console.log('Form is valid: submit');
    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
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
              <input id="textinput" name="email"
                 type="email" class="form-control input-md"
                 placeholder="Email"
                 value={this.state.email} onChange={this.handleChange}
                 required/>
               <div className="error" id="emailError" />
              <div class="spacing"></div>

              <label id="passwordLabel">Contraseña</label>
              <input id="textinput" name="password"
                 type="password" placeholder="Contraseña"
                 class="form-control input-md"
                 value={this.state.password} onChange={this.handleChange}
                 pattern=".{5,}" required/>
              <div className="error" id="passwordError" />
              <div class="spacing"><input type="checkbox" name="checkboxes" id="checkboxes-0" value="1" /><small> Recordarme</small><br/>
                <a href="#"><small> Olvidaste la clave?</small></a><br/>
                <Link to="/register"><small>No te has registrado?</small></Link><br/></div>
                <button id="singlebutton" name="singlebutton" class="btn btn-info btn-sm pull-right">Entrar</button>
            </div>

          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default LoginComponent;
