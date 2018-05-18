import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import '../css/AppNavigationComponent.css';
import store from './store'
import {Link} from 'react-router-dom';

class AppNavigationComponent extends React.Component{
  constructor(){
    super();
    this.state = {
        redirect: false,
        sectionView: '',
        userType: store.getState().userType,
        view : store.getState().sectionView
    }
    store.subscribe(() => {
        this.setState({
          token: store.getState().token,
          sectionView: store.getState().sectionView,
          userType: store.getState().userType
        })
        this.state.userType = store.getState().userType 
      });
    
    this.myFunction = this.myFunction.bind(this);
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
  closeSession(){
    store.dispatch({
      type: 'CLOSE_SESSION'
    })
    this.setState({ redirect: true });

  }
  render(){
    console.info('state')
    console.info(this.state)
     const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }
      if( this.state.userType === 'users'){
        return (
          <div>

       
    
    
<div class="topnav" id="myTopnav">

  <a class="search row">
    
    
  </a>
  <a class={store.getState().sectionView != 'productList' ? 'itemmenu' : 'selected itemmenu'} href="/home/productList" ><i class="fas fa-cart-arrow-down"></i> Mis compras</a>
  <a class={store.getState().sectionView != 'data-bicycle' ? 'itemmenu' : 'selected itemmenu'} href="/data-bicycle"  ><i class="fas fa-bicycle"></i> Armar bici</a>
  <a class={store.getState().sectionView != 'technician' ? 'itemmenu' : 'selected itemmenu'} href="/home/technician" ><i class="fas fa-wrench"></i> Servicio técnico</a>
  <a class={store.getState().sectionView != 'forums' ? 'itemmenu' : 'selected itemmenu'} href="/home/forums" ><i class="far fa-comments"></i> Foros</a>
  <a class={store.getState().sectionView != 'map' ? 'itemmenu' : 'selected itemmenu'} href="/home/map" ><i class="far fa-map"></i> Mapa de tiendas</a>
  <a class={store.getState().sectionView != '' ? 'itemmenu' : 'selected itemmenu'} href="#" onClick={() => this.closeSession()} ><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
  <a href="javascript:void(0);" class="icon" onClick={this.myFunction}>
    <i class="fa fa-bars"></i>
  </a>
  
</div></div>
              
        );
      }
      if( this.state.userType == 'technicians'){
        return (
            <div class="list-group text-left">
              <a href="/home/user" class="list-group-item {this.state.sectionView == 'user' ? 'active' : ''}">
                <i class="fas fa-user-circle"></i> Mi cuenta
              </a>
              <a href="/home/productList" class="list-group-item"><i class="fas fa-cart-arrow-down"></i> Mis compras</a>
              <a href="/data-bicycle"  class="list-group-item"><i class="fas fa-bicycle"></i> Armar bici</a>
              <a href="/home/forums" class="list-group-item"><i class="far fa-comments"></i> Foros</a>
              <a href="#" onClick={() => this.closeSession()} class="list-group-item"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
              
            </div>
        );
      } else if (this.state.userType == 'stores'){
        return (
          <div class="list-group text-left">
            <a href="/home/user" class="list-group-item {this.state.sectionView == 'user' ? 'active' : ''}">
              <i class="fas fa-user-circle"></i> Mi cuenta
            </a>
            <a href="/home/productList" class="list-group-item"><i class="fas fa-cart-arrow-down"></i> Mis compras</a>
            <a href="/data-bicycle"  class="list-group-item"><i class="fas fa-bicycle"></i> Armar bici</a>
            <a href="/home/forums" class="list-group-item"><i class="far fa-comments"></i> Foros</a>
            <a href="/component" class="list-group-item"><i class="fa fa-cog"></i> Agregar componente</a>
            <a href="#" onClick={() => this.closeSession()} class="list-group-item"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
            
          </div>
      );
      }
      return (<div> </div>)
  }
}

export default AppNavigationComponent;
