import React from 'react';
import ReactDOM from 'react-dom';
import ToDos from './ToDos';
import AddToDo from './AddToDo';
import Title from './Title.js';

var myToDos = [
  { 
    "name": "To do task 1",
    "desc": "this is the description for task 1",
    "checklist": [{"item": "checklist item 1", "done": false }, {"item": "checklist item 2", "done": false}],
    "id": 1
  },
  {
    "name": "To do task 2",
    "desc": "this is the description for task 2",
    "checklist": [{"item": "checklist item 3", "done": true }, {"item": "checklist item 4", "done": false}],
    "id": 1
  },
  {
    "name": "To do task 3",
    "desc": "this is the description for task 3",
    "checklist": [{"item": "checklist item 5", "done": false }, {"item": "checklist item 6", "done": true}],
    "id": 1
  }
];

var name = "My To Do List";

function isLocalStorageSupported(){
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  }
  catch (e) {
    return false;
  }
}



var App = React.createClass({
  setInitialState: function(){
    return {
      todo: [],
      name: ""
    };
  },
  componentWillMount: function(){
    if (isLocalStorageSupported){
      if(localStorage["todo"] === undefined){
        localStorage.setItem("todo", JSON.stringify(myToDos));
        localStorage.setItem("name", name);
      }
      else {
        var retrievedData = localStorage.getItem("todo");
        var retrieveName = localStorage.getItem("name");
        myToDos = JSON.parse(retrievedData);
        name = retrieveName;
      }
    }    
    this.setState({ todo: myToDos,
                    name: name  
    });
  },
  addToDo: function(toDo){
    let newToDo = this.state.todo.concat(toDo);
    this.setState({ todo: newToDo});
    localStorage.setItem("todo", JSON.stringify(newToDo));
    
  },
  editToDo: function(todo, id){
    let toDoIndex = this.state.todo.findIndex((todo)=>todo.id == id);
    let oldToDo = this.state.todo;
    oldToDo[toDoIndex] = todo;
    this.setState({ todo: oldToDo});
    localStorage.setItem("todo", JSON.stringify(oldToDo));
  },
  deleteToDo: function(id){
    let toDoIndex = this.state.todo.findIndex((todo)=>todo.id == id);
    let prevToDoState = this.state.todo;
    prevToDoState.splice(toDoIndex, 1);
    this.setState({todo: prevToDoState});
    localStorage.setItem("todo", JSON.stringify(prevToDoState));
  },
  handleNameChange: function(name){
    this.setState({name: name});
    localStorage.setItem("name", name);
  },
  render: function(){
    
    return (
    <div>
        <Title nameCallback={this.handleNameChange} name={this.state.name}/>
        <div id="toDoContainer">
          <ToDos   todos={this.state.todo} editToDo={this.editToDo} deleteToDo={this.deleteToDo} />
          
          <AddToDo addToDo={this.addToDo} todos={this.state.todo}/>  
        </div>
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
