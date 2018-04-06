import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from './store'

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
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
              <li class="list-group-item">{bike.name} ${bike.price} <Button class="btn btn-danger" onClick={() => this.removeFromCart(bike)}><i class="fas fa-trash-alt"></i></Button></li>
            </ul>
                  
                  )}
        
        <div class="card-body">
          <h5 class="card-title">Total</h5>
         
          <p class="card-text"> $ {this.state.cart.reduce((sum, bike) => sum + bike.price, 0)}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
        
      </div>
      
    )
  }

  removeFromCart(bike) {
    store.dispatch({
      type: 'REMOVE_BIKE',
      bike: bike
    })
  }
}

export default ShoppingCart;