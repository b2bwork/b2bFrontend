import React,{Component} from 'react';
import {Link , withRouter} from 'react-router-dom';

import '../../../node_modules/antd/dist/antd.min.css'
import { Menu , Icon } from 'antd';
import './index.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;

class LogedComponent extends Component{
  constructor(props){
    super(props)
    this.state = { visible: false}
    if(this.props.match.params.TokenID != null){
      localStorage.setItem('UserId',this.props.match.params.TokenID);
    }
  }

  Logout(){
      localStorage.removeItem('UserID');
      this.props.history.push('/logout');
  }

   render(){
     
     return (
       <div>
        <Menu mode="horizontal"  theme="dark">
        <MenuItem key="logo" >
          <Link to='/'>B2B Product</Link>
        </MenuItem>
        <MenuItem key="addwork" >
          <Link to="/addWork"><span><Icon type="upload" />เพิ่มงาน</span></Link>
        </MenuItem>
        <SubMenu title={<span><Icon type="bell" />แจ้งเตือน</span>}>
          <MenuItemGroup title="ข้อความ" >
            <MenuItem key="setting:1">รับเขียนเว็บมั๊ย</MenuItem>
            <MenuItem key="setting:2">เขียนโปรแกรมมั๊ย</MenuItem>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem key="logout" >
          <span onClick={this.Logout.bind(this)}><Icon type="logout" />ออกจากระบบ</span>
        </MenuItem>
      </Menu>

       </div>
     )
   }
}

export default withRouter(LogedComponent);