import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import { Col , Row , Icon , Menu} from 'antd';

import NavbarComponent from '../Navbar/index';
import MenuUserProfileComponent from './menu';
import BasicUserProfileComponent from './basicUserProfile'
import BankUserProfileComponent from './bank';
import IdCardUserProfileComponent from './IdCard';


import '../../../node_modules/antd/dist/antd.min.css';

const ProfileQuery = gql`
    query listUserProfile($_id: String!){
        listUserProfile(_id: $_id){
            Email
            Name
            FirstName
            LastName 
            ProfileImage 
            BirthDate 
            Telephone
            Skill
            Age
            ImageIdCard
            ImageBank
            Money
            Bank
            BranchBank
            BankNumber
            RealName
            Address
            IdCardNumber
        }

    }
`
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class userProfileComponent extends Component {

    constructor(props){
       super(props);
       console.log(props);
    }

    render() {

        if(this.props.match.params.Type == "basic"){
            if (this.props.data.loading) {
                   return (<div> </div>)
                  }
            if (this.props.data.error) {
                   return (<div>เกิดปัญหาในการโหลดข้อมูลโปรดลองใหม่ภายหลัง</div>)
                  }

         return (
            <div>
              <NavbarComponent/>
              <Row>
               <Col md={2} xs={12}>
                <MenuUserProfileComponent/>               
               </Col>
               <Col md={18} offset={3} xs={12}>
                <br/><br/><br/>
                <BasicUserProfileComponent 
                  FirstName={this.props.data.listUserProfile.FirstName} 
                  LastName={this.props.data.listUserProfile.LastName} 
                  ProfileImage={this.props.data.listUserProfile.ProfileImage} 
                  BirthDate={this.props.data.listUserProfile.BirthDate} 
                  Telephone={this.props.data.listUserProfile.Telephone} 
                  Email={this.props.data.listUserProfile.Email} />               
               </Col>
              </Row>
            </div>
           );
        }

        if(this.props.match.params.Type == "bank"){
            if (this.props.data.loading) {
          return (
          <div>

          </div>
          )
         }
         if (this.props.data.error) {
          return (<div>เกิดปัญหาในการโหลดข้อมูลโปรดลองใหม่ภายหลัง</div>)
         }
        return (
            <div>
              <NavbarComponent/>
              <Row>
               <Col md={2} xs={12}>
                <MenuUserProfileComponent/>               
               </Col>
               <Col md={18} offset={3} xs={12}>
                <br/><br/><br/>
                <BankUserProfileComponent 
                  bank={this.props.data.listUserProfile.Bank} 
                  branchBank={this.props.data.listUserProfile.BranchBank} 
                  bankNumber={this.props.data.listUserProfile.BankNumber} 
                  imageBank={this.props.data.listUserProfile.ImageBank}  />               
               </Col>
              </Row>
            </div>
            )
        }
        if(this.props.match.params.Type == "idcard"){
          if (this.props.data.loading) {
          return (
          <div>

          </div>
          )
         }
         if (this.props.data.error) {
          return (<div>เกิดปัญหาในการโหลดข้อมูลโปรดลองใหม่ภายหลัง</div>)
         }
        return (
            <div>
              <NavbarComponent/>
              
              <Row>
               <Col md={2} xs={12}>
                <MenuUserProfileComponent/>               
               </Col>
               <Col md={18} offset={3} xs={12}>
                <br/><br/><br/>
                <IdCardUserProfileComponent 
                  RealName={this.props.data.listUserProfile.RealName} 
                  Address={this.props.data.listUserProfile.Address} 
                  IdCardNumber={this.props.data.listUserProfile.IdCardNumber}  />               
               </Col>
              </Row>
            </div>
        )
        }
    }
}
const userProfileGraphql = graphql(ProfileQuery,{
  options: () => ({
      variables: {
        _id: localStorage.getItem('UserID')
      }
    })
  })(userProfileComponent)

export default userProfileGraphql
