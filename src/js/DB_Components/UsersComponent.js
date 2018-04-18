import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js';
import axios from 'axios';

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
      telephone:''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/users')
              .then((response) =>{
                  console.info(response)
                  if( response.statusText == 'OK'){
                    console.info(response.data[0])
                    this.state = response.data[0];
                    this.setState(response.data[0])                
                  }
                console.log(this.state);
              })
              .catch((error) => {
                console.log("fuck")
              })
  }



  render(){
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
			                            {this.state.name}</h4>
			                        <small><cite title="San Francisco, USA">{this.state.location} <i class="glyphicon glyphicon-map-marker">
			                        </i></cite></small>
			                        <p>
			                            <i class="glyphicon glyphicon-envelope"></i>{this.state.email}
			                            <br />
			                            <i class="glyphicon glyphicon-globe"></i><a href="http://www.jquery2dotnet.com">user: {this.state.nameUser}</a>
			                            <br />
			                            <i class="glyphicon glyphicon-gift"></i>June 02, 1988</p>

			                        <div class="btn-group">
			                            <button type="button" class="btn btn-primary">
			                                Social</button>
			                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
			                                <span class="caret"></span><span class="sr-only">Social</span>
			                            </button>
			                            <ul class="dropdown-menu" role="menu">
			                                <li><a href="#">Twitter</a></li>
			                                <li><a href="https://plus.google.com/+Jquery2dotnet/posts">Google +</a></li>
			                                <li><a href="https://www.facebook.com/jquery2dotnet">Facebook</a></li>
			                                <li class="divider"></li>
			                                <li><a href="#">Github</a></li>
			                            </ul>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>

	    );
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
