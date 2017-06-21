import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import { Button , Input , Col , Row , Icon , Modal , InputNumber} from 'antd';
import NavbarComponent from '../Navbar/index';

const listFreelanceWorkQuery = gql`
      {
          listWorks($WorkerId: String!){
              listFreelanceWorks(WorkerId: $WorkerId){
                  _id
                  WorkName
                  CoverImage
                  Price
                  Queue
                  Verify
              }
          }
      }
`
class listFreelanceWorkComponent extends Component {
    render() {
        return (
            <div>
                <NavbarComponent/>
            </div>
        );
    }
}

const listFreelanceWork = graphql(listFreelanceWorkQuery,{
  options: (CategoryName) => ({
      variables: {
        WorkerId: localStorage.getItem('UserID')
      }
    })
  })();
export default listFreelanceWork;