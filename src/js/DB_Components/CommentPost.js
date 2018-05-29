import React, { Component } from 'react';
import CommentComponent from './CommentComponent';
import store from '../store';
import swal from 'sweetalert';
import axios from 'axios';
import '../../css/closeButton.css';

class CommentPost extends Component {
    reload = () =>{
        window.location.reload();
    }
    newComment = () =>{
        swal("Ingrese el nuevo comentario " , {
            content: "input",
        })
        .then((message) =>{
            console.log("el mensaje es ", message)
            const comment={
                "description": message,
                "user_id": store.getState().userId,
                "forum_id": this.props.foroContent.id
            }
            axios.post(store.getState().globalUrl + `forums/${this.props.foroContent.id}/comments`, comment,
            {
                headers:{
                    'X-User-Token': store.getState().token,
                    'X-User-Email': store.getState().userEmail
                }
            }
            )
            .then((response)=>{
                this.reload()
            })
        })
    }
    render() {
        console.log("Comentarios a un foro",this.props.foroContent.comments)
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <img src={
                            this.props.user.image !== null ? 
                            store.getState().globalUrl + this.props.user.image
                            : '../../img/unknown.jpg' 
                            } alt="Imagen de perfil"
                        />
                        <p>{this.props.user.nameUser}</p>
                    </div>

                    <div className="col-sm-7">
                        <h3>{this.props.foroContent.topic}</h3>
                    </div>
                    <div className="col-sm-2 close-div">
                        <span className="close-button" aria-hidden="true" onClick={this.reload}>&times;</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <button className="btn btn-info btn-sm" onClick={this.newComment}>Agregar comentario</button>
                    </div>
                </div> 
                <div className="row">
                    {
                    this.props.foroContent.comments.map((comment) =>(
                        <CommentComponent key={comment.id} comment={comment}/>
                    ))
                    }
                </div>
            </div>
        );
    }
}

export default CommentPost;