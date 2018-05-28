import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from './store'
import swal from 'sweetalert';
import axios from 'axios';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);
    this.comprar = this.comprar.bind(this);
    this.state = {
      cart: store.getState().cart
    }
    store.subscribe(() => {
        this.setState({
          cart: store.getState().cart
        })
      });
  }


  render() {
    return (

      <div class="card">
        <div class="card-header">
          Carrito de compras
        </div>
         {this.state.cart.map(bike =>
            <ul class="list-group list-group-flush">
              {
                bike.hasOwnProperty("brand_bicy") ? (
                  <li class="list-group-item">{bike.brand_bicy} ${bike.price_bicy} <Button class="btn btn-danger" onClick={() => this.removeFromCart(bike)}><i class="fas fa-trash-alt"></i></Button></li>
                ) : (
                  <li class="list-group-item">{bike.part_of_bike} {bike.brand_component} ${bike.price_component} <Button class="btn btn-danger" onClick={() => this.removeFromCart(bike)}><i class="fas fa-trash-alt"></i></Button></li>
                )                
              }
            </ul>

                  )}

        <div class="card-body">
          <h5 class="card-title">Total</h5>

          <p class="card-text"> $ {this.state.cart.reduce((sum, bike) => sum + bike.price_bicy, 0)}</p>
          <a href="#" onClick={() => this.comprar()} class="btn btn-primary">Comprar</a>
        </div>

      </div>

    )
  }
  comprar(){
    var items = 'Ud ha adquirido bicicleta '
    for (var i = 0; i < this.state.cart.length; i++) {
      items = items + this.state.cart[i].brand_bicy + " en " + this.state.cart[i].material_bicy + " por $" + this.state.cart[i].price_bicy +" , "
    }
    console.log(this.state.cart)
    const value = this.state.cart.reduce((sum, bike) => sum + bike.price_bicy, 0)
    swal({
      title: "Estas seguro?",
      text: "Vas a realizar una compra por $" +   value,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        var message = {
            "date_transaction":"25/05/2016",
            "type_transaction":"mantenimiento", 
            "total_transaction":value,
            "items": items,
            "store_id":'23', 
            "user_id": store.getState().userId
          }
        axios.post(store.getState().globalUrl + 'transactions',message)
        .then((response)=>{
          console.log("respuesta promise a transactions", response)
          swal("Bien! Tu compra ha sido realizada!", {
            icon: "success",
          });
        })
        .catch((response)=>{
          
          console.log("Error promise transaction", response)
        })
        
      } else {
        swal("Your imaginary file is safe!");
      }
    });

    
  }
  removeFromCart(bike) {
    store.dispatch({
      type: 'REMOVE_BIKE',
      bike: bike
    })
  }
}

export default ShoppingCart;

