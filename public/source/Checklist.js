import React from 'react';

var Directions = React.createClass({
    render: function(){
        return <li className="directions">{this.props.step}</li>;
    }
});

export default Directions;