import React,{Component} from 'react';

import AuthenModalCompomponent from '../AuthenModal/index';
import LogedComponent from './Loged';
import NotLogedComponent from './NotLoged'

export default class NavbarComponent extends Component{
  constructor(props){
    super(props)
    if(localStorage.getItem('UserID') != null){
      this.Loged = true

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