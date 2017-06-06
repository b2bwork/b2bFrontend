import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';

import { Button , Input , Col , Row , Icon , Modal , InputNumber,Menu} from 'antd';
import NavbarComponent from '../Navbar/index';
import MenuUserProfileComponent from './menu';

import '../../../node_modules/antd/dist/antd.min.css';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class userProfileComponent extends Component {
    render() {
        return (
            <div>
              <NavbarComponent/>
              <MenuUserProfileComponent/>
            </div>
        );
    }
}
