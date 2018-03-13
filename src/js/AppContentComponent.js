import React from 'react';
import testImg from '../img/test.jpg';
import "../css/AppContentComponent.css";

class AppContentComponent extends React.Component{
  render() {
    return(
      <div>
        <img src={testImg} className="Content-square"/>
      </div>

    );
  }

}

export default AppContentComponent;
