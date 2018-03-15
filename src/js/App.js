import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AppHomeComponent from './AppHomeComponent.js'
import LoginComponent from './LoginComponent.js';
import RegisterComponent from './RegisterComponent.js';

//import {Button} from 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={AppHomeComponent}/>
          <Route path='/login' component={LoginComponent}/>
          <Route path='/register' component={RegisterComponent} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
