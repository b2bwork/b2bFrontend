import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import '../../../node_modules/antd/dist/antd.min.css'
import { Menu, Icon , Modal , Form , Input , Checkbox } from 'antd';
import AuthenModalCompomponent from '../AuthenModal/index';
import './index.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;

export default class LogedComponent extends Component{
  constructor(props){
    super(props)
    this.state = { visible: false}
  }

   render(){
     
     return (
       <div>
        <Menu mode="horizontal"  theme="dark">
        <MenuItem key="logo" >
          <Link to='/'>B2B Product</Link>
        </MenuItem>
        <MenuItem key="addwork" >
          <span><Icon type="upload" />เพิ่มงาน</span>
        </MenuItem>
        <SubMenu title={<span><Icon type="bell" />แจ้งเตือน</span>}>
          <MenuItemGroup title="ข้อความ" >
            <MenuItem key="setting:1">รับเขียนเว็บมั๊ย</MenuItem>
            <MenuItem key="setting:2">เขียนโปรแกรมมั๊ย</MenuItem>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem key="logout" >
          <span><Icon type="logout" />ออกจากระบบ</span>
        </MenuItem>
      </Menu>

       </div>
     )
   }
}