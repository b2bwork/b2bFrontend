import React,{Component} from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import '../../../node_modules/antd/dist/antd.min.css'
import { Form, Icon, Input, Button, Checkbox , Tabs , DatePicker } from 'antd';
import enUS from '../../../node_modules/antd/lib/locale-provider/en_US';
import './index.css';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default class RegisterComponent extends Component {
  
  constructor(props){
     super(props)
     this.state = {
       Username: '',
       Password: '',
       Email: '',
       Name: '',
       BirthDate: ''
         }
  }



    render(){
        return(
          <div className="FormSize">
            <FormItem>
              <Input prefix={<Icon type="user" style={{ fontSize: 16 }} />} 
                     placeholder="Username" onChange={(e) => this.setState({Username: e.target.value})} />
            </FormItem>
            <FormItem>
              <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 16 }} />} 
                     placeholder="Password" onChange={(e) => this.setState({Password: e.target.value})}/>
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="mail" style={{ fontSize: 16 }} />} 
                     placeholder="Email" onChange={(e) => this.setState({Email: e.target.value})} />
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="smile-o" style={{ fontSize: 16 }} />} 
                     placeholder="Realname" onChange={(e) => this.setState({Name: e.target.value})}/>
            </FormItem>
            <FormItem>
              <DatePicker placeholder="Birth Date"/>
            </FormItem>
            <FormItem>
              <Button type="primary"> <Icon type="key"/> สมัครสมาชิก</Button>
            </FormItem> 
          </div>
          
        )
    }
}
