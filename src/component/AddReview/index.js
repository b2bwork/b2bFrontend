import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars';
import {Button,Modal} from 'react-bootstrap';

class AddReviewComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
             showModal: false,
             WorkId: "",
             ReviewerName: localStorage.getItem('UserName'),
             Reviewdata: "",
             Star: "",
             Image: ""
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
            
          </Modal.Body>
        </Modal>
        </div>
      )

    }
}
export default AddReviewComponent