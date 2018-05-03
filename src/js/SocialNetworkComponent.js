import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import {GoogleAPI, GoogleLogin} from 'react-google-login';
import axios from 'axios';
import store from './store';
import '../css/google.css';

class SocialNetworkComponent extends Component {
    constructor (props) {
        super(props)
    }
    
    verifyAccount = (userEmail, userToken) =>{
        axios.post( store.getState().globalUrl + 'auth_google_token',
                  {
                    'id_token': userToken,
                    'email': userEmail
                  }
              , 
              {headers: {
                'Content-type': 'application/json'
              }
            })
    .then((response) =>
    (
     console.log("respuesta google", response)
     
    ))
    .catch((error)=>{
        console.log("Error google", error)
    })
    }
    responseGoogle = (googleUser) => {
      const userEmail = googleUser.w3.U3;
      const userToken = googleUser.getAuthResponse().id_token;
      const userName = googleUser.w3.ofa;
      const userSurname = googleUser.w3.wea;
      console.log("cuenta de google", googleUser);
      this.props.history.push(`/registergoogle/${userName}/${userSurname}/${userEmail}`)     
      this.verifyAccount(userEmail, userToken)
   
    }

    render() {
        return (
            
            <div class="col-md-6">
				<div>
                <p className="text-center"> Solo para usuarios </p>
				<GoogleLogin
                    clientId="265848036385-8nb02cph4d85ca74vakqq463ggif52gc.apps.googleusercontent.com"
                    buttonText="Ingresar con Google"
                    className="btnSocial google-btn btn btn-block"  
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
				</div>
            </div>
        );
    }
}

export default withRouter(SocialNetworkComponent);
