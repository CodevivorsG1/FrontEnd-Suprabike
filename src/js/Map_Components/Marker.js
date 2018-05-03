import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

export default class Markers extends React.Component { 
    state = {
        isOpen: false        
    }

    onToggleOpen = () => {
        console.log(this.props.id);
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
                        <h6>Hola!</h6>
                    </InfoWindow>
                }              
            </Marker>
        );
    }
}