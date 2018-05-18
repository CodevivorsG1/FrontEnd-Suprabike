import React, { Component } from 'react';
import AppHeaderComponent from '../AppHeaderComponent';
import AppNavigationComponent from '../AppNavigationComponent';
import '../../css/bicycle-menu.css';

class ComponentNuevo extends Component {
    render() {
        return (
            <div>
            <AppHeaderComponent/>
            
          <div className="container-fluid">
            {/*<button onClick={() => this.loadSillas()}>Sillas</button>
            <button onClick={() => this.loadTech()}>Técnicos</button>*/}
            
            <div className="row menu-navigation">
                <div className="menu-component">
                    <AppNavigationComponent/>
                </div>
            </div>
          </div>  
          </div>
        );
    }
}

export default ComponentNuevo;