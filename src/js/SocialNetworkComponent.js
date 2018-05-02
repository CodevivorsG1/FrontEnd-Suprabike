import React, { Component } from 'react';
import {GoogleAPI, GoogleLogin} from 'react-google-oauth';
import axios from 'axios';
import store from './store';
class SocialNetworkComponent extends Component {
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
      console.log("cuenta de google", userEmail, userToken)
      this.verifyAccount(userEmail, userToken)
   
    }

    render() {
        return (
            <div class="col-md-6">
                <GoogleAPI className="GoogleLogin" clientId="533966985417-qfdt7qfclu4h9si70n693fas25n1p4u1.apps.googleusercontent.com">
				<div>
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
                <button class="btn btn-block facebook-btn btnSocial"><i class="fab fa-facebook-f icon-pos"></i>Ingresar con <b>Facebook</b></button>
                <button class="btn btn-block twitter-btn btnSocial"><i class="fab fa-twitter icon-pos"></i>Ingresar con <b>Twitter</b></button>
            </div>
        );
    }
}

export default SocialNetworkComponent;