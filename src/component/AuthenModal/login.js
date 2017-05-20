import React,{Component} from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom';

import '../../../node_modules/antd/dist/antd.min.css'
import { Form, Icon, Input, Button, Checkbox , Tabs } from 'antd';
import RegisterComponent from './register';
import './index.css';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default class LoginComponent extends Component {
  
  constructor(props){
     super(props)
     this.state = {
       Username: '',
       Password: ''
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
              <Button className="spaceButton" type="primary"> <Icon type="key"/> เข้าสู่ระบบ</Button>
              <Link to="/Register"><Button className="spaceButton"><Icon type="unlock" />สมัครสมาชิก</Button></Link>
            </FormItem>
          </div>
          
        )
    }
}
