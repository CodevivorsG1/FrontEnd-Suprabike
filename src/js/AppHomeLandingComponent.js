import React from 'react';

import AppHeaderComponent from './AppHeaderComponent.js'
import AppFooterComponent from './AppFooterComponent.js'
import Landing from './Landing.js'
import '../css/AppBodyComponent.css';

class AppHomeLandingComponent extends React.Component{
   render() {
       return (
           <div className="App">
        <AppHeaderComponent />
        <Landing />
        <AppFooterComponent />
      </div>
        );
   }
}

export default AppHomeLandingComponent;
