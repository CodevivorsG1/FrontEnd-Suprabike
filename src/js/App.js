import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AppHomeComponent from './AppHomeComponent.js'
import LoginComponent from './LoginComponent.js';
import RegisterComponent from './RegisterComponent.js';
import AppHomeLandingComponent from './AppHomeLandingComponent.js';
import UserComponent from './DB_Components/UsersComponent.js';

//import {Button} from 'react-bootstrap'

//DB_Components/UsersComponent.js
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={AppHomeLandingComponent}/>
          <Route path='/login' component={LoginComponent}/>
          <Route path='/register' component={RegisterComponent} />
          <Route path='/home/:section' component={AppHomeComponent} />
          <Route path='/home' component={AppHomeComponent} />
          <Route path='/user'component={UserComponent}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
