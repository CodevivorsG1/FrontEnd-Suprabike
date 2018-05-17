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
                <div class="col-xs-3 col-lg-3 ">
                  <AppNavigationComponent  />
                </div>
                <div class="col-xs-9 col-lg-9">
                  <AppContentComponent />
                </div>
              </div>
            </div>
        );
   }
}

export default AppBodyComponent;
