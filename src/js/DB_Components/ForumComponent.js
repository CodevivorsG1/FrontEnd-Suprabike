import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js';
import '../../css/forum.css';
import axios from 'axios';
import store from '../store';
import PostForum from './PostForum.js';


class ForumComponent extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
	  forums: [],
	  isLoading: false
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
  render(){
	const forums = Object.values(this.state.forums)
	if (this.state.isLoading){
		return (
			<div className="loader"></div>
		)
	}else{
    return(
      <div>
		<table class=" stretch">
			<tbody>
				<tr class="card-header mb-3">
					<th class="">
						Directorio
					</th>
					<th class="header-topics">
						Temas
					</th>
					<th class="header-posts">
						Posts
					</th>
					<th class="header-lastpost">
						Ultimo Post
					</th>
				</tr>
				<tr id="forum3" class="bg-primary text-white ml-4">
					<td colspan="4">
						Foros Principales
					</td>
				</tr>
				{
				 forums.map((foro) => (
					<PostForum foroContent={foro}/>
				 ))	
				}
			</tbody>
		</table>

      </div>
	);
	}
  }
}

export default ForumComponent;