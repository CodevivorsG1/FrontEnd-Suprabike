import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AppHomeComponent from './AppHomeComponent.js'
import LoginComponent from './LoginComponent.js';
import RegisterComponent from './RegisterComponent.js';
import AppHomeLandingComponent from './AppHomeLandingComponent.js';
import UserComponent from './DB_Components/UsersComponent.js';
import Map from './Map_Components/Container.js';
import RegisterGoogle from './RegisterGoogle.js';
import MyPdfViewer from './PDF_Components/testPdfViewer.js';
import store from './store'

//import {Button} from 'react-bootstrap'

//DB_Components/UsersComponent.js
class App extends Component {
  render() {
    const token = store.getState().token 
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={AppHomeLandingComponent}/>
          <Route path='/login' component={store.getState().token == "" ? LoginComponent : AppHomeComponent }/>
          <Route path='/register' component={store.getState().token == "" ? RegisterComponent : AppHomeComponent} />
          <Route path='/home/:section' component={AppHomeComponent} />
          <Route path='/home' component={AppHomeComponent} />
          <Route path='/user'component={UserComponent}/>
          <Route path='/registergoogle/:token/:name/:surname/:email/:id' component={store.getState().token == "" ? RegisterGoogle : AppHomeComponent } />
          <Route path='/map'component={Map}/>
          <Route path='/pdf'component={MyPdfViewer}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
