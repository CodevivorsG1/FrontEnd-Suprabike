import React from 'react';
import AppHeaderComponent from './AppHeaderComponent.js';
import '../css/register.css';

class RegisterComponent extends React.Component {
  render() {
    return (
      <div>
        <AppHeaderComponent />
        <div class="container-fluid">
          <div class="panel">
            <div class="panel-heading">
              <h3 class="panel-heading">Ingrese por favor ...</h3>
            </div>
            <div class="row">
            </div>
          </div>

        </div>
      </div>



    );
  }
}

export default RegisterComponent;
