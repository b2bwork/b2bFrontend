import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';
import { Form , Col , Row , Button , Select } from 'antd';


import NavbarComponent from '../Navbar/index';
import MenuUserProfileComponent from './menu';

import '../../../node_modules/antd/dist/antd.min.css';
import './index.css';

const FormItem = Form.Item;
const Option = Select.Option;

const bankUserProfileMutation = gql`
     mutation addBank($UserID: String! , $Bank: String , $BranchBank: String! , $BankNumber: String! ){
         AddBank(_id: $UserID , Bank: $Bank , BranchBank: $BranchBank , BankNumber: $BankNumber ){
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
        bankImage : props.bankImage,
        bankNumber: props.bankNumber
     }
    }

    uploadUserBank(){
        const {UserID,
               Bank,
               BranchBank,
               BankNumber} = this.state;
        this.props.mutate({
            UserID: localStorage.getItem('UserID'),
            Bank: Bank,
            BranchBank: BranchBank,
            BankNumber: BankNumber
        }).then((data)=>{
            console.log(data)
        })
    }
    render() {
        return (
            <div>
             <NavbarComponent/>
              <Row>
               <Col md={2} xs={12}>
                <MenuUserProfileComponent/>               
               </Col>
               <br/><br/>
               <Col md={19} offset={3}>
                 <Select
                   className="select"
                   placeholder="เลือกธนาคาร"
                   onChange={(bank)=> { this.setState(bank: bank) }}
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
                        value={this.state.bankNumber} 
                        onChange={(e)=> this.setState({branchBank: e.target.value})}/>

                        <input 
                        placeholder="หมายเลขบัญชี"  
                        type="text" 
                        value={this.state.bankNumber} 
                        onChange={(e)=> this.setState({bankNumber: e.target.value})}/>
                        <Button type="primary" onClick={this.uploadUserBank.bind(this)}></Button>
                  </FormItem>
               </Col>
             </Row>
            </div>
        );
    }
}

const editUserBank = graphql(bankUserProfileMutation)(withRouter(BankUserProfileComponent));
export default editUserBank;