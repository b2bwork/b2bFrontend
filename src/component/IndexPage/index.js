import React,{Component} from 'react';
import NavbarComponent from '../Navbar/index';
import CategoryWorksComponent from '../CategoryWorks/index';

export default class IndexPageComponent extends Component{


    render(){
        return (
            <div>
            <NavbarComponent/>
            <CategoryWorksComponent/>
            </div>
        )
    }
}