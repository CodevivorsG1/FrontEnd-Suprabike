import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import store from '../store.js';

class Validate extends React.Component {
    constructor() {
        super();
        this.state = {
            cart: store.getState().cart,
            bikeId: 0
            
        }
        this.handleImg = this.handleImg.bind(this);
    }

    handleImg(product){
        console.log(product)
        if(product.images.length > 0){
          return store.getState().globalUrl + product.images[0].this_image;
        }else{        
          return '../../img/bolt.png'
        }
      }   

    componentDidMount() {
        let bikedata = {
            total_price: 0,
            user_id: store.getState().userId,
            size: "xs",
            type_of_use: "urbana"
                
        }
        console.log(bikedata)
        axios.post(store.getState().globalUrl + 'bicycle_to_assembles', bikedata)
        .then( (response) => {          
          console.log("se logro")
          console.log(response)
          this.setState({bikeId: response.data.id})
        })
        .catch( (error) => {
          swal("Error", "Error al agregar componente a DB", "error")
        })
    }

    comprar() {
        swal('guardando')
        console.log("Inicia ciclo:")
        for (var i in this.state.cart){
            if(!(this.state.cart[i].hasOwnProperty("brand_bicy"))){
                console.log(this.state.cart[i])
                var aux = {
                    component_id: this.state.cart[i].id,
                    bicycle_to_assemble_id: this.state.bikeId
                }
                setTimeout(() => {
                    axios.post(store.getState().globalUrl + 'assemble_parts/', aux )
                    .then((response) => {
                        console.log("envio de parte exitoso")
                    })
                    .catch((error) => {
                        swal("Error", "Error al agregar componente a DB", "error")
                    })
                }, 1000) 
            }
        }
    }

    render() {
        return(
            <div>
                <div class="row">
                {this.state.cart.map(product =>

                    product.hasOwnProperty("brand_bicy") ? (null):
                    
                    (
                        <div class={`col-md-4 productbox ${this.state.city < 7  && product.usetype_bicy === "ruta" ? "Sugerido" : ""} ${this.state.city >= 7  && product.usetype_bicy === "montana" ? "Sugerido2" : ""}`}>
                        <img  class="img-responsive thumbnail" src={this.handleImg(product)} alt={product.name} />
                            
                        <div class="producttitle">
                                
                            {product.part_of_bike+" "+product.brand_component}<br/>{"$"+product.price_component}

                        </div>
                        <div class="productprice">
                            
                            <div class="pricetext">
                                {(product)  => this.renderStars(product.stars)}

                            </div>
                        </div>
                    </div>)
                    
                )}
                </div>
                <div class="row">
                    <a href= {store.getState().globalUrl+"/bicycles/showpdf.pdf"} target="_blank">
                        <button class="btn btn-info btn-sm pdfBtn" role="button"><i class="far fa-file-pdf"></i> Devolver</button>
                    </a>
                    
					    <button class="btn btn-info btn-sm pdfBtn" role="button" onClick={() => this.comprar()}><i class="far fa-file-pdf"></i> Comprar</button>
					
                </div>
            </div>
        );

    }

}

export default Validate;