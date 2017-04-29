import React,{Component} from 'react';
import NavbarComponent from '../Navbar/index';

export default class IndexPage extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <NavbarComponent/>
        )
    }
}