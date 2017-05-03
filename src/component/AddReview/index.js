import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars';
import Dropzone from 'react-dropzone';
import {Button,Modal,FormGroup,ControlLabel,FormControl,Form} from 'react-bootstrap';

class AddReviewComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
             showModal: false,
             WorkId: "",
             ReviewerName: localStorage.getItem('UserName'),
             Reviewdata: "",
             Star: "",
             Images: []
    };
    }
    
  getInitialState() {
    return { showModal: false };
                    }

  close() {
    this.setState({ showModal: false });
          }

  open() {
    this.setState({ showModal: true });
         }

    addReview(){

    }
    onDrop(Images) {
    this.setState({
      Images
    });
  }
    render(){
      return(
          <div>
          <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}>
          เขียนรีวิว
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>เขียนรีวิว</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ReactStars count={5} size={24}  color2={'#ffd700'} />
           <Form inline>
            <FormGroup controlId="formControlsTextarea">
             <ControlLabel>รายละเอียด</ControlLabel>
             <FormControl componentClass="textarea" placeholder="textarea" />
             </FormGroup>
             <FormGroup controlId="formControlsTextarea">
             <ControlLabel>รูปภาพ</ControlLabel>
             <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>อัพโหลดรูปภาพงาน</p>
             </Dropzone>
             </FormGroup>
           </Form>
          </Modal.Body>
        </Modal>
        </div>
      )

    }
}
export default AddReviewComponent