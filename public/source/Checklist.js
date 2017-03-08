import React from 'react';

var Directions = React.createClass({
    render: function(){
        return <li className="checklist">{this.props.step}</li>;
    }
});

export default Directions;