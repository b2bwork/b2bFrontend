import React,{Component} from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link , withRouter } from 'react-router-dom';

import '../../../node_modules/antd/dist/antd.min.css'
import { Form, Icon, Input, Button, Checkbox  } from 'antd';
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
       Password: '',
       WrongAuthen: ''
         }
  }

  login(){
    const {Username , Password} = this.state;
    this.props.mutate({
      variables: {Username, Password}})
    .then((login) => {
            localStorage.setItem('UserID',login.data.login._id);
           this.props.history.push('/loged');
    }).catch((error) => {
        this.setState({WrongAuthen: 'ไม่มีชื่อผู้ใช้งานนี้'});
      });
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
              <a href="http://localhost:3001/auth/google" className="spaceButton">
                <Button size="large" className="googleButton"> 
                  <i className="fa fa-google-plus-official fa-2x" aria-hidden="true">
                  </i> Google
                </Button>
              </a>
              <a href="http://localhost:3001/auth/facebook" className="spaceButton">
                <Button size="large" className="googleButton"> 
                  <i className="fa fa-facebook-official fa-2x" aria-hidden="true">
                  </i> Facebook
                </Button>
              </a>
              <h2 className="WrongInput">{this.state.WrongAuthen}</h2>
            </FormItem>
          </div>
          
        )
    }
}

const Login = graphql(loginMutation)(withRouter(LoginComponent));
export default Login;