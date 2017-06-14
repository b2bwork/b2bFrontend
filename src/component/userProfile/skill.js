import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';

import { Col , Row , Icon , Menu , Collapse } from 'antd';

const Panel = Collapse.Panel;
const userSkillMutataion = gql`
    mutation 
`
class skillUserProfileComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
           Skill: props.Skill
        }
    }

    render(){
        return(
            <div>
                
            </div>
        )

    }
}