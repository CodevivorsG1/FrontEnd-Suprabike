import React from 'react';
import "../css/TechnicianList.css";
import store from './store'

class TechnicianList extends React.Component {
	constructor(){
		super();
		this.addToCart = this.addToCart.bind(this);

		this.state = {
			bikes: [
				{ id: 1 , name: 'Javier Gómez', price: 1000000 , image: '../img/javier.JPG' , stars:3},
				{ id: 2 , name: 'Jose Díaz', price: 300000 , image: '../img/jose.jpg' , stars:2}
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
					    	<button href="#" class="btn btn-info btn-sm" onClick={() => this.addToCart(product)} role="button">Contactar</button>
				    	</div>
				    	<div class="pricetext">
				    		 {(product)  => this.renderStars(product.stars)}
				    		 					    		 
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
	  	renderStars(stars) {
	  		console.log(stars)
			let htmlStars = [];
			for (var i = 0; i < 5; i++) {
				htmlStars.push(<span className="busterCards" key={i}>♦</span>);
			}
	    	return htmlStars
	    ;
	}
}

export default TechnicianList;