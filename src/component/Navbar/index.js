import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../Bulmacss/bulma.css';
import './index.css';

export default class NavbarComponent extends Component{
    render(){
        return (
            <nav className="nav bg">
              <div className="container">
                <div className="nav-left">
                  <a className="nav-item">
                    <Link to='/'>B2B Product</Link>
                  </a>
                </div>
           <label htmlFor="menu-toggle" className="nav-toggle">
             <span></span>
             <span></span>
             <span></span>
           </label>
          <input type="checkbox" id="menu-toggle" className="is-hidden"/>

          <div className="nav-right nav-menu">
            <a className="nav-item">
              เข้าสู่ระบบ / สมัคร
            </a>
            <a className="nav-item">
              เพิ่มงาน
            </a>
            <a className="nav-item">
              แจ้งเตือน<i className="fa fa-bell" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </nav>
        )
    }
}