import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import store from '../store.js';
import {Redirect} from 'react-router-dom';

class Validate extends React.Component {
    constructor() {
        super();
        this.state = {
            cart: store.getState().cart,
            bikeId: 0,
            done: false
            
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
        var requests = [];
        console.log("Inicia ciclo:")
        /* var i in this.state.cart */
        for (var i = 0; i < 2; i++){
            if(!(this.state.cart[i].hasOwnProperty("brand_bicy"))){                
                var aux = {
                    component_id: this.state.cart[i].id,
                    bicycle_to_assemble_id: this.state.bikeId
                }
                requests.push(axios.post(store.getState().globalUrl + 'assemble_parts/', aux ));                
            }
        }
        console.log(requests)
        if (requests.length == 0) {
            swal('warning', "Debes seleccionar componentes!");
        } else {
            Promise.all(requests).then(function(response) {
                console.log(response)
            });
            this.setState({done: true});            

        }
    }
    openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    render() {
        if (this.state.done) {
            this.openInNewTab('http://localhost:4000/bicycle_to_assembles/showpdf/'+ this.state.bikeId + '.pdf', '_blank')
        }
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
                    <a href= "/home/bicycle">
                        <button class="btn btn-info btn-sm pdfBtn" role="button"><i class="far fa-file-pdf"></i> Devolver</button>
                    </a>
                    
                        <button class="btn btn-info btn-sm pdfBtn" role="button" onClick={() => this.comprar()}><i class="far fa-file-pdf"></i> Comprar</button>
                    
                </div>
            </div>
        );

    }

}

export default Validate;