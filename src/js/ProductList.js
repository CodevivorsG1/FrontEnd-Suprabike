import React from 'react';
//import "../css/ProductList.css";
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
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleOptionChangeMaterial = this.handleOptionChangeMaterial.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.generatePDF = this.generatePDF.bind(this);

		this.state = {
			bikes: [
			],
			isLoading: false,
			redirect: false
		}
	}
	handleOptionChange (changeEvent) {
	  this.setState({
	    selectedOption: changeEvent.target.value
	  });
	}
	handleOptionChangeMaterial (changeEvent) {
	  this.setState({
	    selectedOptionMaterial: changeEvent.target.value
	  });
	}
	handleImg(product){
		if(product.hasOwnProperty('img')){
			return product.image;
		}else{
			console.log("no img")
			return '../img/bikeUnknown.gif'
		}
	}
	handleFormSubmit (formSubmitEvent) {
	  this.setState({isLoading: true})
	  console.log('You have selected:', this.state.selectedOption);
	  axios.get(store.getState().globalUrl + 'bicycles/' + this.state.selectedOption)
              .then((response) =>{
              					console.log('bicis')
              					console.log(response)
								this.setState({isLoading: false});
								this.state.bikes =[]
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
			return (
							<div class="row ">
							<form>
				<div class="form-check form-check-inline row">
					  <input checked={this.state.selectedOption === 'h500'} onChange={this.handleOptionChange}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="h500"/>
					   {'< $500.000'}
				</div>
				<div class="form-check form-check-inline">
					  <input checked={this.state.selectedOption === 'hmillon'} onChange={this.handleOptionChange}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="hmillon"/>
					  {"< $1'000.000"}
				</div>
				<div class="form-check form-check-inline">
					  <input checked={this.state.selectedOption === 'dmillon'}  onChange={this.handleOptionChange}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="dmillon" />
					  {"> $1'000.000"}
				</div>
				</form>
					<button href="#" class="btn btn-warning btn-sm" onClick={() => this.handleFormSubmit()} role="button"><i class="fas fa-filter"></i> Filtrar</button>
					<form>
					<div class="col-md-12">
						<div class="form-check form-check-inline">
						  <input   onChange={this.handleOptionChangeMaterial}  class="checkbox" type="checkbox" name="aluminio" id="inlineRadio2" value="aluminio" />
						  {"Aluminio"}
						</div>
						<div class="form-check form-check-inline">
						  <input    onChange={this.handleOptionChangeMaterial}  class="checkbox" type="checkbox" name="acero" id="inlineRadio2" value="acero" />
						  {"Acero"}
						</div>
						<div class="form-check form-check-inline">
						  <input    onChange={this.handleOptionChangeMaterial}  class="checkbox" type="checkbox" name="carbono" id="inlineRadio2" value="carbono" />
						  {"Carbono"}
						</div>
				
			</div>
			</form>
			<div class="row">
			{bike.map(product =>
	        	<div class="col-md-4 productbox">
				    <img  class="img-responsive thumbnail" src={this.handleImg(product)} alt={product.name} />
				    <div class="producttitle">
				    	{product.brand_bicy+" "+product.usetype_bicy}<br/>{"$"+product.price_bicy}

				    </div>
				    <div class="productprice">
				    	<div class="pull-right">
					    	<button href="#" class="btn btn-info btn-sm" onClick={() => this.addToCart({...product, price_component: 0})} role="button">Agregar</button>
				    	</div>
				    	<div class="pricetext">
				    		 {(product)  => this.renderStars(product.stars)}

				    	</div>
			    	</div>
				</div>
				
			)}
			</div>
		</div>
			)

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
								<a href= {store.getState().globalUrl+"/bicycles/showpdf.pdf"} target="_blank">
									<button class="btn btn-info btn-sm pdfBtn" role="button"><i class="far fa-file-pdf"></i> Catálogo Bicis</button>
								</a>
								<a href={store.getState().globalUrl+"/technicians/showpdf.pdf"} target="_blank">
									<button class="btn btn-info btn-sm pdfBtn" role="button"><i class="far fa-file-pdf"></i> PDF Técnicos</button>
								</a>
								<a href={store.getState().globalUrl+"/components/showpdf.pdf"} target="_blank">
									<button class="btn btn-info btn-sm pdfBtn" role="button"><i class="far fa-file-pdf"></i> PDF Partes</button>
								</a>
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
