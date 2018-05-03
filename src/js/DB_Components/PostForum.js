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
        axios.get(store.getState().globalUrl + `users/${this.props.foroContent.user_id}`)
    .then((response) =>{
      this.setState({user: response.data})
    })
    .catch((e) =>{
      console.log("error cities, ", e)
    })
    }
    render() {
        const len = this.props.foroContent.comments.length;
        let image = this.state.user.image;
        return (
            <tr id="forum15" class="forum-item main new forum-item" data-channel-id="15" data-lastcontent="1503370558" data-readtime="0">
                <td class="cell-forum">
                    <img src="https://cdn3.iconfinder.com/data/icons/web-15/128/RSSvgSpeechBubble-2-512.png"/>
                    <div class="forum-wrapper"></div>
                        <div class="forum-info">
                            <a class="forum-title" href="https://vb5.pixelgoose.com/forum/main-forum/main-subforum">
                                General
                            </a>
                        </div>

                    <div class="forum-desc">
                        {this.props.foroContent.topic}
                    </div>
                    <div class="rx-forum-stats h-hide">
                        Comentarios: {len > 1 ? 'Si' : 'No'}
                    </div>
                    <div class="rx-lastpost-info h-hide">
                        <a class="lastpost-title" href="https://vb5.pixelgoose.com/forum/main-forum/main-subforum/test-subforum-01/221-testimony#post221">
                            Ver mas...
                        </a>
                    </div>
                </td>
                <td class="posts-count">
                    {len}
                </td>
                <td class="lastpost">
                    <div class="lastpost-wrapper">
                        <a class="avatar h-left" href="https://vb5.pixelgoose.com/member/5-indosystem">
                            {image === null ?
                            <img src="https://static1.squarespace.com/static/55198f1ce4b00c2cab3e5e30/t/5526d500e4b009f3ec94b422/1428608282728/600x600%26text%3Dprofile+img.gif?format=300w" />
                            :
                            <img src={image} />
                            }
                            
                        </a>
                        <div class="lastpost-info">
                            <p class="lastpost-title ellipsis">
                                {this.state.user.email}
                            </p>
                            <div class="lastpost-by">
                                by
                                <a href="https://vb5.pixelgoose.com/member/5-indosystem">
                                    {this.state.user.nameUser}
                                </a>
                            </div>
                            <div class="lastpost-date post-date">
                                08-22-2017, 02:55 AM
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default PostForum;