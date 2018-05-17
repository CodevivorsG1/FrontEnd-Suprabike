import React from 'react';
import Slider from 'react-slick';
import './slick.css';



export default class MultipleItems extends React.Component {
    constructor() {
      super();
      this.handleImg = this.handleImg.bind(this);
    }
    
    handleImg(product){
      if(product.hasOwnProperty('img')){
        return product.image;
      }else{
        console.log("no img")
        return '../../img/unknown.jpg'
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
      else if (this.props.data.type === 'tech') {
        settings.slidesToShow = 3;
        settings.slidesToScroll = 1;

        const listTechs = this.props.data.data.map( item => 
          <div class="col-md-3 productbox">
              <img  class="img-responsive thumbnail" src={this.handleImg(item)} alt={item.name} />
              <div class="producttitle">
                {item.NameTec + " " + item.SurnameTec}
                <br/>
                {"$ " + item.costhourtec}
                
              </div>
              <div class="productprice">
                <div class="pull-right">
                  <button href="#" class="btn btn-info btn-sm" onClick={() => this.contact(item)} role="button">Contactar</button>
                </div>
                <div class="pricetext">
                  {(item)  => this.renderStars(item.stars)}

                </div>
              </div>
          </div>        
        )
        return (
          <div className="container">          
            <Slider {...settings}>
              {listTechs}
            </Slider>
          </div>
        );
      }
      else{
        settings.slidesToShow = 3;
        settings.slidesToScroll = 1;
        const listSillas = this.props.data.data.map( item => 
          <div class="col-md-3 productbox">
              <img  class="img-responsive thumbnail" src={this.handleImg(item)} alt={item.name}/>
              <div class="producttitle">
                {this.props.data.type}
                <br/>
                {item.description_component}
                <br/>
                {"$ " + item.price_component}
                
              </div>
              <div class="productprice">
                <div class="pull-right">
                  <button href="#" class="btn btn-info btn-sm" onClick={() => this.contact(item)} role="button">Comprar</button>
                </div>
                <div class="pricetext">
                  {(item)  => this.renderStars(item.stars)}

                </div>
              </div>
          </div>        
        )
        return (
          <div className="container">          
            <Slider {...settings}>
              {listSillas}
            </Slider>
          </div>
        );
      }      
    }
  }