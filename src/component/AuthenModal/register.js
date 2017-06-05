import React,{Component} from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

import '../../../node_modules/antd/dist/antd.min.css'
import { Form, Icon, Input, Button , DatePicker , Row , Col } from 'antd';
import NavbarComponent from '../Navbar/index';
import './index.css';

const FormItem = Form.Item;

const RegisterMutation = gql`
 mutation RegisterUser( $Username: String!, $Password: String!, $Email: String!, $Name: String!, $BirthDate: String!){
    register( Username: $Username,  Password: $Password, Email: $Email,  Name: $Name,  BirthDate: $BirthDate){
      _id
  }
  }`;

class RegisterComponent extends Component {
  
  constructor(props){
     super(props)
     console.log(props)
     this.state = {
       Username: '',
       Password: '',
       Email: '',
       Name: '',
       BirthDate: '',
       Registered: '',
       nullInput: ''
         }
  }

  RegisterUser(){
    const {Username , Password , Email , Name , BirthDate} = this.state;
    if(Username != null && Password != null && Email != null &&  Name != null &&  BirthDate != null){
       this.props.mutate({
          variables: {Username: Username, Password: Password, Email: Email, Name: Name, BirthDate: BirthDate}}).then((e) => {
             if(e.data.register._id === `registered`){
               this.props.history.push('/registered');
               
             }else if(e.data.register._id === `hasUser`){
                 this.setState({Registered: `ชื่อผู้ใช้นี้ถูกใช้ไปแล้ว`});
       
             }
           }).catch((error)=> console.log(error))
    }else{
      this.setState({nullInput: 'คุณใส่ข้อมูลไม่ครบ'});
    }
  }




    render(){
      const { getFieldDecorator } = this.props.form;
        return(
          <div>
           <NavbarComponent/>
           <br/>
            <Row>
              <Col span={8} offset={8}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'โปรดป้อนชื่อผู้ใช้งาน' }],
                 })(<Input placeholder="  ชื่อผู้ใช้งาน   " onChange={(e) => this.setState({Username: e.target.value})} />)
                 }
              </FormItem>
              <FormItem>
                 {getFieldDecorator('Password', {
                  rules: [{ required: true, message: 'โปรดป้อนรหัสผ่าน' }],
                 })(<Input placeholder="  รหัสผ่าน   " onChange={(e) => this.setState({Password: e.target.value})}/>)}
              </FormItem>
              <FormItem>
                {getFieldDecorator('Email', {
                  rules: [{ required: true, message: 'โปรดป้อนอีเมล์' }],
                 })(<Input placeholder="  อีเมล์   " onChange={(e) => this.setState({Email: e.target.value})} />)}
              </FormItem>
              <FormItem>
                {getFieldDecorator('Name', {
                  rules: [{ required: true, message: 'โปรดป้อนชื่อจริง' }],
                 })(<Input placeholder="  ชื่อจริง   " onChange={(e) => this.setState({Name: e.target.value})}/>)}
              </FormItem>
              <FormItem>
               <DatePicker placeholder=" วันเกิด   " onChange={(data,dateString) => this.setState({BirthDate: dateString})}/>
              </FormItem>
              <FormItem>
               <Button type="primary" onClick={this.RegisterUser.bind(this)} size="large"> <Icon type="key"/> สมัครสมาชิก</Button>
                 <h2 className="WrongInput" >{this.state.Registered}</h2>
                 <h2 className="WrongInput" >{this.state.nullInput}</h2>
              </FormItem> 
              </Col>
            </Row>
          </div>
          
        )
    }
}
const Register = graphql(RegisterMutation)(withRouter(Form.create()(RegisterComponent)))
export default Register