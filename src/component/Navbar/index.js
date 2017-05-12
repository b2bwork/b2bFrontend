import React,{Component} from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import './index.css';

export default class NavbarComponent extends Component{
    render(){
        return (
            <Navbar collapseOnSelect className="btn-navbar">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">b2b-logo</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">ลงงาน</NavItem>
        <NavDropdown eventKey={2} title="แจ้งเตือน" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1}>test1</MenuItem>
          <MenuItem eventKey={2.2}>test2</MenuItem>
        </NavDropdown>
        <NavItem eventKey={3} href="#">เข้าสู่ระบบ</NavItem>
        <NavItem eventKey={4} href="#">สมัครสมาชิก</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        )
    }
}