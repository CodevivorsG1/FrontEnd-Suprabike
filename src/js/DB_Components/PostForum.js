import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import '../../css/forum.css';
class PostForum extends Component {
    constructor (props){
        super (props)
        this.state = {
            user: {}
        }
    }
    componentWillMount(){
        axios.get(store.getState().globalUrl + `users/${this.props.foroContent.user_id}`,
        {
            headers:{
                'X-User-Token': store.getState().token,
                'X-User-Email': store.getState().userEmail
            }   
        }
        )
    .then((response) =>{
      this.setState({user: response.data})
    })
    .catch((e) =>{
      console.log("error cities, ", e)
    })
    }
    viewComments = () =>{
     this.props.showComment(this.state.user, this.props.foroContent)
    }
    render() {
        const len = this.props.foroContent.comments.length;
        let image = this.state.user.image;
        return (
            <div class="row comment">
                <div class="col-lg-12">
                    <div class="col-lg-4">
                        <a class="avatar h-left" href="https://vb5.pixelgoose.com/member/5-indosystem">
                                        {image === null ?
                            <img src="https://static1.squarespace.com/static/55198f1ce4b00c2cab3e5e30/t/5526d500e4b009f3ec94b422/1428608282728/600x600%26text%3Dprofile+img.gif?format=300w" />
                            :
                            <img src={image} />
                            }
                        </a>
                        
                    </div>  
                    <div class="col-lg-8">

                        <h3 class="comment">{this.props.foroContent.topic}</h3>
                        <a class="lastpost-title" href="#" onClick={this.viewComments}>
                            <i class="fas fa-comments"></i> {len } Comentarios: 
                        </a>

                        

                        <div class="lastpost-info">
                            <p class="lastpost-title ellipsis">
                                {this.state.user.email}
                            </p>
                            <div class="pull-right">
                                by
                                <a href="https://vb5.pixelgoose.com/member/5-indosystem">
                                   <i class="fas fa-user"></i> {this.state.user.nameUser}
                                </a>
                            </div>
                            <div class="lastpost-date post-date">
                                08-22-2017, 02:55 AM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostForum;