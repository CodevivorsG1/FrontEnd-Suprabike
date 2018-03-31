import React from 'react';
import AppHeaderComponent from './AppHeaderComponent.js';
import '../css/register.css';

class RegisterComponent extends React.Component {
  render() {
    return (
      <div>
        <AppHeaderComponent />
        <div class="container-fluid">
          <div class="panel register-square">
            <div class="panel-heading">
              <h3 class="panel-heading">Registrese en SupraBikes</h3>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="Nombres"/>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Apellidos"/>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email"/>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="email" name="email" id="email" class="form-control input-sm" placeholder="Contraseña"/>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="password" name="password" id="password" class="form-control input-sm" placeholder="Confirma Contraseña"/>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4 col-md-offset-4">
                <input type="submit" value="Register" class="btn btn-info btn-block"/>
              </div>
            </div>


          </div>

        </div>
      </div>



    );
  }
}

export default RegisterComponent;
