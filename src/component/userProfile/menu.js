import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';

import { Button , Input , Col , Row , Icon , Modal , InputNumber,Menu} from 'antd';
import '../../../node_modules/antd/dist/antd.min.css';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class MenuUserProfileComponent extends Component {
    render() {
        return (
                <Menu
                  style={{ width: 240 }}
                  mode="inline"
                  > 
                   <SubMenu key="sub1" title={<span><Icon type="user" /><span>ข้อมูลส่วนตัว</span></span>}>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="home" /><span>ข้อมูลฟรีแลนซ์</span></span>}>
                    <Menu.Item key="1">การศึกษา</Menu.Item>
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
