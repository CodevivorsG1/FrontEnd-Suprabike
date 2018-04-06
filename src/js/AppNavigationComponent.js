import React from 'react';
import '../css/AppNavigationComponent.css';

class AppNavigationComponent extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
      return (
        
        <div class="list-group text-left">
          <a href="/home/user" class="list-group-item active">
            <i class="fas fa-user-circle"></i> Mi cuenta
          </a>
          <a href="/home/productList" class="list-group-item"><i class="fas fa-cart-arrow-down"></i> Mis compras</a>
          <a href="#" class="list-group-item disabled"><i class="fas fa-bicycle"></i> Armar bici</a>
          <a href="/home/technician" class="list-group-item"><i class="fas fa-wrench"></i> Servicio técnico</a>
          <a href="/home/forums" class="list-group-item"><i class="far fa-comments"></i> Foros</a>
          <a href="#" class="list-group-item"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
          
        </div>
    );
  }
}

export default AppNavigationComponent;
