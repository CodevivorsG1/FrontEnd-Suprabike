import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js'
import './styles.css';

class PDFViewer extends React.Component{
  constructor(props){
    super();
    this.state = {
      url: "http://pinkmonkey.com/dl/library1/london06.pdf"
    }
  }
  render(){
    return(
      <div>
        <AppHeaderComponent />
        <div id="content">
          <iframe src={this.state.url} height="100%" width="100%"
          style={{overflow:"hidden"}}/>
        </div>
      </div>
    );
  }

}

export default PDFViewer;
