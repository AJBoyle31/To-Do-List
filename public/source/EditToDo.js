import React from 'react';
import {Button, Modal, FormGroup, Form, Col, FormControl} from 'react-bootstrap';

var EditRecipe = React.createClass({
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
        var name = document.getElementById("formHorizontalRecipeName").value;
        var ingredients = document.getElementById("formHorizontalRecipeIngredients").value;
        var directions = document.getElementById("formHorizontalRecipeDirections").value;
        var recipe = {
        "name": name,
        "ingredients": ingredients.split(','),
        "directions": directions.split(','),
        "id": this.props.id
        };
    this.props.editRecipe(recipe, this.props.id);
    },
    render: function(){
        return (
            <div>
            <Button id="editButton" className="debuttons" bsStyle="success" onClick={this.open}>Edit Recipe</Button>
                <Modal show={this.state.showEdit} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Recipe</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
              <FormGroup controlId="formHorizontalRecipeName">
                <Col sm={2}>
                  Name:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Recipe Name" defaultValue={this.props.name}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalRecipeIngredients">
                <Col sm={2}>
                  Ingredients:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Ingredients separated by commas" defaultValue={this.props.ingredients} />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalRecipeDirections">
                <Col sm={2}>
                  Directions:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Directions separated by commas" defaultValue={this.props.directions} />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleEdit}>Edit Recipe</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>    
        );
    }
});


export default EditRecipe;