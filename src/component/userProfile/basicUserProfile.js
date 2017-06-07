import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';

import { Form , Col , Row , Input , Button , Collapse , DatePicker} from 'antd';

import '../../../node_modules/antd/dist/antd.min.css';
import './index.css';

const FormItem = Form.Item;

const EducationMutation = gql`
     mutation AddEducation($_id: String! , $FirstName: String , $LastName: String , $BirthDate: String ,$Email: String $Telephone: String  ){
         AddBasicUserData(_id: $_id ,FirstName: $FirstName , LastName: $LastName , BirthDate: $BirthDate , Email: $Email,Telephone: $Telephone ){
             _id
         }
     }
`

class BasicUserProfileComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            FirstName: props.FirstName,
            LastName: props.LastName,
            ProfileImage: props.ProfileImage,
            Email: props.Email,
            Telephone: props.Telephone,
            BirthDate: props.BirthDate,
            added: ''

        }
    }
    editProfile(){
        const {FirstName , 
               LastName , 
               ProfileImage , 
               Email , 
               Telephone , 
               BirthDate} = this.state;
        this.props.mutate({
            variables:{_id: localStorage.getItem('UserID') ,FirstName , LastName , ProfileImage , Email , Telephone , BirthDate }
        }).then((e)=>{
            if(e.data.AddBasicUserData._id == "added"){
                this.setState({added: 'แก้ไข้ข้อมูลเรียบร้อย'});
            }else{
                this.setState({added: 'เกิดปัญหา'});
            }
        })
    }
    render() {
        return (
            <div className="border">
             <Row>
              <Col md={20} offset={2}>
              <br/><br/>
              <Collapse>
               <Collapse.Panel header={"ชื่อ-นามสกุล"+ "  "+ this.state.FirstName+ "  " + this.state.LastName} key="1">
                 <FormItem>
                   <p>ชื่อ <input type="text" value={this.state.FirstName} onChange={(e)=> this.setState({FirstName: e.target.value})} /></p>
                   <p>นามสกุล <input type="text" value={this.state.LastName} onChange={(e)=> this.setState({LastName: e.target.value})}/></p>
                   <p>อีเมล <input type="text" value={this.state.Email} onChange={(e)=> this.setState({Email: e.target.value})} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/></p>
                   <Button type="primary" onClick={this.editProfile.bind(this)} >แก้ไข</Button>
                 </FormItem>
               </Collapse.Panel>
               <Collapse.Panel header={"เบอร์โทรศัพท์"+ "  " + this.state.Telephone} key="2">
                  <FormItem >
                   <p>เบอร์โทรศัพท์ <input type="text" value={this.state.Telephone} onChange={(e)=> this.setState({Telephone: e.target.value})} pattern="[0][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"/> </p>
                   <Button type="primary" onClick={this.editProfile.bind(this)} >แก้ไข</Button>
                 </FormItem>
               </Collapse.Panel>
               <Collapse.Panel header={"วันเกิด" + "  "+this.state.BirthDate} key="3">
                 <FormItem >
                   <p>วันเกิด <DatePicker placeholder=" วันเกิด   " onChange={(data,dateString) => this.setState({BirthDate: dateString})}/></p>
                   <Button type="primary" onClick={this.editProfile.bind(this)} >แก้ไข</Button> 
                 </FormItem>
               </Collapse.Panel>
              </Collapse>
              {this.state.added}
              <br/><br/>
              </Col>
             </Row>
            </div>
        );
    }
}

const editProfile = graphql(EducationMutation)(withRouter(BasicUserProfileComponent))
export default editProfile

