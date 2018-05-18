import React from 'react';
import '../../css/register.css';
import axios from 'axios';
import store from '../store';


class CommentComponent extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      user:{}
    }
  }
  componentDidMount(){
    axios.get(store.getState().globalUrl + `users/${this.props.comment.user_id}`)
    .then((response) =>{
      this.setState({user: response.data})
    })
    .catch((e) =>{
      console.log("error loading user, ", e)
    })
  }
  render(){
    console.log("esto es una prueba de comentarios de un foro", this.props.comment)
    return(
      <div class="container-fluid">
        <div className="row">
          <div class="col-md-2">
            <img src={
              this.state.user.image !== null ? 
              store.getState().globalUrl + this.state.user.image
              : '../../img/unknown.jpg' 
              } alt="Imagen de perfil"
            />
            <p>{this.state.user.nameUser } </p>
          </div>
          <div class="col-md-10">
            <p>{this.props.comment.description}</p>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default CommentComponent;
