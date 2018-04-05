import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js';
import axios from 'axios';

class UserComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      avatar_url:'',
      created_at:'',
      location: '',
      login: '',
      name:'',
      surnames:'',
      gender:'',
      cellphone:'',
      telephone:''
    }
  }

  handleData(data){
    console.log(data);
    for(var x in data){
      console.log(x);
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/maecapozzi')
              .then((response) =>{
                for(var x in this.state){
                  if( response.data.hasOwnProperty(x)){
                    this.setState({
                        [x] : response.data[x]
                    })
                  }
                }
                console.log(this.state);
              })
              .catch((error) => {
                console.log("fuck")
              })
  }



  render(){
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
