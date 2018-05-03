import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js';
import UploadZoneImages from '../Upload_Components/UploadZoneImages.js'
import axios from 'axios';
import store from '../store';

class UserComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      avatar_url:'/img/unknown.jpg',
      created_at:'',
      location: 'San Francisco, USA',
      login: '',
      name:'',
      surnames:'',
      gender:'',
      cellphone:'',
      telephone:'',
      isLoading: false
    }
  }

  componentDidMount(){
    this.setState({isLoading: true})
    axios.get(store.getState().globalUrl + 'users')
              .then((response) =>{
                  console.info(response)
                  if( response.statusText == 'OK'){
                    console.info(response.data[0])
                    this.state = response.data[0];
                    this.setState(response.data[0])
                  }
                this.setState({ isLoading: false})
                console.log(this.state);
              })
              .catch((error) => {
                console.log("fuck user")
                this.setState({ isLoading: false})
              })
      axios.get(store.getState().globalUrl + 'cities')
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
			        <div class="col-xs-12 col-sm-6 col-md-6">
			            <div class="well well-sm">
			                <div class="row">
			                    <div class="col-sm-6 col-md-4">
			                        <img src={this.state.avatar_url} alt="" class="img-rounded img-responsive" />
			                    </div>
			                    <div class="col-sm-6 col-md-8">
			                        <h4>
			                            {this.state.nameUser}</h4>
			                        <small><cite title="San Francisco, USA"> {this.state.city} <i class="glyphicon glyphicon-map-marker">
			                        </i></cite></small>
			                        <p>
                                  <i class="glyphicon glyphicon-globe"></i><a href="http://www.jquery2dotnet.com">Usuario: {this.state.nameUser}</a>
                                  <br />
			                            <i class="fas fa-envelope"></i> { this.state.email}
                                  <br />
                                  <i class="fas fa-phone"></i> { this.state.celphoneUser}
			                            <br />

			                            <i class="glyphicon glyphicon-gift"></i>June 02, 1988</p>                              
                              <a href="/home/editUser">
                                <button type="button" class="btn btn-primary">
                                        <i class="far fa-edit"></i> Editar
                                </button>
			                        </a>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
          <UploadZoneImages />
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

export default UserComponent;
