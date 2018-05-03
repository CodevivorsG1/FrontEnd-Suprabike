import React from 'react';
import { Marker } from 'react-google-maps';

export default class Markers extends React.Component {    
    render() {        
        return(
            <Marker
                key={this.props.id}
                position={this.props.location}
            >                
            </Marker>
        );
    }
}