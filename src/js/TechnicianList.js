import React from 'react';
import "../css/TechnicianList.css";
import "../css/loader.css";
import swal from 'sweetalert';

import store from './store';
import axios from 'axios';

class TechnicianList extends React.Component {
	constructor(){
		super();
		this.contact = this.contact.bind(this);
		this.handleImg = this.handleImg.bind(this);
		this.sendMail = this.sendMail.bind(this);

		this.state = {
			bikes: [
			],
			isLoading: false
		}
	}
	contact(technician){
		swal("Ingrese el mensaje para " + technician.NameTec , {
		  content: "input",
		})
		.then(function(message)  {
			console.info(technician)
			console.info(message)
			message = {
					"date_transaction":"25/05/2016",
					"type_transaction":"mantenimiento", 
					"total_transaction":technician.costhourtec,
					"technician_id":technician.id, 
					"user_id": store.getState().userId
				}
		  axios.post(store.getState().globalUrl + 'transactions',message,
			{
			  headers:{
				  'X-User-Token': store.getState().token,
				  'X-User-Email': store.getState().userEmail
			  }
			}
		)
		  .then((response)=>{
			  console.log("respuesta promise a transactions", response)
		  })
		  .catch((response)=>{
			  swal("Error, intente de nuevo", response)
			  console.log("Error promise transaction", response)
		  })
		  swal('Mensaje: ' + message);
		  if (true) {}
		});
		
	}
	sendMail(technician, value){
		console.info(technician)
		console.info(value)
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
	this.setState({isLoading: true})
	axios.get(store.getState().globalUrl + 'technicians/',
	{
		headers:{
			'X-User-Token': store.getState().token,
			'X-User-Email': store.getState().userEmail
		}
	}

	)
              .then((response) =>{
								this.setState({isLoading: false});
								for(var x in response.data){
									this.state.bikes.push(response.data[x])
								}
								this.setState({});
								console.log(this.state);
			  })
              .catch((error) => {
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
				<div className="">
				
					<div class="">
					  <i class="fa fa-bicycle fa-5x bici"></i>
					  <div class="back">
					    <i class="fa fa-cog fa-3x spin"></i>
					  </div>
					  <div class="front">
					    <i class="fa fa-cog fa-3x spin"></i>
					  </div>
					</div>
				</div>
			);
		}else{
			return (bike.map(product =>
	        	<div class="col-md-3 productbox">
				    <img  class="img-responsive thumbnail" src={this.handleImg(product)} alt={product.name} />
				    <div class="producttitle">
				    	{product.NameTec + " " + product.SurnameTec}
				    	<br/>
				    	{"$ " + product.costhourtec} /hora
							
				    </div>
				    <div class="productprice">
				    	<div class="pull-right">
					    	<button href="#" class="btn btn-info btn-sm" onClick={() => this.contact(product)} role="button">Contactar</button>
				    	</div>
				    	<div class="pricetext">
				    		 {(product)  => this.renderStars(product.stars)}

				    	</div>
			    	</div>
				</div>
			))
		}
	}



	 render() {
	    return (
	      <div class="row ">
			{
			<this.loadData bike={this.state.bikes}/>	
			}
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
