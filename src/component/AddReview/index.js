import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import '../../../node_modules/antd/dist/antd.min.css';
import {Button , Rate , Modal} from 'antd';
import './index.css';


const AddReviewQuery = gql`
          mutation addreview($WorkId: String , $ReviewerName: String , $Reviewdata: String ,$Star: Int, $Image: [String]){
                   InsertReview(WorkId: $WorkId , ReviewerName: $ReviewerName , Reviewdata: $Reviewdata , Star: $Star , Image: $Image ){
                     WorkId
                   }
                 }
`;
class AddReviewComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
             showModal: false,
             WorkId: "",
             ReviewerName: localStorage.getItem('UserName'),
             Reviewdata: "",
             Star: 0,
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

    render(){
      return(
          <div>
          <Button
          type="primary"
          onClick={this.open.bind(this)}>
          เขียนรีวิว
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>เขียนรีวิว</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Rate onChange={(rate) => this.setState({Star: rate.target.value})}/>
          <div class="form-group">
           <label class="col-sm-2 control-label">รายละเอียด</label>
           <div class="col-sm-10">
             <textarea onChange={(change) => this.setState({Reviewdata: change.target.value})}></textarea>
           </div>
           </div>
           <label class="col-sm-2 control-label">รูปภาพงาน</label>
          </Modal.Body>
        </Modal>
        </div>
      )

    }
}

const Addreview = graphql(AddReviewQuery)(AddReviewComponent)
export default Addreview