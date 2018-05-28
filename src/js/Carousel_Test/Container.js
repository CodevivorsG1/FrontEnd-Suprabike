import React from 'react';
import Carousel from './Carousel.js';
import Bicycle from './Bicycle';
import AppHeaderComponent from '../AppHeaderComponent';
import AppNavigationComponent from '../AppNavigationComponent';
import '../../css/bicycle-menu.css';
import { POINT_CONVERSION_HYBRID } from 'constants';

export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }

        this.data = {
            type:'',
            data: []
        }
    }

    componentDidMount() {
        console.log("props")
        console.log(this.props)

        this.setState({
            ...this.state,
            size: this.props.data.size,
            type: this.props.data.type
        });       

    }
    
    render() {
        
        return(
            <div>
          <div className="container-fluid">
            {/*<button onClick={() => this.loadSillas()}>Sillas</button>
            <button onClick={() => this.loadTech()}>Técnicos</button>*/}
            
            <div className="row menu-navigation">            
            <Bicycle loadChooser={this.props.func}/>
            </div>           
          </div>  
          </div>
        );
    }
}