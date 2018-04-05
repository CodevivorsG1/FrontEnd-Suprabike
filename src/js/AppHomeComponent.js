import React from 'react';
import '../css/App.css';
import AppBodyComponent from './AppBodyComponent.js'
import AppHeaderComponent from './AppHeaderComponent.js'
import AppFooterComponent from './AppFooterComponent.js'
import store from './store'

class AppHomeComponent extends React.Component {
	constructor(){
		super();
	}
  render(){
  	console.log('pararm '+this.props.match.params.section)
  	this.setContentView(this.props.match.params.section)
    return(
      <div >
        <AppHeaderComponent />
        <AppBodyComponent />
        <AppFooterComponent />
      </div>

    );
  }
  setContentView(view){
  	store.dispatch({
			type: 'SECTION_VIEW',
			sectionView: view
		})
  }
}

export default AppHomeComponent;
