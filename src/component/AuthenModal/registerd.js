import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import '../../../node_modules/antd/dist/antd.min.css';
import {Row , Col} from 'antd';
import NavbarComponent from '../Navbar/index';

export default class registeredComponent extends Component {
    render() {
        return (
            <div>
             <NavbarComponent/>
                <h2>สมัครสมาชิกสำเร็จ คุณสามารถเข้าสู่ระบบได้ในทันที   </h2> 
            </div>
        );
    }
}
