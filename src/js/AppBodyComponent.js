import React from 'react';

import AppNavigationComponent from './AppNavigationComponent.js'
import AppContentComponent from './AppContentComponent.js'
import Landing from './Landing.js'
import '../css/AppBodyComponent.css';

class AppBodyComponent extends React.Component{
   render() {
       return (
            <div className="Body-square">
              
              <div class="row">
                <div class="col-sm-12">
                  <Landing />
                </div>
                <div class="col-sm-3">
                  <AppNavigationComponent  />
                </div>
                <div class="col-sm-9">
                  <AppContentComponent />
                </div>
              </div>
            </div>
        );
   }
}

export default AppBodyComponent;

