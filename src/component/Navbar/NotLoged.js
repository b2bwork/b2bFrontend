import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import '../../../node_modules/antd/dist/antd.min.css'
import { Menu, Icon , Modal } from 'antd';
import AuthenModalCompomponent from '../AuthenModal/index';
import './index.css';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default class LogedComponent extends Component{
  constructor(props){
    super(props)
    this.state = { visible: false }
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

   render(){
     
     return (
       <div>
         <Modal title={<h1>เข้าสู่ระบบ</h1>} visible={this.state.visible}
         width={350} 
         onOk={this.handleOk.bind(this)} 
         onCancel={this.handleCancel.bind(this)}
         footer= {[]}>
          <AuthenModalCompomponent/>
        </Modal>
        <Menu mode="horizontal"  theme="dark">
        <MenuItem key="logo" >
          <Link to='/'>B2B Product</Link>
        </MenuItem>
        <MenuItem key="auth" >
          <span onClick={this.showModal.bind(this)}><Icon type="key" />เข้าสู่ระบบ / สมัครสมาชิก</span>
        </MenuItem>
      </Menu>

       </div>
     )
   }
}