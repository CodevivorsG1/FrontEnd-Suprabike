import React from 'react';

var AppHeaderComponent = React.createClass ({
    render: function() {
        return (
            <div>{this.props.message}</div>
        );
    }
});

