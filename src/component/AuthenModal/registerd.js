import React, { Component } from 'react';

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
