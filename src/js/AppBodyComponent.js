import React from 'react';

var AppBodyComponent = React.createClass({
   render: function () {
       return (
            <div>{this.props.message}</div>   
        );
   } 
});