import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js';
import '../../css/forum.css'
import axios from 'axios';
import store from '../store';


class ForumComponent extends React.Component {
	constructor() {
    super();
    
    this.state = {
      forums: []
    }   
    
  }
  componentDidMount(){
    axios.get(store.getState().globalUrl + 'forums')
              .then((response) =>{
              	this.state.forums = response;
                
                console.log(this.state);
              })
              .catch((error) => {
                console.log("fuck")
              })
  }
  render(){
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
					Canal general de Suprabikes
				</div>
				<div class="rx-forum-stats h-hide">
					Temas: 3 Posts: 3
				</div>
				<div class="rx-lastpost-info h-hide">
					Ultimo Post:
					<a class="lastpost-title" href="https://vb5.pixelgoose.com/forum/main-forum/main-subforum/test-subforum-01/221-testimony#post221">
						Disc-brakes vs. V-brakes
					</a>
				</div>
			</td>
			<td class="topics-count">
				3
			</td>
			<td class="posts-count">
				3
			</td>
			<td class="lastpost">
				<div class="lastpost-wrapper">
					<a class="avatar h-left" href="https://vb5.pixelgoose.com/member/5-indosystem">
						<img src="https://static1.squarespace.com/static/55198f1ce4b00c2cab3e5e30/t/5526d500e4b009f3ec94b422/1428608282728/600x600%26text%3Dprofile+img.gif?format=300w" />
					</a>
					<div class="lastpost-info">
						<a class="lastpost-title ellipsis" href="https://vb5.pixelgoose.com/forum/main-forum/main-subforum/test-subforum-01/221-testimony#post221">
							Disc-brakes vs. V-brakes
						</a>
						<div class="lastpost-by">
							by
							<a href="https://vb5.pixelgoose.com/member/5-indosystem">
								Momon2345
							</a>
						</div>
						<div class="lastpost-date post-date">
							08-22-2017, 02:55 AM
						</div>
					</div>
				</div>
			</td>
		</tr>

		<tr id="forum16" class="forum-item main new forum-item" data-channel-id="16" data-lastcontent="1522707876" data-readtime="0">
			<td class="cell-forum">
        <img src="https://cdn3.iconfinder.com/data/icons/web-15/128/RSSvgSpeechBubble-2-512.png"/>
				<div class="forum-wrapper">
					<div class="forum-info">
						<a class="forum-title" href="https://vb5.pixelgoose.com/forum/main-forum/second-subforum">
							Sugerencias
						</a>
					</div>
				</div>
				<div class="forum-desc">
					Dinos como mejorar
				</div>
				<div class="rx-forum-stats h-hide">
					Temas: 166 Posts: 166
				</div>
				<div class="rx-lastpost-info h-hide">
					Last Post:
					<a class="lastpost-title" href="https://vb5.pixelgoose.com/forum/main-forum/second-subforum/245-vbulletin-5-4-1-connect-is-now-available#post245">
						Foro no manda mensajes
					</a>
				</div>
			</td>
			<td class="topics-count">
				166
			</td>
			<td class="posts-count">
				166
			</td>
			<td class="lastpost">
				<div class="lastpost-wrapper">
					<a class="avatar h-left" href="https://vb5.pixelgoose.com/member/2-support">
						<img src="http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg" alt="Support" />
					</a>
					<div class="lastpost-info">
						<a class="lastpost-title ellipsis" href="https://vb5.pixelgoose.com/forum/main-forum/second-subforum/245-vbulletin-5-4-1-connect-is-now-available#post245">
							Foro no manda mensajes
						</a>
						<div class="lastpost-by">
							by
							<a href="https://vb5.pixelgoose.com/member/2-support">
								Daniel_2906
							</a>
						</div>
						<div class="lastpost-date post-date">
							04-02-2018, 10:24 PM
						</div>
					</div>
				</div>
			</td>
		</tr>

		<tr id="forum17" class="bg-primary text-white">
			<td colspan="4">
					Foros Recientes
			</td>
		</tr>
		<tr id="forum18" class="forum-item main new forum-item" data-channel-id="18" data-lastcontent="1503311387" data-readtime="0">
			<td class="cell-forum">
        <img src="https://cdn3.iconfinder.com/data/icons/web-15/128/RSSvgSpeechBubble-2-512.png"/>
				<div class="forum-wrapper">
					<div class="forum-info">
						<a class="forum-title" href="https://vb5.pixelgoose.com/forum/test-forum/working-subforum">
							Ciclovia Nocturna
						</a>
					</div>
				</div>
				<div class="forum-desc">
					Programa salidas con otros usuarios
				</div>
				<div class="rx-forum-stats h-hide">
					Tema: 5 Posts: 15
				</div>
				<div class="rx-lastpost-info h-hide">
					Last Post:
					<a class="lastpost-title" href="https://vb5.pixelgoose.com/forum/test-forum/working-subforum/36-posts-with-quotes?p=218#post218">
						Salida este jueves!!
					</a>
				</div>
			</td>
			<td class="topics-count">
				5
			</td>
			<td class="posts-count">
				15
			</td>
			<td class="lastpost">
				<div class="lastpost-wrapper">
					<a class="avatar h-left" href="https://vb5.pixelgoose.com/member/5-indosystem">
						<img src="http://i.imgur.com/YdhUZdZ.png" alt="indosystem" />
					</a>
					<div class="lastpost-info">
						<a class="lastpost-title ellipsis" href="https://vb5.pixelgoose.com/forum/test-forum/working-subforum/36-posts-with-quotes?p=218#post218">
							Salida este jueves!!
						</a>
						<div class="lastpost-by">
							by
							<a href="https://vb5.pixelgoose.com/member/5-indosystem">
								Mr.Robot
							</a>
						</div>
						<div class="lastpost-date post-date">
							08-21-2017, 10:29 AM
						</div>
					</div>
				</div>
			</td>
		</tr>
		<tr id="forum19" class="forum-item main new forum-item" data-channel-id="19" data-lastcontent="0" data-readtime="0">
      <td class="cell-forum">
        <img src="https://cdn3.iconfinder.com/data/icons/web-15/128/RSSvgSpeechBubble-2-512.png"/>
				<div class="forum-wrapper">
					<div class="forum-info">
						<a class="forum-title" href="https://vb5.pixelgoose.com/forum/test-forum/working-subforum">
							Recomendaciones
						</a>
					</div>
				</div>
				<div class="forum-desc">
					Obten ayuda de otras personas
				</div>
				<div class="rx-forum-stats h-hide">
					Temas: 45 Posts: 90
				</div>
				<div class="rx-lastpost-info h-hide">
					Last Post:
					<a class="lastpost-title" href="https://vb5.pixelgoose.com/forum/test-forum/working-subforum/36-posts-with-quotes?p=218#post218">
						Que grupo me recomiendan?
					</a>
				</div>
			</td>
			<td class="topics-count">
				45
			</td>
			<td class="posts-count">
				90
			</td>
			<td class="lastpost">
				<div class="lastpost-wrapper">
					<a class="avatar h-left" href="https://vb5.pixelgoose.com/member/5-indosystem">
						<img src="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg" alt="indosystem" />
					</a>
					<div class="lastpost-info">
						<a class="lastpost-title ellipsis" href="https://vb5.pixelgoose.com/forum/test-forum/working-subforum/36-posts-with-quotes?p=218#post218">
							Que grupo me recomiendan?
						</a>
						<div class="lastpost-by">
							by
							<a href="https://vb5.pixelgoose.com/member/5-indosystem">
								fishinthewater
							</a>
						</div>
						<div class="lastpost-date post-date">
							08-21-2017, 10:29 AM
						</div>
					</div>
				</div>
			</td>
		</tr>

	</tbody>
</table>

      </div>
    );
  }
}

export default ForumComponent;
