import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';
import { Form , Col , Row , Input , Button , Select } from 'antd';


import NavbarComponent from '../Navbar/index';
import MenuUserProfileComponent from './menu';

import '../../../node_modules/antd/dist/antd.min.css';
import './index.css';

const FormItem = Form.Item;
const Option = Select.Option;

const bankUserProfileMutation = gql`
     mutation addBank($UserID: String! , $Bank: String , $BranchBank: String! , $BankNumber: String! ){
         AddBank(_id: String! , Bank: String! , BranchBank: String! , BankNumber: String! ){
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
                  </FormItem>
               </Col>
             </Row>
            </div>
        );
    }
}

export default BankUserProfileComponent;