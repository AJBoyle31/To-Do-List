import React from 'react';
//import Description from './Description';
import EditToDo from './EditToDo';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Checklist from './Checklist.js';



var ToDo = React.createClass({
  getInitialState: function(){
    return {
      showToDo: false
    };
  },
  toggleToDo: function(){
    this.setState({showToDo: !this.state.showToDo});
  },
  handleClick: function(event){
      this.props.deleteToDo(this.props.id);
      event.preventDefault();
  },
  render: function(){
    let descTitle, desc, toDoButton, checklistTitle, checklist;
    let num=0;
    
    if (this.state.showToDo) {
      
      descTitle = <h3 id="descTitle">Description</h3>;
      desc = this.props.desc;
      
      checklistTitle = <h3 id="checklistTitle">Checklist</h3>;
      checklist = this.props.checklist.map((step) => {
        num++;
        return (<Checklist key={num} step={step} />);
      });
        
      toDoButton =
        <div id="buttonContainer">
        <ButtonToolbar>
          <EditToDo desc={this.props.desc} checklist={this.props.checklist} name={this.props.name} id={this.props.id} editToDo={this.props.editToDo}/>
          <Button className="debuttons" bsStyle="danger" id="deleteButton" onClick={this.handleClick}>Delete</Button> 
        </ButtonToolbar>
        </div>;
    }
    
    return (
      <div className="todos">
        
        <div className="desc" onClick={this.toggleToDo}>
          <h2 className="toDoName">{this.props.name}</h2>
        </div>
        
        {descTitle}
        <h3>{desc}</h3>
      
        {checklistTitle}
        <ul>{checklist}</ul>
        {toDoButton}
        
      </div>
    );
  }
});

export default ToDo;