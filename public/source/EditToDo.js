import React from 'react';
import {Button, Modal, FormGroup, Form, Col, FormControl} from 'react-bootstrap';

var EditToDo = React.createClass({
    getInitialState: function(){
      return { showEdit: false };
    },
    open: function(){
      this.setState({ showEdit: true });   
    },
    close: function(){
      this.setState({ showEdit: false });
    },
    handleEdit: function(event){
      event.preventDefault();
      this.setState({ showEdit: false });
      var name = document.getElementById("formHorizontalToDoName").value;
      var desc = document.getElementById("formHorizontalToDoDesc").value;
      var array = document.getElementById("formHorizontalToDoChecklist").value.split(/\n/);
      var checklistArray = [];
      var todo = {
          "name": name,
          "desc": desc,
          "checklist": checklistArray,
          "id": this.props.id
        };
    this.props.editToDo(todo, this.props.id);
    },
    render: function(){
        return (
            <div>
            <Button id="editButton" className="debuttons" bsStyle="success" onClick={this.open}>Edit ToDo</Button>
                <Modal show={this.state.showEdit} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit ToDo</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
              <FormGroup controlId="formHorizontalToDoName">
                <Col sm={2}>
                  Name:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="ToDo Name" defaultValue={this.props.name}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalToDoDesc">
                <Col sm={2}>
                  Description:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Description" defaultValue={this.props.desc} />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalRecipeDirections">
                <Col sm={2}>
                  Checklist:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" componentClass="textarea" placeholder="Directions separated by line" defaultValue={this.props.checklist} />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleEdit}>Edit ToDo</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>    
        );
    }
});


export default EditToDo;