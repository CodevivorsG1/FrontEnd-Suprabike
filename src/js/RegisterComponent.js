import React from 'react';
import AppHeaderComponent from './AppHeaderComponent.js';
import '../css/register.css';
import axios from 'axios';

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: '',
      surnames: '',
      email: '',
      password: '',
      passwordConfirm: '',
      cellphone: '',
      telephone: '',
      gender: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSmallChange = this.handleSmallChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();

    console.log('Component state:', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('Form is invalid: do not submit');
    } else {
      console.log('Form is valid: submit');

      var new_user = this.state

      axios.post('https://suprabikes-backend.herokuapp.com/user/',
                  {new_user})
                  .then(function(response){
                    console.log('Success ...(?)')
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
        this.passwordConfirm.setCustomValidity('Las contraseñas no coinciden.');
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
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Las contraseñas no coinciden';
      }
      return false;
    }

    error.textContent = '';
    return true;
  }


  render() {
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
                    <label id="emailLabel">Email</label>
                    <input type="email" name="email"
                     class="form-control input-sm getIt"
                     value={this.state.email} onChange={this.handleChange}
                     placeholder="Email" required/>
                   <div className="error" id="emailError"/>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="passwordLabel">Contraseña</label>
                    <input type="password" name="password"
                     class="form-control input-sm getIt" pattern=".{5,}"
                     ref={password => this.password = password}
                     value={this.state.password} onChange={this.handleChange}
                     placeholder="Contraseña" required/>
                    <div className="error" id="passwordError" />
                  </div>

                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="passwordConfirmLabel">Confirma Contraseña</label>
                    <input type="password" name="passwordConfirm"
                     class="form-control input-sm required"
                     ref={passwordConfirm => this.passwordConfirm = passwordConfirm}
                     value={this.state.passwordConfirm} onChange={this.handleChange}
                     placeholder="Confirma Contraseña" required/>
                    <div className="error" id="passwordConfirmError" />
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

export default RegisterComponent;
