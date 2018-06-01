import React from 'react';
import Slider from 'react-slick';
import store from '../store'
import axios from 'axios';
import swal from 'sweetalert';
import './slick.css';
import './carouselList.css';

export default class MultipleItems extends React.Component {
    constructor() {
      super();      
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

    render() {
      console.log(this.props)
      const settings = {        
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };

      if (this.props.data.type == ""){      
        return (
          <div>          
            <Slider {...settings}>
              <div>
                <h3 class="neat">1</h3>
              </div>
              <div>
                <h3 class="neat">2</h3>
              </div>
              <div>
                <h3 class="neat">3</h3>
              </div>
              <div>
                <h3 class="neat">4</h3>
              </div>
              <div>
                <h3 class="neat">5</h3>
              </div>
              <div>
                <h3 class="neat">6</h3>
              </div>
            </Slider>
          </div>
        );
      } else {
        const listSillas = this.props.data.data.map( item => 
          <div class="container-item">
            <div class="container-item">
              <img  class="image-item" src={this.handleImg(item)} alt={item.name} style={{width: '100%'}}/>
              <div class="middle">
                <div class="text-item">
                  {this.props.data.type}
                  <br/>
                  {item.description_component}
                  <br/>
                  {"$ " + item.price_component}
                </div>
              </div>              
            </div>
            <div class="center-block padBtn">
              <button href="#" class="btn btn-info btn-block" onClick={() => this.addToCart({...item, price_bicy: 0})} role="button">Agregar<i class="fas fa-cart-arrow-down"></i></button>
            </div>
          </div>
        )
        return(
          <div>
            <Slider {...settings}>
              {listSillas}
            </Slider>
          </div>
        );
      }
            
    }
    addToCart(bike) {
      console.log(bike)
      let cData = {
        component_id: bike.id,
        bicycle_to_assemble_id: this.props.data.bikeId
      }
      console.log("BikeId: " + this.props.data.bikeId)
      /* axios.post(store.getState().globalUrl + 'assemble_parts', cData)
        .then( (response) => {
          console.log("se logro")
        })
        .catch( (error) => {
          swal("Error", "Error al agregar componente a DB", "error")
        }) */
	  	store.dispatch({
	      type: 'ADD_BIKE',
	      bike: bike
	    })
  	}
  }