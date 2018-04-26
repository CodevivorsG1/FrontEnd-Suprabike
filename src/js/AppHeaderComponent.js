import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logoSupraBIKES.png';
import axios from 'axios';
import store from './store'
class AppHeaderComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    this.setState({isLoading: true})
    if (store.getState().token != ""){
      axios.get('http://localhost:4000/users')
                .then((response) =>{
                    console.info(response)
                    if( response.statusText == 'OK'){
                      console.info(response.data[response.data.length -1])
                      this.state = response.data[response.data.length -1];
                      this.setState(response.data[response.data.length -1])    
                    }
                  this.setState({ isLoading: false})
                  console.log(this.state);
                })
                .catch((error) => {
                  console.log("fuck user")
                  this.setState({ isLoading: false})
                })
    }
      
  }


  render() {
    if (store.getState().token != "") {
      return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" class="navbar-brand" href="#">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to='/home'>Inicio <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Servicios
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Armar bici</a>
                  <a class="dropdown-item" href="#">Servicio Técnico</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">SupraBikes</a>
                </div>
              </li>

            </ul>

            <form class="form-inline my-2 my-lg-0 mr-sm-2">
              <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button class="btn btn-outline-primary my-2 my-sm-2" type="submit">Buscar
              </button>
              
            </form>
            <Link to={'/home/user'}>
              <button class="btn btn-primary my-2 my-sm-0 mr-sm-2" type="submit">
              <i class="fas fa-user"></i> {this.state.nameUser}</button>
            </Link>
          </div>
        </nav>

      </div>

    );
    }else {
      return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" class="navbar-brand" href="#">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to='/'>Inicio <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Servicios
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Armar bici</a>
                  <a class="dropdown-item" href="#">Servicio Técnico</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">SupraBikes</a>
                </div>
              </li>

            </ul>

            <form class="form-inline my-2 my-lg-0 mr-sm-2">
              <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button class="btn btn-outline-primary my-2 my-sm-2" type="submit">Buscar
              </button>

            </form>
            <Link to={'/login'}>
              <button class="btn btn-primary my-2 my-sm-0 mr-sm-2" type="submit">
              <i class="fas fa-user"></i> Iniciar Sesion</button>
            </Link>
          </div>
        </nav>

      </div>

    );
    }
    
  }
}

export default AppHeaderComponent
