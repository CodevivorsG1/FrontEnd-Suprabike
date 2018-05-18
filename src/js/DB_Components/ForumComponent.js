import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js';
import '../../css/forum.css';
import axios from 'axios';
import swal from 'sweetalert';
import store from '../store';
import PostForum from './PostForum.js';
import CommentPost from './CommentPost.js';


class ForumComponent extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
	  forums: [],
	  isLoading: false,
	  user: {},
	  hideForum: false,
	  foroContent: {}
    }   
    
  }
  componentDidMount(){
	this.setState({isLoading:true})
	axios.get(store.getState().globalUrl + 'forums')
              .then((response) =>{

              	this.setState({
					  forums: Object.values(response.data),
					  isLoading: false
					});
                
                console.log("respuesta de foros", response.data);
              })
              .catch((error) => {
				console.log("fuck")
				this.setState({isLoading:false})
              })
  }
  showComment = (user, foroContent) =>{
	this.setState({
		user,
		foroContent,
		hideForum: true
	});
  } 
  newForum = () =>{
	swal("Ingrese su nueva pregunta " , {
		content: "input",
	})
	.then((message)=>{
		const forum = {
			"topic": message,
			"user_id": store.getState().userId
		}
		axios.post(store.getState().globalUrl + 'forums', forum)
		.then((response)=>{
			window.location.reload()
		})
		.catch((error) =>{
			swal("Error, intente de nuevo")
		})
	})
  }
  showContent = () =>{
	const forums = Object.values(this.state.forums)
	  if (this.state.hideForum){
		  return (
			  <CommentPost user={this.state.user} foroContent={this.state.foroContent} />
		  );
	  }else{
		return (
			<div class="" >
				<div class="row">
					<button class="btn btn-primary my-2 my-sm-0 mr-sm-2" onClick={this.newForum}>
					Nuevo foro
				</button>	
				</div>
				<div class="forum">
					{
					forums.map((foro) => (
						
							<PostForum key={foro.id}foroContent={foro} showComment={this.showComment}/>
						
						
					))	
					}
				</div>				
			</div>
		);
	
	  }
  }
  render(){
	
	if (this.state.isLoading){
		return (
			<div className="loader"></div>
		)
	}else{
    return(
      this.showContent()
	);
	}
  }
}

export default ForumComponent;