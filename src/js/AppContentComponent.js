import React from 'react';

var AppContentComponent = React.createClass({
    render: function(){
        return(
            <div>{this.props.message}</div>
            );
    }
});