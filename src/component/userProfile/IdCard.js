import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { Form , Col , Row , Button , Select } from 'antd';
import DropzoneComponent from 'react-dropzone-component';

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
            if(data.data.AddBank._id == 'added'){
                this.dropzone.processQueue();
                this.setState({added: 'เพิ่มข้อมูลเรียบร้อย'})
            }else{
                this.setState({added: 'เปิดปัญหาในการเพิ่มบัญชีของคุณโปรดลองใหม่ภายหลัง'})
            }
        }).catch((err)=>{console.log(err)})
    }

    render() {
        const componentConfig = {
                        iconFiletypes: ['.jpg', '.png', '.gif'],
                        showFiletypeIcon: true,
                        postUrl: 'http://128.199.68.65:3001/upload/userIDcard'
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
                <img src={this.state.bankImage} width={500} height={120}/>
                <br/><br/>
                <div className="dropzoneJS">
                  <DropzoneComponent config={componentConfig} eventHandlers={eventHandlers}
                       djsConfig={this.djsConfig} multiple/>
                </div>
                  <FormItem>
                      <p> ชื่อ - นามสกุล
                        <input 
                          placeholder="ชื่อ - นามสกุล"  
                          type="text" 
                          value={this.state.RealName} 
                          onChange={(e)=> this.setState({RealName: e.target.value})}
                        />
                        <br/>
                      </p>
                      <p> ที่อยู่
                        <textarea  
                          rows="4" 
                          value={this.state.Address}
                          placeholder="ที่อยู่"  
                          onChange={(e)=> this.setState({Address: e.target.value})}/>
                        <br/>
                      </p>
                      <p> เลขบัตรประชาชน
                        <input 
                          placeholder="เลขบัตรประชาชน"  
                          type="text" 
                          value={this.state.IdCardNumber} 
                          onChange={(e)=> this.setState({IdCardNumber: e.target.value})}
                        />
                        <br/>
                      </p>
                        <Button type="primary" onClick={this.uploadUserIDcard.bind(this)}>แก้ไข</Button>
                  </FormItem>
            </div>
        );
    }
}

const editUserIDcard = graphql(IdCardUserProfileMutation)(IdCardUserProfileComponent);
export default editUserIDcard;