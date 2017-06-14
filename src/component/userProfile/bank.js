import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { Form , Col , Row , Button , Select } from 'antd';
import DropzoneComponent from 'react-dropzone-component';

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
        bankNumber: props.bankNumber,
        added: ''
     }
     this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            uploadMultiple: true,
            autoProcessQueue: false,
            maxFiles: 1,
            params: {
                _id: localStorage.getItem('UserID')
            }
            
        };

        this.dropzone = null;
    }

    uploadUserBank(){
        const {id,
               bank,
               branchBank,
               bankNumber} = this.state;
        this.props.mutate({
            variables:{
              id: id,
              Bank: bank,
              BranchBank: branchBank,
              BankNumber: bankNumber
        }}).then((data)=>{
            if(data.data.AddBank._id == 'added'){
                this.dropzone.processQueue();
                this.setState({added: 'เพิ่มข้อมูลเรียบร้อย'})
            }else{
                this.setState({added: 'เปิดปัญหาในการเพิ่มบัญชีของคุณโปรดลองใหม่ภายหลัง'})
            }
        }).catch((err)=> { 
            this.setState({added: 'เปิดปัญหาในการเพิ่มบัญชีของคุณโปรดลองใหม่ภายหลัง'})
        })
    }

    selectbank(value){
        this.setState({bank: value});
    }
    render() {
        const componentConfig = {
                        iconFiletypes: ['.jpg', '.png', '.gif'],
                        showFiletypeIcon: true,
                        postUrl: 'http://128.199.68.65:3001/upload/userBank'
                    };
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            addedfile: null,
            sendingmultiple: null,
            processingmultiple: null,
            completemultiple: ()=> console.log('complete'),
        }

        return (
            <div>
                <div className="dropzoneJS">
                  <DropzoneComponent config={componentConfig} eventHandlers={eventHandlers}
                       djsConfig={this.djsConfig} multiple/>
                </div>
                <br/>
                 <Select
                   className="select"
                   placeholder="เลือกธนาคาร"
                   onChange={ this.selectbank.bind(this) }
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
                        {this.state.added}
                  </FormItem>
            </div>
        );
    }
}

const editUserBank = graphql(bankUserProfileMutation)(BankUserProfileComponent);
export default editUserBank;