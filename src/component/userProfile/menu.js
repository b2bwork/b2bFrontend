import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { Menu , Icon } from 'antd';
import '../../../node_modules/antd/dist/antd.min.css';
import './index.css';


const SubMenu = Menu.SubMenu;

export default class MenuUserProfileComponent extends Component {
    render() {
        return (
                <Menu
                  style={{ width: 240 }}
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  > 
                   <SubMenu key="sub1" title={<span><Icon type="user" /><span>ข้อมูลเบื้องต้น</span></span>}>
                   <Menu.Item key="1">ข้อมูลส่วนตัว</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="home" /><span>ข้อมูลฟรีแลนซ์</span></span>}>
                    <Menu.Item key="2">ความสามารถ</Menu.Item>
                    <Menu.Item key="3">บัตรประชาชน</Menu.Item>
                    <Menu.Item key="4">บัญชีธนาคาร</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="team" /><span>บริษัท</span></span>}>
                  </SubMenu>
                </Menu>
        );
    }
}
