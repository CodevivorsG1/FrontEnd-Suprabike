import React from 'react';
import jquery from 'jquery';
//import '../css/bootstrap.min.css';
import '../css/landing.css';
//import '../js/bootstrap.min.js';
//import '../js/jquery-3.3.1.min.js';


import '../fonts/glyphicons-halflings-regular.eot';

class Landing extends React.Component{
   render() {
       return (
        <div>
        <div class="jumbotron banner">
          <br/>
          <h1>¡Bienvenidos!</h1>
          <p>...</p>
          <p><a class="btn btn-primary btn-lg" href="#" role="button">SupraBikes</a></p>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="item">
            <i class="fas fa-2x fa-bicycle"></i>
            <div class="">
              <h3>Arma tu bici</h3>
              <br/>
              <p>Elige los componentes que quieres en tu bicicleta, ajustandola a tus necesidades.</p>
              
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="item">
            <i class="fas fa-2x fa-wrench"></i>
            <div class="">
              <h3>Servicio Técnico</h3>
              <br/>
              <p>Recibe servicio técnico a domicilio y comparte con la calificaficación con la comunidad</p>
              
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="item">
            <i class="fas fa-2x fa-cart-arrow-down"></i> 
            <div class="">
              <h3>Compra</h3>
              <br/>
              <p>Compra los componentes que deseas o tu bicicleta, y recibe a domicilio.</p>
              
            </div>
          </div>
        </div>
      </div>
</div>
        );
   }
}

export default Landing;

