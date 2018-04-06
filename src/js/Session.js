import React, { Component } from 'react';
import store from './store'

class Session extends Component {
	constructor(){
		super();
		this.token = this.setToken.bind(this);
	}
	setToken( token ){
		store.dispatch({
			type: 'ADD_TOKEN',
			token: token
		})
	}
}