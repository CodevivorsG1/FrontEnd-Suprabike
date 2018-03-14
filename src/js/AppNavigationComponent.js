import React from 'react';
import '../css/AppNavigationComponent.css';

class AppNavigationComponent extends React.Component{
  render(){
      return (
        <div>

          <div className="CustomTable">
            <h3> I am the nav-bar</h3>
            <table>
              <tr>
                <th>MI CUENTA</th>
              </tr>
              <tr>
                <th>MIS COMPRAS</th>
              </tr>
              <tr>
                <th>ENSAMBLADAS</th>
              </tr>
              <tr>
                <th>ARMAR BICI</th>
              </tr>
              <tr>
                <th>SOLICITAR TECNICO</th>
              </tr>
              <tr>
                <th>SALIR CUENTA</th>
              </tr>
            </table>
          </div>
      </div>
    );
  }
}

export default AppNavigationComponent;
