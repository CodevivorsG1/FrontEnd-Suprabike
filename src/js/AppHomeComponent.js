import React from 'react';
import '../css/App.css';
import AppBodyComponent from './AppBodyComponent.js'
import AppHeaderComponent from './AppHeaderComponent.js'
import AppFooterComponent from './AppFooterComponent.js'
import LoginComponent from './LoginComponent.js'
 
import store from './store'


class AppHomeComponent extends React.Component {
	constructor(){
    super();
    console.log(store.getState())
    this.state = {
      token : store.getState().token
    }
    store.subscribe(() => {
      this.state.token = store.getState().token
      });
    
		
	}
  render(){
  	console.log('pararm '+this.state.token   )
  	this.setContentView(this.props.match.params.section)
    return(
      store.getState().token != ""
        ? 
      <div >
        <AppHeaderComponent />
        <AppBodyComponent />
        <AppFooterComponent />
      </div>
      : <LoginComponent />

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
