import React from 'react';
import ToDo from './ToDo';

var ToDos = React.createClass({
  render: function(){
   
    let todo = this.props.todos.map((todo) => {
        
              return ( 
                
                <ToDo key={todo.id} 
                  id={todo.id} 
                  name={todo.name} 
                  desc={todo.desc}
                  checklist={todo.checklist}
                  editToDo={this.props.editToDo} 
                  deleteToDo={this.props.deleteToDo} /> 
                
              );
    });
    return (
      <div id="allToDos">
      {todo}
      </div>
    );
  }
});

export default ToDos;