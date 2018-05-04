import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import '../css/AppNavigationComponent.css';
import store from './store'

class AppNavigationComponent extends React.Component{
  constructor(){
    super();
    this.state = {
        redirect: false,
        sectionView: '',
          userType: store.getState().userType
    }
    store.subscribe(() => {
        this.setState({
          token: store.getState().token,
          sectionView: store.getState().sectionView,
          userType: store.getState().userType
        })
        this.state.userType = store.getState().userType 
      });
    console.log('store.getState().userType')
    console.log(store.getState().userType)
    console.log(this.state.userType)
  }
  closeSession(){
    store.dispatch({
      type: 'CLOSE_SESSION'
    })
    this.setState({ redirect: true });

  }
  render(){
     const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }
      if( this.state.userType === 'users'){
        return (
            <div class="list-group text-left">
              <a href="/home/user" class="list-group-item {this.state.sectionView == 'user' ? 'active' : ''}">
                <i class="fas fa-user-circle"></i> Mi cuenta
              </a>
              <a href="/home/productList" class="list-group-item"><i class="fas fa-cart-arrow-down"></i> Mis compras</a>
              <a href="#"  class="list-group-item disabled"><i class="fas fa-bicycle"></i> Armar bici</a>
              <a href="/home/technician" class="list-group-item"><i class="fas fa-wrench"></i> Servicio técnico</a>
              <a href="/home/forums" class="list-group-item"><i class="far fa-comments"></i> Foros</a>
              <a href="/home/map" class="list-group-item"><i class="far fa-map"></i> Mapa de tiendas</a>
              <a href="#" onClick={() => this.closeSession()} class="list-group-item"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
              
            </div>
        );
      }
      if( this.state.userType == 'technicians'){
        return (
            <div class="list-group text-left">
              <a href="/home/user" class="list-group-item {this.state.sectionView == 'user' ? 'active' : ''}">
                <i class="fas fa-user-circle"></i> Mi cuenta
              </a>
              <a href="/home/productList" class="list-group-item"><i class="fas fa-cart-arrow-down"></i> Mis compras</a>
              <a href="#"  class="list-group-item disabled"><i class="fas fa-bicycle"></i> Armar bici</a>
              <a href="/home/forums" class="list-group-item"><i class="far fa-comments"></i> Foros</a>
              <a href="#" onClick={() => this.closeSession()} class="list-group-item"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
              
            </div>
        );
      }
      return (<div> </div>)
  }
}

export default AppNavigationComponent;
