import React from 'react';
import {Button, Modal, FormGroup, Form, Col, FormControl} from 'react-bootstrap';


var Title = React.createClass({
    getInitialState: function(){
      return {showTitle: false};  
    },
    open: function(){
        this.setState({showTitle: true});
    },
    close: function(){
        this.setState({showTitle: false});
    },
    handleTitleChange: function(event){
        event.preventDefault();
        this.setState({showTitle: false});
        var title = document.getElementById("formHorizontalTitleName").value;
        this.props.nameCallback(title);
    },
    render: function(){
        return (
            <div>
            <h1 id="title"><a onClick={this.open}>{this.props.name}</a></h1>
            <Modal show={this.state.showTitle} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit To Do Box Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalTitleName">
                            <Col sm={2}>
                                Title:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" defaultValue={this.props.name}/>
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleTitleChange}>Confirm</Button>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
});

export default Title;