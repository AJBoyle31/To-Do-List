import React from 'react';
import {Button, Modal, FormGroup, Form, Col, FormControl} from 'react-bootstrap';


function randomIdGenerator(){
  var random = Math.round(Math.random() * 9999999);
  return random;
}


var AddToDo = React.createClass({
  getInitialState: function(){
    return { showAdd: false };
  },
  open: function(){
    this.setState({ showAdd: true });   
  },
  close: function(){
    this.setState({ showAdd: false });
  },
  handleSubmit: function(event){
    event.preventDefault();
    this.setState({ showAdd: false });
    var name = document.getElementById("formHorizontalToDoName").value;
    var desc = document.getElementById("formHorizontalToDoDesc").value;
    var array = document.getElementById("formHorizontalToDoChecklist").value.split(/\n/);
    var checklistArray = [];
    for(var x = 0; x < array.length; x++){
        var obj = {
          "item": array[x],
          "done": false
        };
        checklistArray.push(obj);
    }
    
    var id = randomIdGenerator();
    var todo = {
    "name": name,
    "desc": desc,
    "checklist": checklistArray,
    "id": id
    };
    this.props.addToDo(todo);
  },
  render: function(){
    return (
      <div>
      <Button id="addButton" bsStyle="primary" bsSize="large" onClick={this.open}>Add ToDo</Button>
      <Modal show={this.state.showAdd} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add ToDo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalToDoName">
                <Col sm={2}>
                  Name:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="To Do Name"/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalToDoDesc">
                <Col sm={2}>
                  Description:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Short description" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalToDoChecklist">
                <Col sm={2}>
                  Checklist:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" componentClass="textarea" placeholder="Checklist separated by line" />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit}>Add ToDo</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
   }
});

export default AddToDo;