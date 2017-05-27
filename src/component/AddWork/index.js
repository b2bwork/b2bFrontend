import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import '../../../node_modules/antd/dist/antd.min.css';
import { Button , Input , Upload} from 'antd';

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
                      TagWork : [$TagWork] ){
                          _id
                      }
       }

       query {
            listCategory{
                Name
                Image
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
                                TagWork ,}
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
            <div>
                
            </div>
        );
    }
}

const addwork = graphql(addWorkMutation)(AddWorkComponent)
export default addwork;