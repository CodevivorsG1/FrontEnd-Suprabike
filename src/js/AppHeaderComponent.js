import React from 'react';
import logo from '../img/logoSupraBIKES.png';

class AppHeaderComponent extends React.Component{
  render() {
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
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
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar
              </button>
            </form>
            <form class="form-inline my-2 my-lg-0">
              <button class="btn btn-primary my-2 my-sm-0 mr-sm-2" type="submit"> <i class="fas fa-user"></i> Iniciar Sesion
                </button>
            </form>
          </div>
        </nav>
        
      </div>
      
    );
  }
}

export default AppHeaderComponent