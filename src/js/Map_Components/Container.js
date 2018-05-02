import React from 'react';
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent';
import { Map } from "./Map.js";

export class Container extends React.Component {
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
          }

        if (!this.props.loaded) {
            return <div>Loading...</div>
          }
          return (
            <div style={style}>
                <Map google={this.props.google}
                 zoom={14}/>
            </div>
          )
    }
}

export default GoogleApiComponent({
    apiKey: 'AIzaSyAqD4Z3Cam8ZJqQr_v42hKjmQktYMq-27A'
})(Container)


