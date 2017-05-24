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
     this.state = {
       Username: '',
       Password: '',
       Email: '',
       Name: '',
       BirthDate: '',
       Registered: ''
         }
  }

  RegisterUser(){
    const {Username , Password , Email , Name , BirthDate} = this.state;
    this.props.mutate({
      variables: {Username, Password, Email, Name, BirthDate}})
    .then((e) => {

      if(e.data.register._id === `registered`){
        this.props.history.push('/registered');
        
      }else if(e.data.register._id === `hasUser`){
          this.setState({Registered: `ชื่อผู้ใช้นี้ถูกใช้ไปแล้ว`});

      }
    })
  }




    render(){
        return(
          <div>
           <NavbarComponent/>
           <br/>
            <Row>
              <Col span={8} offset={8}>
              <FormItem>
               <Input prefix={<Icon type="user" style={{ fontSize: 16 }} />} 
                     placeholder="  Username" onChange={(e) => this.setState({Username: e.target.value})} />
              </FormItem>
              <FormItem>
               <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 16 }} />} 
                      placeholder="  Password" onChange={(e) => this.setState({Password: e.target.value})}/>
              </FormItem>
              <FormItem>
               <Input type="email" prefix={<Icon type="mail" style={{ fontSize: 16 }} />} 
                      placeholder="  Email" onChange={(e) => this.setState({Email: e.target.value})} />
              </FormItem>
              <FormItem>
               <Input prefix={<Icon type="smile-o" style={{ fontSize: 16 }} />} 
                      placeholder="  Realname" onChange={(e) => this.setState({Name: e.target.value})}/>
              </FormItem>
              <FormItem>
               <DatePicker placeholder=" Birth Date" onChange={(data,dateString) => this.setState({BirthDate: dateString})}/>
              </FormItem>
              <FormItem>
               <Button type="primary" onClick={this.RegisterUser.bind(this)}> <Icon type="key"/> สมัครสมาชิก</Button>
                 <h2 className="repeatUser" >{this.state.Registered}</h2>
              </FormItem> 
              </Col>
            </Row>
          </div>
          
        )
    }
}

const Register = graphql(RegisterMutation)(withRouter(RegisterComponent))
export default Register