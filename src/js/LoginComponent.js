import React from 'react';
import '../css/login.css';
import {Link} from 'react-router-dom';
import AppHeaderComponent from './AppHeaderComponent.js';
import store from './store'

class LoginComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      token: " vacio"
    }
    store.subscribe(() => {
      this.setState({
        token: store.getState().token
      })
    });
  }
  login(){
    console.log('token'+ this.state.token)
    var tok = 'ds5f4da5fd'
    store.dispatch({
      type: 'ADD_TOKEN',
      token: tok
    })
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
              <input id="textinput" name="textinput" type="text" placeholder="Ingrese Nombre de Usuario" class="form-control input-md" />
              <div class="spacing">
                <input type="checkbox" name="checkboxes" id="checkboxes-0" value="1" /><small> Recordarme</small>
              </div>
              <input id="textinput" name="textinput" type="password" placeholder="Clave" class="form-control input-md" />
              <div class="spacing"><a href="#"><small> Olvidaste la clave?</small></a><br/>
                <Link to="/register"><small>No te has registrado?</small></Link><br/></div>
                <button id="singlebutton" name="singlebutton" onClick={ ()=> this.login() } class="btn btn-info btn-sm pull-right">Entrar</button>
            </div>

          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default LoginComponent;
