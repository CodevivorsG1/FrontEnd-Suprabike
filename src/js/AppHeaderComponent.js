import React from 'react';
import {Link ,Redirect} from 'react-router-dom';
import logo from '../img/logoSupraBIKES_gray.png';
import axios from 'axios';
import store from './store'
import  './header.js'
import "../css/header.css";
class AppHeaderComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nameUser: ""
    }
  }
  closeSession(){
    store.dispatch({
      type: 'CLOSE_SESSION'
    })
    this.setState({ redirect: true });

  }
  componentDidMount(){
    this.setState({isLoading: true})
    if (store.getState().token != ""){
      console.log("id del usuario",store.getState().userId)
      axios.get(store.getState().globalUrl + `${store.getState().userType}/`+ store.getState().userId,
                { headers:{
                  'X-User-Token': store.getState().token,
                  'X-User-Email': store.getState().userEmail
                }

                }
    
                )
                .then((response) =>{
                  
                  this.setState({ isLoading: false,
                                nameUser: response.data.nameUser
                  })
                })
                .catch((error) => {
                  console.log("fuck user")
                  this.setState({ isLoading: false})
                })
      axios.get(store.getState().globalUrl + `notifications/get_not/`+ store.getState().userId )
                .then((response) =>{
                  console.log('notifications')
                  console.log(response)
                  this.setState({ 
                  })
                })
                .catch((error) => {
                  console.log("fuck user noti")
                  console.log(error)
                  this.setState({ isLoading: false})
                })
    }
      
  }


  render() {
    const { redirect } = this.state;
     if (redirect) {
       return <Redirect to='/'/>;
     }
    if (store.getState().token != "") {
      return(
     

       <div class="row header">
          <div class="col-sm">
            <Link to="/" class="navbar-brand" href="#">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
            
          <hr class="footer"/>
          <div class="" id="navbarSupportedContent">
            
            <div class="col-sm">
            <form class="form-inline my-2 my-lg-0 mr-sm-2">
              <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button class="btn btn-outline-primary btn-outline-yellow my-2 my-sm-2 search-btn" type="submit"><i class="fas fa-search"></i></button>
              <button class="btn btn-outline-primary btn-outline-yellow my-2 my-sm-2 search-btn" type="submit"><i class="fas fa-bell"></i><span class="notification">1</span></button>
              
             

              <Link to={'/home/user'}>
                <button class="btn btn-outline-primary my-2 my-sm-0 mr-sm-2" type="submit">
                <i class="fas fa-user"></i> {this.state.nameUser}</button>
              </Link>

              <button href="#" class="btn btn-outline-primary my-2 my-sm-0 mr-sm-2" onClick={() => this.closeSession()} ><i class="fas fa-sign-out-alt"></i> </button>
            </form>
            
            
              
            </div>
          </div>
        </div>


    );
    }else {
      return(
      <div class="row header">
          <div class="col-sm">
            <Link to="/" class="navbar-brand" href="#">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
            

          <div class="" id="">
            
            <div class="col-sm">
            <form class="form-inline my-2 my-lg-0 mr-sm-2">
             
              <Link to={'/login'}>
                <div class=" btnBlack my-sm-0 mr-sm-2">
                <i class="fas fa-user"></i> Iniciar sessión</div>
              </Link>
            </form>
            
            
              
            </div>
          </div>
        </div>
      
    );
    }
    
  }
}

export default AppHeaderComponent
