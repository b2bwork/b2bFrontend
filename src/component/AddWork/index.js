import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';

import '../../../node_modules/antd/dist/antd.min.css';
import { Button , Input , Upload , Col , Row , Icon } from 'antd';

const addWorkMutation = gql`
       mutation addwork($CategoryName: String , 
                        $WorkName: String , 
                        $CoverImage: String , 
                        $WorkerName: String , 
                        $WorkerId: String , 
                        $ScopeWork: String , 
                        $Workdays : Int , 
                        $DetailWork: String , 
                        $ExperienceWorker: String , 
                        $Price: Int , 
                        $TagWork : [String]){

           InsertWork(CategoryName: $CategoryName ,
                      WorkName: $WorkName , 
                      CoverImage: $CoverImage , 
                      WorkerName: $WorkerName , 
                      WorkerId: $WorkerId , 
                      ScopeWork: $ScopeWork , 
                      Workdays : $Workdays , 
                      DetailWork: $DetailWork , 
                      ExperienceWorker: $ExperienceWorker , 
                      Price: $Price , 
                      TagWork : $TagWork ){
                          _id
                      }
       }
`;

class AddWorkComponent extends Component {

    constructor(props){
        super(props)


    this.state = {
        CategoryName: '' ,
        WorkName: '' , 
        CoverImage: '' , 
        WorkerName: '' , 
        WorkerId: '' , 
        ScopeWork: '' , 
        Workdays : '' , 
        DetailWork: '' , 
        ExperienceWorker: '' , 
        Price: '' , 
        TagWork : [] ,
        nullInput: ''
        
    }
    }
    
    addWork(){
        const {CategoryName ,
               WorkName , 
               CoverImage , 
               WorkerName , 
               WorkerId , 
               ScopeWork , 
               Workdays  , 
               DetailWork , 
               ExperienceWorker , 
               Price , 
               TagWork } = this.state;

        if(CategoryName != null && 
           WorkName != null &&
           CoverImage != null && 
           WorkerName != null && 
           WorkerId != null && 
           ScopeWork != null && 
           Workdays  != null &&
           DetailWork != null && 
           ExperienceWorker != null && 
           Price != null && 
           TagWork.length >= 0){

               this.props.mutate({
                    variables: {CategoryName, 
                                WorkName, 
                                CoverImage, 
                                WorkerName, 
                                WorkerId ,
                                ScopeWork ,
                                Workdays ,
                                DetailWork ,
                                ExperienceWorker ,
                                Price ,
                                TagWork }
                }
                ).then((data) =>{
                    this.setState({nullInput: 'เพิ่มงานเรียบร้อย'});
                   
               })

               } else {
                   this.setState({nullInput: 'กรอกข้อมูลไม่ครบ'});
               }
        
    }

    render() {
        return (
            <Col md={10} offset={3}>
             <div>
                 <i className="fa fa-money fa-3x" aria-hidden="true"></i>
               <Input prefix={<Icon type="flag" style={{ fontSize: 16 }} />} 
                      placeholder="ขอบเขตงาน" type="textarea" onChange={(e) => this.setState({ScopeWork: e.target.value})} />
               <br/>    
             </div>
             <Input prefix={<Icon type="paper-clip" style={{ fontSize: 16 }} />} 
                    placeholder="รายละเอียดงาน" type="textarea" onChange={(e) => this.setState({DetailWork: e.target.value})} />
            </Col>
        );
    }
}

const addwork = graphql(addWorkMutation)(withRouter(AddWorkComponent));
export default addwork;