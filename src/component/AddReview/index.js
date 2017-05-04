import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars';
import Dropzone from 'react-dropzone';
import DropzoneComponent from 'react-dropzone-component';
import './index.css';
import '../../../node_modules/react-dropzone-component/styles/filepicker.css'
import '../../../node_modules/dropzone/dist/min/dropzone.min.css'
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
      let componentConfig = { postUrl: 'no-url' };
let djsConfig = { autoProcessQueue: false }
let eventHandlers = { addedfile: (file) => console.log(file) }
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
          <div class="form-group">
           <label class="col-sm-2 control-label">รายละเอียด</label>
           <div class="col-sm-10">
             <textarea onChange={(change) => this.setState({Reviewdata: change.target.value})}></textarea>
           </div>
           </div>
           <label class="col-sm-2 control-label">รูปภาพงาน</label>
              <DropzoneComponent config={componentConfig} eventHandlers={eventHandlers} djsConfig={djsConfig} />
          </Modal.Body>
        </Modal>
        </div>
      )

    }
}
export default AddReviewComponent