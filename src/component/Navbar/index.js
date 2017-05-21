import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import '../../../node_modules/antd/dist/antd.min.css'
import { Menu, Icon , Modal , Form , Input , Checkbox } from 'antd';
import AuthenModalCompomponent from '../AuthenModal/index';
import LogedComponent from './Loged';
import NotLogedComponent from './NotLoged'
import './index.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;

export default class NavbarComponent extends Component{
  constructor(props){
    super(props)
    this.state = { visible: false , Loged: false }
    if(localStorage.getItem('UserID') != null){
      this.setState({Loged: true});
      this.Loged = true;
    }
  }
   render(){
     if(this.Loged == true){
       return(
          <LogedComponent/>
       )
     }
     
     return(
       <NotLogedComponent/>
     )
   }
}