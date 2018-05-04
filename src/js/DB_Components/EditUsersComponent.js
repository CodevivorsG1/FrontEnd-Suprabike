import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js';
import axios from 'axios';
import swal from 'sweetalert';
import store from '../store'
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';

class EditUsersComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "id":0,
      "user":{
        "email": "",
        "nameUser": "",
        "surnameUser": "", 
        "genderUser": "", 
        "phonenumUser": "", 
        "celphoneUser": "",
        "city_id": ""
      },
      cities:[]
    }
    this.handleChangeNameUser = this.handleChangeNameUser.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleChangePassCon = this.handleChangePassCon.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
   handleChangeNameUser(event) {
    var newState = this.state;
    newState.user.nameUser = event.target.value
    this.setState(newState);
  }
  handleChangePhone(event) {
     var newState = this.state;
    newState.user.celphoneUser = event.target.value
    this.setState(newState);
    
  }
  handleChangeEmail(event) {
    var newState = this.state;
    newState.user.email = event.target.value
    this.setState(newState); 
  }
  handleChangePass(event) {
    var newState = this.state;
    newState.user.password = event.target.value
    this.setState(newState);
  }
  handleChangePassCon(event) {
    var newState = this.state;
    newState.user.password_confirmation = event.target.value
    this.setState(newState);
  }
  componentDidMount(){
    this.setState({isLoading: true})
    axios.get(store.getState().globalUrl + `${store.getState().userType}/${store.getState().userId}`)
              .then((response) =>{   
                this.setState({ user: response.data})                
                this.setState({ isLoading: false})
              })
              .catch((error) => {
                console.log("fuck user")
                this.setState({ isLoading: false})
              })
      axios.get(store.getState().globalUrl + 'cities')
              .then((response) =>{
                console.info("ciudades edición",response.data)
                this.setState({cities: response.data})                  
              })
              .catch((error) => {
                console.log("fuck")
              })
  }
  saveUser(){
    this.setState({isLoading: true})
    axios.put(store.getState().globalUrl+`${store.getState().userType}/${store.getState().userId}`,
                this.state.user)
              .then((response) =>{
                  console.info("respuesta edicion",response)
                  //this.setState(response.data[0])    
                  this.setState({ redirect: true, isLoading: false });
                  swal("Correcto!", "Usuario editado correctamente", "success");
                
                console.log(this.state);
              })
              .catch((error) => {
                console.log(error)
                swal ( "Error" ,  "no se ha editado el usuario" ,  "error" )
                this.setState({ isLoading: false})
              })
  }


  render(){
    const { redirect } = this.state;
     
     if (redirect) {
       return <Redirect to={'/home/user'} />;
     }
    if (this.state.isLoading){
      
      return(
        <div className="loader"></div>
      );
    }else{
    return (
			<div class="container">
			    <div class="row">
          <div class="col-lg-12 panel-body"> 
                                 <div   >
                                      <div class=""> 
                                           
                                           <h3>Nombre</h3> 
                                           <input type="text" class="form-control " value={this.state.user.nameUser} onChange={this.handleChangeNameUser} required /> 
                                      </div> 
                                      
                  
                                      <div class="form-group"> 
                                           <h3>Teléfono</h3> 
                                           <input id="actorTel" required type="number" min="0" class="form-control required" value={this.state.user.celphoneUser} onChange={this.handleChangePhone} /> 
                                      </div> 
                                      <div class="form-group"> 
                                           <h3>E-mail</h3> 
                                           <input type="email" required class="form-control required" value={this.state.user.email} onChange={this.handleChangeEmail}/> 
                                      </div> 
                                      <div class="form-group"> 
                                           <h3>Password</h3> 
                                           
                                           <input type="password" required class="form-control required" value={this.state.user.password} onChange={this.handleChangePass}/> 
                                           <input   type="password" required class="form-control required" value={this.state.user.password_confirmation} onChange={this.handleChangePassCon}/> 
                                      </div> 
                                      
                                    
                                      <button onClick={this.saveUser} class="btn-primary btn-lg btn-primary" ><i class="fa fa-save"> </i> Guardar
                                      </button>
                                 
                                 </div>
                            </div> 
			        
			    </div>
			</div>

	    );}
    
  }
}

export default EditUsersComponent;
