import React from 'react';
import "../css/AppContentComponent.css";
import ProductList from './ProductList.js'
import ShoppingCart from './ShoppingCart.js'
import User from './User.js'
import store from './store'
import UserComponent from './DB_Components/UsersComponent.js';


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
	      			<h3>Lista de productos</h3>
		        	<ProductList />
		        	
		        </div>
		        <div class="col-md-4" >
		        	<ShoppingCart />
		        </div>
	      	</div>
	        
	      </div>
	    );	
  	}
  	if (store.getState().sectionView === "user") {
  		return(
	      <div>
	        <h3>Perfil de Usuario</h3>
	        <UserComponent />
	      </div>
	    );	
  	}
    else{
    	return (
    		<div>

	      </div>);
    }
  }

}

export default AppContentComponent;

