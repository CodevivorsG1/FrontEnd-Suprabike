import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js';
import axios from 'axios';

class EditUsersComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
    this.handleChange = this.handleChange.bind(this);
  }
   handleChange(event) {
    this.state.nameUser = event.target.value
    this.setState({value: event.target.value});
  }
  componentDidMount(){
    this.setState({isLoading: true})
    axios.get('http://localhost:4000/users')
              .then((response) =>{
                  console.info(response)
                  if( response.statusText == 'OK'){
                    console.info(response.data[0])
                    this.state.user = response.data[0];
                    this.setState(response.data[0])                
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
                                 <form  data-toggle="validator">
                                      <div class=""> 
                                           
                                           <h3>Nombre</h3> 
                                           <input type="text" class="form-control required" value={this.state.user.nameUser} onChange={this.handleChange} /> 
                                      </div> 
                                      
                                       
                                      <div class="form-group"> 
                                           <h3>Teléfono</h3> 
                                           <input id="actorTel"  type="number" min="0" class="form-control required" value={this.state.user.celphoneUser} /> 
                                      </div> 
                                      <div class="form-group"> 
                                           <h3>E-mail</h3> 
                                           <input type="email" class="form-control required" value={this.state.user.email} /> 
                                      </div> 
                                      <div class="form-group"> 
                                           <h3>Password</h3> 
                                           
                                           <input type="password" class="form-control required" value="" /> 
                                           <input   type="password" class="form-control required" value="" /> 
                                      </div> 
                                      
                                    
                                      <button id="btnCrearActor" class="btn-primary btn-lg btn-primary" ><i class="fa fa-save"> </i> Guardar
                                      </button>
                                 
                                 </form>
                            </div> 
			        <div class="col-xs-12 col-sm-6 col-md-6">
			            <div class="well well-sm">
			                <div class="row">
			                    <div class="col-sm-6 col-md-4">
			                        <img src={this.state.avatar_url} alt="" class="img-rounded img-responsive" />
			                    </div>
			                    <div class="col-sm-6 col-md-8">
			                        <h4>
			                            {this.state.nameUser}</h4>
			                        
			                        <p>
                                  <i class="glyphicon glyphicon-globe"></i><a href="http://www.jquery2dotnet.com">Usuario: {this.state.nameUser}</a>
                                  <br />
			                            <i class="fas fa-envelope"></i> { this.state.email}
			                            <br />
			                            
			                            <i class="glyphicon glyphicon-gift"></i>June 02, 1988</p>
                              <a href="/home/editUser">
                                <button type="button" class="btn btn-primary">
                                        <i class="far fa-edit"></i> Guardar
                                </button>          
			                        </a>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>

	    );}
    return(
      <div>
        <AppHeaderComponent />
        Component used to extract User´s info from database
        <h1>{this.state.name}</h1>
        <h2>{this.state.location}</h2>
        <h2>login: {this.state.login}</h2>
        <img src={this.state.avatar_url}/>
      </div>
    );
  }
}

export default EditUsersComponent;
