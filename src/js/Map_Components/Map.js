import React from 'react';
import ReactDOM from 'react-dom';

export default class Map extends React.Component {

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.google !== this.props.google || prevProps.addresses !== this.props.addresses) {
        this.loadMap();
      }
    }   

    loadMap(){
        if (this.props && this.props.google) {
            // google is available
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            const mapConfig = Object.assign({}, {
              center: {lat:0, lng:180},
              zoom: 2              
            })
            
            this.map = new maps.Map(node, mapConfig);

            this.props.addresses.map( (add) => {
              const marker = new google.maps.Marker({
                position: {lat: add.lat, lng: add.lng},
                map: this.map
              });
            })            
      }
    }

    render() {
      const style = {
        width: '85vw',
        height: '75vh'
      }
      return (
        <div ref='map' style={style}>
          Loading map...
        </div>
      )
    }
  }