import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

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
                        <div>
                            <h5>{this.props.name}</h5><br/>
                            <h6>tel: {this.props.phone}</h6>
                        </div>
                    </InfoWindow>
                }              
            </Marker>
        );
    }
}