import React from 'react';
import Slider from 'react-slick';
import store from '../store'
import './genCar.css';
import './carouselList.css';



export default class MultipleItems extends React.Component {
    constructor() {
      super();
      this.handleImg = this.handleImg.bind(this);
    }
    
    handleImg(product){
      if(product.hasOwnProperty('img')){
        return product.image;
      }else{        
        return '../../img/bolt.png'
      }
    }   

    render() {
      console.log(this.props)
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      if(this.props.data.type === ""){        
        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
        return (
          <div className="container">          
            <Slider {...settings}>
              <div>
                <h3 className="waiting">Esperando algo!</h3>
              </div>            
            </Slider>
        </div>
        );
      }       
      else{
        if (this.props.data.data.length >= 3) {
          settings.slidesToShow = 3;
        } else if (this.props.data.data.length == 1) {
          settings.slidesToShow = 1;
        } else {
          settings.slidesToShow = 2;
        }
        settings.slidesToScroll = 1;
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
            <div class="center-block">
              <button href="#" class="btn btn-info btn-sm" onClick={() => this.addToCart(item)} role="button">Agregar<i class="fas fa-cart-arrow-down"></i></button>
            </div>
          </div>
        )
        return (
          <div className="container-md">          
            <Slider {...settings}>
              {listSillas}
            </Slider>
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