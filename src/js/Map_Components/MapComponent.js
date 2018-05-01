import React from 'react';
import GoogleMapReact from 'google-map-react';


class SimpleMap extends React.Component{

    static defaultProps = {
        center: {
            lat: 59.95,
            lon: 30.33
        },
        zoom: 11
    };

    render(){
        return({
            <div style={{height:'100%', width:'100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent 
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />
                <GoogleMapReact />
            </div>            
        });
    }
}

export default SimpleMap;