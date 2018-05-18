import React from 'react';
import "../css/AppContentComponent.css";
import ProductList from './ProductList.js'
import TechnicianList from './TechnicianList.js'
import ShoppingCart from './ShoppingCart.js'
import User from './User.js'
import store from './store'
import UserComponent from './DB_Components/UsersComponent.js';
import EditUserComponent from './DB_Components/EditUsersComponent.js';
import ForumComponent from './DB_Components/ForumComponent.js';
import Map from './Map_Components/Container.js';
import Statistics from './DB_Components/Statistics.js';



class AppContentComponent extends React.Component{
	constructor(){
		super();
		this.title = ""

	}
  render() {
  	if (store.getState().sectionView === "productList") {
  		return(
	      <div class="row">
	      	<div class="row">

	      	</div>
	        <div class="row">
	      		<div class="col-md-8" >
	      			<h3 class="text-align">Lista de productos</h3>
		        	<ProductList />

		        </div>
		        <div class="col-md-4" >
		        	<ShoppingCart />
		        </div>
	      	</div>

	      </div>
	    );
		}
		if (store.getState().sectionView === "map") {
  		return(
	      <div>
	        <h3 class="text-align">Mapa de Tiendas</h3>
	        <Map />
	      </div>
	    );
  	}
  	if (store.getState().sectionView === "user") {
  		return(
	      <div>
	        <h3 class="text-align">Perfil de Usuario</h3>
	        <UserComponent />
	      </div>
	    );
  	}
  	if (store.getState().sectionView === "editUser") {
  		return(
	      <div>
	        <h2 class="text-align">Editar perfil de usuario</h2>
	        <EditUserComponent />
	      </div>
	    );	
  	}
  	if (store.getState().sectionView === "technician") {
  		return(
	      <div>
	        <h3 class="text-align">Servicio Técnico</h3>
	        <TechnicianList />
	      </div>
	    );
  	}
  	if (store.getState().sectionView === "forums") {
  		return(
	      <div>
	        <h3 class="text-align">Foros</h3>
	        <ForumComponent />
	      </div>
	    );
  	}
  	if (store.getState().sectionView === "statistics") {
  		return(
	      <div>
	        <h3 class="text-align">Estadísticas</h3>
	        <Statistics />
	      </div>
	    );
  	}
    else{
    	return (
    		<div class="row">
	      	<div class="row">

	      	</div>
	        <div class="row">
	      		<div class="col-md-8" >
	      			<h3 class="text-alig">Lista de productos</h3>
		        	<ProductList />

		        </div>
		        <div class="col-md-4" >
		        	<ShoppingCart />
		        </div>
	      	</div>

	      </div>);
    }
  }

}

export default AppContentComponent;
