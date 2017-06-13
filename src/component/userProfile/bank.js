import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';
import { Form , Col , Row , Button , Select } from 'antd';

import '../../../node_modules/antd/dist/antd.min.css';
import './index.css';

const FormItem = Form.Item;
const Option = Select.Option;

const bankUserProfileMutation = gql`
     mutation addBank($_id: String! , $Bank: String , $BranchBank: String! , $BankNumber: String! ){
         AddBank(_id: $_id , Bank: $Bank , BranchBank: $BranchBank , BankNumber: $BankNumber ){
             _id
         }

     }
 `;
class BankUserProfileComponent extends Component {
    constructor(props){
     super(props);
     this.state = {
        bank: props.bank,
        branchBank : props.branchBank,
        bankImage : props.imageBank,
        bankNumber: props.bankNumber
     }
    }

    uploadUserBank(){
        const {Bank,
               BranchBank,
               BankNumber} = this.state;
        this.props.mutate({
            _id: localStorage.getItem('UserID'),
            Bank: Bank,
            BranchBank: BranchBank,
            BankNumber: BankNumber
        }).then((data)=>{
            console.log(data)
        })
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

const editUserBank = graphql(bankUserProfileMutation)(withRouter(BankUserProfileComponent));
export default editUserBank;