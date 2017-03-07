import React from 'react';


var Ingredients = React.createClass({
  render: function(){
    return <li className="ingredients">{this.props.ingredient}</li>;
  }
});


export default Ingredients;