import React from 'react';
import "../css/TechnicianList.css";
import store from './store'
import axios from 'axios';

class TechnicianList extends React.Component {
	constructor(){
		super();
		this.addToCart = this.addToCart.bind(this);
		this.handleImg = this.handleImg.bind(this);

		this.state = {
			bikes: [

			]
		}
	}

	handleImg(product){
		if(product.hasOwnProperty('img')){
			return product.image;
		}else{
			console.log("no img")
			return '../img/unknown.jpg'
		}
	}

	componentDidMount(){
    axios.get('http://localhost:3000/technicians/')
              .then((response) =>{
								for(var x in response.data){
									this.state.bikes.push(response.data[x])
								}
								this.setState({});
								console.log(this.state);
              })
              .catch((error) => {
                console.log("fuck")
              })
  }




	 render() {
	    return (
	      <div class="row ">
	        {this.state.bikes.map(product =>
	        	<div class="col-md-3 productbox">
				    <img  class="img-responsive thumbnail" src={this.handleImg(product)} alt={product.name} />
				    <div class="producttitle">
				    	{product.NameTec + " " + product.SurnameTec}
							
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
