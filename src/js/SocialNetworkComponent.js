import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import {GoogleAPI, GoogleLogin} from 'react-google-oauth';
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
                <GoogleAPI className="GoogleLogin" clientId="533966985417-qfdt7qfclu4h9si70n693fas25n1p4u1.apps.googleusercontent.com">
				<div>
                <p className="text-center"> Solo para usuarios </p>
				<GoogleLogin 
                    fetchBasicProfile={true}
                    height="20px"
					className="btnSocial google-btn btn btn-block"  
					text="Ingresar con Google"
					backgroundColor="#006594d0"
					access="offline" 
					scope="email profile"
					onLoginSuccess={this.responseGoogle} 
					onFailure={this.responseGoogle}
				/>
				</div>
			</GoogleAPI>
            </div>
        );
    }
}

export default withRouter(SocialNetworkComponent);
