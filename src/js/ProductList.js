import React from 'react';
import "../css/ProductList.css";
import store from './store'

class ProductList extends React.Component {
	constructor(){
		super();
		this.addToCart = this.addToCart.bind(this);

		this.state = {
			bikes: [
				{ id: 1 , name: 'Mountain', price: 1000000 , image: '../img/bici.jpg'},
				{ id: 2 , name: 'Bike', price: 300000 , image: '../img/scott-bike.jpg'}
			]
		}
	}
	 render() {
	    return (
	      <div class="row ">
	        {this.state.bikes.map(product =>
	        	<div class="col-md-3 productbox">
				    <img  class="img-responsive thumbnail" src={product.image} alt={product.name} />
				    <div class="producttitle">
				    	{product.name}
				    </div>
				    <div class="productprice">
				    	<div class="pull-right">
					    	<button href="#" class="btn btn-danger btn-sm" onClick={() => this.addToCart(product)} role="button">Comprar</button>
				    	</div>
				    	<div class="pricetext">
				    		$  {product.price}
				    	</div>	
			    	</div>
				</div>
	        )}
	      </div>
	    );
	  }
	  addToCart(bike) {
	  	store.dispatch({
	      type: 'ADD_BIKE',
	      bike: bike
	    })
  	}
}

export default ProductList;