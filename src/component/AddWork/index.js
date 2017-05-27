import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import '../../../node_modules/antd/dist/antd.min.css';
import {} from 'antd';

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

           InsertWork(CategoryName: String! , 
                      WorkName: String! , 
                      CoverImage: String! , 
                      WorkerName: String! , 
                      WorkerId: String! , 
                      ScopeWork: String! , 
                      Workdays : Int! , 
                      DetailWork: String! , 
                      ExperienceWorker: String! , 
                      Price: Int! , 
                      TagWork : [String]! ){
                          _id
                      }
       }
`;

class AddWorkComponent extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const addwork = graphql(addWorkMutation)(AddWorkComponent)
export default addwork;