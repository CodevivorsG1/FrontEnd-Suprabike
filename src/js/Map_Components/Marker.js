import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import Stores from './Stores';

export default class Markers extends React.Component { 
    state = {
        isOpen: false        
    }

    onToggleOpen = () => {        
        this.setState({isOpen: !this.state.isOpen})
    }


    render() {        
        return(
            <Marker onClick={this.onToggleOpen}
                key={this.props.id}
                position={this.props.location}                
            >
                {
                    this.state.isOpen &&
                    <InfoWindow onCloseClick={this.onToggleOpen}>
                        <Stores name={this.props.name} phone={this.props.phone} id={this.props.id}/>
                    </InfoWindow>
                }              
            </Marker>
        );
    }
}