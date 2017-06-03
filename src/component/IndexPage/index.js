import React,{Component} from 'react';
import NavbarComponent from '../Navbar/index';
import CategoryWorksComponent from '../CategoryWorks/index';

export default class IndexPageComponent extends Component{
    constructor(props){
        super(props);
        if(props.match.params.UserId != null){
            localStorage.setItem('UserID',props.match.params.UserId);
        }
    }
    render(){
        return (
            <div>
            <NavbarComponent/>
            <CategoryWorksComponent/>
            </div>
        )
    }
}