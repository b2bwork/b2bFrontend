import React,{Component} from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link , withRouter } from 'react-router-dom';

import '../../../node_modules/antd/dist/antd.min.css'
import { Form, Icon, Input, Button, Checkbox  } from 'antd';
import RegisterComponent from './register';
import './index.css';

const FormItem = Form.Item;

const loginMutation = gql`
      mutation LoginUser($Username: String! , $Password: String!){
        login( Username: $Username ,Password: $Password ){
                  _id
        }
      } 
     `;

class LoginComponent extends Component {
  
  constructor(props){
     super(props)
     this.state = {
       Username: '',
       Password: ''
         }
  }

  login(){
    const {Username , Password} = this.state;
    this.props.mutate({
      variables: {Username, Password}})
    .then((login) => {
        localStorage.setItem('UserID',login.data.login._id);
        console.log(localStorage.getItem('UserID'))
        this.props.history.push('/loged');
    })
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
              <Button className="spaceButton" type="primary" onClick={this.login.bind(this)}> 
                <Icon type="key"/> เข้าสู่ระบบ</Button>
              <Link to="/Register"><Button className="spaceButton"><Icon type="unlock" />สมัครสมาชิก</Button></Link>
            </FormItem>
          </div>
          
        )
    }
}

const Login = graphql(loginMutation)(withRouter(LoginComponent));
export default Login;