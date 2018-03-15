import React from 'react';
import '../css/App.css';
import AppBodyComponent from './AppBodyComponent.js'
import AppHeaderComponent from './AppHeaderComponent.js'
import AppFooterComponent from './AppFooterComponent.js'

class AppHomeComponent extends React.Component {
  render(){
    return(
      <div className="App">
        <AppHeaderComponent />
        <AppBodyComponent />
        <AppFooterComponent />
      </div>

    );
  }
}

export default AppHomeComponent;
