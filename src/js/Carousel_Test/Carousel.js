import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import swal from 'sweetalert';
import store from '../store';
import './slick.css';



export default class MultipleItems extends React.Component {
    constructor(){
      super();
      this.handleImg = this.handleImg.bind(this);

      this.state = {
        response: false,
        isLoading: false,
        techs:[]
      }
    }

    handleImg(product){
      if(product.hasOwnProperty('img')){
        return product.image;
      }else{
        console.log("no img")
        return '../../img/unknown.jpg'
      }
    }

    loadTech() {
      axios.get(store.getState().globalUrl + 'technicians/')
              .then((response) =>{								
								for(var x in response.data){
									this.state.techs.push(response.data[x])
								}								
                console.log(this.state);
                this.setState({response: true});

			        })
              .catch((error) => {
                  swal("Error", "Error al obtener datos", "error")
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
        return (bike.map(product =>
          <div>
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
              </div>
        ))
      }
    }

    

    render() {
      if(this.state.response === false){
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <div className="container">
          <h2> Multiple items </h2>
          <button>Sillas</button>
          <button onClick={() => this.loadTech()}>Técnicos</button>
          <Slider {...settings}>
            <div>
              <h3>Esperando algo!</h3>
            </div>            
          </Slider>
        </div>
        );
      } else {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        };
        return (
          <div className="container">
          <h2> Multiple items </h2>
          <button>Sillas</button>
          <button onClick={() => this.loadTech()}>Técnicos</button>
          <Slider {...settings}>
            <this.loadData bike={this.state.techs}/>
          </Slider>
        </div>
        );
      }      
    }
  }