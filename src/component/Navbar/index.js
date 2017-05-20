import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import '../../../node_modules/antd/dist/antd.min.css'
import { Menu, Icon , Modal , Form , Input , Checkbox } from 'antd';
import AuthenModalCompomponent from '../AuthenModal/index';
import './index.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavbarComponent extends Component{
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
         <Modal title="" visible={this.state.visible}
         width={350} 
         onOk={this.handleOk.bind(this)} 
         onCancel={this.handleCancel.bind(this)}
         footer= {[]}>
          <AuthenModalCompomponent/>
        </Modal>
        <Menu mode="horizontal" >
        <Menu.Item key="logo">
          <Link to='/'>B2B Product</Link>
        </Menu.Item>
        <Menu.Item key="auth">
          <span onClick={this.showModal.bind(this)}><Icon type="key" />เข้าสู่ระบบ / สมัครสมาชิก</span>
        </Menu.Item>
        <Menu.Item key="addwork">
          <span><Icon type="upload" />เพิ่มงาน</span>
        </Menu.Item>
        <SubMenu title={<span><Icon type="bell" />แจ้งเตือน</span>}>
          <MenuItemGroup title="ข้อความ">
            <Menu.Item key="setting:1">รับเขียนเว็บมั๊ย</Menu.Item>
            <Menu.Item key="setting:2">เขียนโปรแกรมมั๊ย</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>

       </div>
     )
   }
}