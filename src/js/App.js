import React, { Component } from 'react';
import '../css/App.css';
import AppBodyComponent from './AppBodyComponent.js'
import AppHeaderComponent from './AppHeaderComponent.js'
//import {Button} from 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <AppHeaderComponent />
        
        
        <p className="App-intro">
           <code></code>
        </p>
        <AppBodyComponent />
      </div>
    );
  }
}

export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
