import React from 'react';

import AppNavigationComponent from './AppNavigationComponent.js'
import AppContentComponent from './AppContentComponent.js'
import '../css/AppBodyComponent.css';

class AppBodyComponent extends React.Component{
   render() {
       return (
            <div className="Body-square">
              <h2>This is app body component</h2>
              <div>
                <AppNavigationComponent  />
                <AppContentComponent />
              </div>
            </div>
        );
   }
}

export default AppBodyComponent;

