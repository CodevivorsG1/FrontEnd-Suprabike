import React from 'react';
import '../css/login.css';

class LoginComponent extends React.Component {
  render() {
    return(

      <div>
      <div class="container login-square">
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-heading">Ingrese por favor ...</h3>
          </div>
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-block google-btn"><i class="fab fa-google icon-pos"></i>Ingresar con <b>Google</b></button>
              <button class="btn btn-block facebook-btn"><i class="fab fa-facebook-f icon-pos"></i>Ingresar con <b>Facebook</b></button>
              <button class="btn btn-block twitter-btn"><i class="fab fa-twitter icon-pos"></i>Ingresar con <b>Twitter</b></button>
            </div>

            <div class="col-md-6">
              <input id="textinput" name="textinput" type="text" placeholder="Ingrese Nombre de Usuario" class="form-control input-md" />
              <div class="spacing">
                <input type="checkbox" name="checkboxes" id="checkboxes-0" value="1" /><small> Recordarme</small>
              </div>
              <input id="textinput" name="textinput" type="password" placeholder="Clave" class="form-control input-md" />
              <div class="spacing"><a href="#"><small> Olvidaste la clave?</small></a><br/></div>
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
