import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';


const listWorksQuery = gql` 
      query GetWorks($CategoryName: String){
            listWorks(CategoryName: $CategoryName){
                  _id
                  Workname
                  CoverImage
            }
      }
     `;

export default class listWorksComponent extends Component{
    
}