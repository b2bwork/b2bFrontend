import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { Form , Col , Row , Button , Select } from 'antd';

import '../../../node_modules/antd/dist/antd.min.css';
import './index.css';

const FormItem = Form.Item;
const Option = Select.Option;

const bankUserProfileMutation = gql`
     mutation addBank($id: String! , $Bank: String! , $BranchBank: String! , $BankNumber: String! ){
         AddBank(_id: $id , Bank: $Bank , BranchBank: $BranchBank , BankNumber: $BankNumber ){
             _id
         }

     }
 `;
class BankUserProfileComponent extends Component {
    constructor(props){
     super(props);
     this.state = {
        id: localStorage.getItem('UserID'),
        bank: props.bank,
        branchBank : props.branchBank,
        bankImage : props.imageBank,
        bankNumber: props.bankNumber
     }
    }

    uploadUserBank(){
        const {id,
               Bank,
               BranchBank,
               BankNumber} = this.state;
        this.props.mutate({
            variables:{
              id,
              Bank,
              BranchBank,
              BankNumber
        }}).then((data)=>{
            console.log(data)
        }).catch((err)=> { console.log(err)})
    }

    selectbank(bank){
        this.setState({bank: bank});
    }
    render() {
        return (
            <div>
                 <Select
                   className="select"
                   placeholder="เลือกธนาคาร"
                   onChange={(bank)=> { this.selectbank.bind(this) }}
                  >
                    <Option value="ธนาคารกสิกรไทย">ธนาคารกสิกรไทย</Option>
                    <Option value="ธนาคารกรุงไทย">ธนาคารกรุงไทย</Option>
                    <Option value="ธนาคารกรุงเทพ">ธนาคารกรุงเทพ</Option>
                    <Option value="ธนาคารทหารไทย">ธนาคารทหารไทย</Option>
                    <Option value="ธนาคารไทยพาณิชย์">ธนาคารไทยพาณิชย์</Option>
                
                  </Select>
                  <FormItem>
                       <input 
                        placeholder="สาขา"  
                        type="text" 
                        value={this.state.branchBank} 
                        onChange={(e)=> this.setState({branchBank: e.target.value})}/>
                        <br/>
                        <input 
                        placeholder="หมายเลขบัญชี"  
                        type="text" 
                        value={this.state.bankNumber} 
                        onChange={(e)=> this.setState({bankNumber: e.target.value})}/>
                        <br/>
                        <Button type="primary" onClick={this.uploadUserBank.bind(this)}>แก้ไข</Button>
                  </FormItem>
            </div>
        );
    }
}

const editUserBank = graphql(bankUserProfileMutation)(BankUserProfileComponent);
export default editUserBank;