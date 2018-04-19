import React from 'react';
import AppHeaderComponent from '../AppHeaderComponent.js'
import './styles.css';

class PDFViewer extends React.Component{
  constructor(props){
    super();
    this.state = {
      url: "https://mozilla.github.io/pdf.js/web/viewer.html"
    }
  }
  render(){
    return(
      <div>
        <AppHeaderComponent />
        <div id="content">
          <iframe src={this.state.url} height="91%" width="100%"
          style={{overflow:"hidden"}}/>
        </div>
      </div>
    );
  }

}

export default PDFViewer;
