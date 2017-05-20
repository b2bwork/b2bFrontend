import React,{Component} from 'react';

import LoginComponent from './login';
import './index.css';


export default class AuthenModalCompomponent extends Component {

    render(){
        return(
       <div>
         <LoginComponent/>
      </div>
         
        )
    }
}
