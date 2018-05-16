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
      if(this.props.data.type === ""){
        console.log("Type nothing!!")
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <div className="container">          
            <Slider {...settings}>
              <div>
                <h3>Esperando algo!</h3>
              </div>            
            </Slider>
        </div>
        );
      } 
      else if (this.props.data.type === 'tech') {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        };

        const listTechs = this.props.data.data.map( item => 
          <div class="col-md-3 productbox">
              <img  class="img-responsive thumbnail" src={this.handleImg(item)} alt={item.name} />
              <div class="producttitle">
                {item.NameTec + " " + item.SurnameTec}
                <br/>
                {"$ " + item.costhourtec} /hora
                
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
      else {
        return (
          <div>Fuck!</div>
        );
      }      
    }
  }