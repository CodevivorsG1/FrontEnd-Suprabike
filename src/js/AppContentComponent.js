import React from 'react';
import testImg from '../img/scott-bike.jpg';
import "../css/AppContentComponent.css";

class AppContentComponent extends React.Component{
  render() {
    return(
      <div className="Content-square">
        <h3>I am the content</h3>
        <img src={testImg} alt="Bike"className="picture"/>
      </div>

    );
  }

}

export default AppContentComponent;
