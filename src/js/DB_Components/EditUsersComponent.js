import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js';
import axios from 'axios';
import swal from 'sweetalert';

class EditUsersComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "id":0,
      "user":{
        "email": "",
        "password": "",
        "password_confirmation": "",
        "idUser": "",
        "nameUser": "",
        "surnameUser": "", 
        "genderUser": "", 
        "phonenumUser": "", 
        "celphoneUser": "",
        "city_id": ""
      }
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
    axios.get('http://localhost:4000/users')
              .then((response) =>{
                  console.info(response)
                  if( response.statusText == 'OK'){
                    console.info(response.data[0])
                    this.state.user = response.data[0];
                    this.state.id = response.data[0].id;
                    this.setState({ id: response.data[0].id})                
                  }
                this.setState({ isLoading: false})
                console.log(this.state);
              })
              .catch((error) => {
                console.log("fuck user")
                this.setState({ isLoading: false})
              })
      axios.get('http://localhost:4000/cities')
              .then((response) =>{
                  console.info(response)
                  if( response.statusText == 'OK'){
                    console.info(response.data[0])
                    this.state.city = response.data[0].name_city;
                    this.setState(response.data[0])                
                  }
                console.log(this.state);
              })
              .catch((error) => {
                console.log("fuck")
              })
  }
  saveUser(){
    this.setState({isLoading: true})
    axios.put('http://localhost:4000/users/'+this.state.id,{user:this.state.user})
              .then((response) =>{
                  console.info(response)
                  if( response.statusText == 'OK'){
                    console.info(response.data[0])
                    this.state = response.data[0];
                    this.setState(response.data[0])    
                    this.setState({ isLoading: false})
                    swal("Correcto!", "Usuario editado correctamente", "success");
                  }
                
                console.log(this.state);
              })
              .catch((error) => {
                console.log(error)
                swal ( "Error" ,  "no se ha editado el usuario" ,  "error" )
                this.setState({ isLoading: false})
              })
  }


  render(){
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
