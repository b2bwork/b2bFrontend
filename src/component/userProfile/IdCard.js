import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { Form , Col , Row , Button , Select } from 'antd';

import '../../../node_modules/antd/dist/antd.min.css';
import './index.css';

const FormItem = Form.Item;
const Option = Select.Option;

const IdCardUserProfileMutation = gql`
     mutation addBank($id: String! , $RealName: String! , $Address: String! , $IdCardNumber: String! ){
         AddIdCard(_id: $id , RealName: $RealName , Address: $Address , IdCardNumber: $IdCardNumber ){
             _id
         }

     }
 `;
class IdCardUserProfileComponent extends Component {
    constructor(props){
     super(props);
     this.state = {
        RealName: props.RealName,
        Address: props.Address,
        IdCardNumber: props.IdCardNumber
     }
    }

    uploadUserIDcard(){
        const {RealName,
               Address,
               IdCardNumber} = this.state;
        this.props.mutate({
            variables:{
            id: localStorage.getItem('UserID'),
            RealName,
            Address,
            IdCardNumber
        }}).then((data)=>{
            console.log(data)
        }).catch((err)=>{console.log(err)})
    }

    render() {
        return (
            <div>
                  <FormItem>
                       <input 
                          placeholder="ชื่อนามสกุล"  
                          type="text" 
                          value={this.state.RealName} 
                          onChange={(e)=> this.setState({RealName: e.target.value})}
                        />
                        <br/>
                        <textarea  
                          rows="4" 
                          value={this.state.Address}
                          placeholder="ที่อยู่"  
                          onChange={(e)=> this.setState({Address: e.target.value})}/>
                        <br/>
                        <input 
                          placeholder="เลขบัตรประชาชน"  
                          type="text" 
                          value={this.state.IdCardNumber} 
                          onChange={(e)=> this.setState({IdCardNumber: e.target.value})}
                        />
                        <br/>
                        <Button type="primary" onClick={this.uploadUserIDcard.bind(this)}>แก้ไข</Button>
                  </FormItem>
            </div>
        );
    }
}

const editUserIDcard = graphql(IdCardUserProfileMutation)(IdCardUserProfileComponent);
export default editUserIDcard;