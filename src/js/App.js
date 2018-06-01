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
import UploadZone from './Upload_Components/UploadZoneImages.js';
import Carousel from './Carousel_Test/Container.js';
import store from './store'
import Bicycle from './Carousel_Test/Bicycle.js';
import DataBicycle from './Carousel_Test/DataBicycle.js';
import ComponentNuevo from './Components/ComponentNuevo.js';
import Trying from './Carousel_Test/fuckingTrying.js';
import Build from './Carousel_Test/Build.js';

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
          <Route path='/registergoogle/:token/:name/:surname/:email/:id' component={RegisterGoogle} />
          <Route path='/map'component={Map}/>
          <Route path='/pdf'component={MyPdfViewer}/>
          <Route path='/bicycle'component={Carousel}/>
          <Route path='/data-bicycle' component ={DataBicycle}/>
          <Route path='/component' component={ComponentNuevo}/>
          <Route path='/trying' component={Trying} />
          <Route path='/build' component={Build} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
