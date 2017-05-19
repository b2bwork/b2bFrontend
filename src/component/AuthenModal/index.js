import React,{Component} from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import '../../../node_modules/antd/dist/antd.min.css'
import { Form, Icon, Input, Button, Checkbox , Tabs } from 'antd';
import './index.css';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default class AuthenModalCompomponent extends Component {
  
  constructor(props){
     super(props)
     this.state = {
       Username: '',
       Password: ''
         }
  }

  InputUsername(event){
    this.setState({Username: event.target.value})
  }

  InputPassword(event){
    this.setState({Password: event.target.value})
  }


    render(){
        return(
          <div className="FormSize">
            <FormItem>
              <Input prefix={<Icon type="user" style={{ fontSize: 16 }} />} 
                     placeholder="Username" onChange={this.InputUsername.bind(this)} />
            </FormItem>
            <FormItem>
              <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 16 }} />} 
                     placeholder="Password" onChange={this.InputPassword.bind(this)}/>
            </FormItem>
            <FormItem>
              <Button type="primary"> <Icon type="key"/> เข้าสู่ระบบ</Button>
            </FormItem> 
          </div>
          
        )
    }
}
