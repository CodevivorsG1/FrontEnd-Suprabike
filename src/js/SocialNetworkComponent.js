import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import {GoogleAPI, GoogleLogin} from 'react-google-login';
import axios from 'axios';
import store from './store';
import '../css/google.css';
import '../css/loader.css';
import swal from 'sweetalert';

class SocialNetworkComponent extends Component {
    constructor (props) {
        super(props)
        this.state ={
            isLoading: false
        }
    }
    logingoogle = (response) =>{
            store.dispatch({
              type: 'ADD_TOKEN',
              token: response.data.authentication_token,
              userType: 'users',
              userId: response.data.id
            })
            this.props.history.push('/home/undefined')
    }
    verifyAccount = (userEmail, userToken, userName, userSurname) =>{
        axios.post( store.getState().globalUrl + 'auth_google_token',
                  {
                    "id_token": userToken,
                    "email": userEmail
                  }
              , 
              {headers: {
                'Content-type': 'application/json'
              }
            })
    .then((response) =>
    {
     this.setState({isLoading: false})
     const userName = response.data.nameUser
     console.log("respuesta google", response)   
     if (userName == "yourname"){
        this.props.history.push(`/registergoogle/${userToken}/${userName}/${userSurname}/${userEmail}/${response.data.id}`)
     }else{
        this.logingoogle(response)
     }
     
    })
    .catch((error)=>{
        this.setState({isLoading: false})
        swal("Error", "Revise la direccion de correo o ya hay una cuenta con ese email" +  error)
    })
    }
    responseGoogle = (googleUser) => {
      const userEmail = googleUser.w3.U3;
      const userToken = googleUser.getAuthResponse().id_token;
      const userName = googleUser.w3.ofa;
      const userSurname = googleUser.w3.wea;
      console.log("cuenta de google", { "id_token": userToken, "email": userEmail});
      this.setState({isLoading: true})
      this.verifyAccount(userEmail, userToken, userName, userSurname)
      
      
   
    }
    badResponseGoogle = (response) =>{
        console.log("error google",response)
    }
    render() {
        if (this.state.isLoading){
            return(
                <div className="loader"></div>
            )
        }else{
        return (
            
            <div class="col-md-6">
				<div>
                <p className="text-center"> Solo para usuarios </p>
				<GoogleLogin
                    clientId="533966985417-qfdt7qfclu4h9si70n693fas25n1p4u1.apps.googleusercontent.com"
                    buttonText="Ingresar con Google"
                    className="btnSocial google-btn btn btn-block"  
                    onSuccess={this.responseGoogle}
                    onFailure={this.badResponseGoogle}
                />
				</div>
            </div>
        );
        }
    }
}

export default withRouter(SocialNetworkComponent);
