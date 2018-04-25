import React from 'react';
import "../css/ProductList.css";
import store from './store'
import "../css/loader.css";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import swal from 'sweetalert';

class ProductList extends React.Component {
	constructor(){
		super();
		this.addToCart = this.addToCart.bind(this);
		this.handleImg = this.handleImg.bind(this);
		this.generatePDF = this.generatePDF.bind(this);

		this.state = {
			bikes: [
			],
			isLoading: false,
			redirect: false
		}
	}

	handleImg(product){
		if(product.hasOwnProperty('img')){
			return product.image;
		}else{
			console.log("no img")
			return '../img/bikeUnknown.jpg'
		}
	}

	componentDidMount(){
	this.setState({isLoading: true})
    axios.get(store.getState().globalUrl + 'bicycles/')
              .then((response) =>{
								this.setState({isLoading: false});
								for(var x in response.data){
									this.state.bikes.push(response.data[x])
								}
								this.setState({});
								console.log(this.state);
			  })
              .catch((error) => {
								swal("Error", "Error al cargar productos", "error")
				console.log("fuck")
				this.setState({ isLoading: false})
              })
  }
	loadData =({bike}) => {
		console.log("spinner", bike)
		console.log("entro al spinner", bike.length)
		if (this.state.isLoading){
			console.log("entro al spinner", bike.length)
			return(
				<div className="loader"></div>
			);
		}else{
			return (
				bike.map(product =>
	        	<div class="col-md-3 productbox">
				    <img  class="img-responsive thumbnail" src={this.handleImg(product)} alt={product.name} />
				    <div class="producttitle">
				    	{product.brand_bicy+" "+product.usetype_bicy}<br/>{"$"+product.price_bicy}

				    </div>
				    <div class="productprice">
				    	<div class="pull-right">
					    	<button href="#" class="btn btn-info btn-sm" onClick={() => this.generatePDF()} role="button">Agregar</button>
				    	</div>
				    	<div class="pricetext">
				    		 {(product)  => this.renderStars(product.stars)}

				    	</div>
			    	</div>
				</div>
			))

		}
	}

	generatePDF(){
		this.setState({
			redirect: true
		})
	}



	 render() {

				if (this.state.redirect){
					return <Redirect to={'/pdf'}/>
				} else {
					return(
						<div>
							<div class="row ">
						{
						<this.loadData bike={this.state.bikes}/>
						}
							</div>
							<div class="row">
								<button class="btn btn-info btn-sm" onClick={() => this.generatePDF()} role="button">Generar catálogo</button>
							</div>
						</div>
					);
				}

	  }
	  addToCart(bike) {
	  	store.dispatch({
	      type: 'ADD_BIKE',
	      bike: bike
	    })
  	}
}

export default ProductList;
