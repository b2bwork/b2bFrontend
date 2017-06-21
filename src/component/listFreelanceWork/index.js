import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';

import { Button , Input , Col , Row , Icon , Modal , InputNumber} from 'antd';
import ContentLoader, { Rect } from 'react-content-loader';
import NavbarComponent from '../Navbar/index';

import '../../../node_modules/antd/dist/antd.min.css';

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
        if (this.props.data.loading) {
          return (
              <div>
                  <NavbarComponent/>
                  <ContentLoader height={140} speed={1} primaryColor={'#f3f3f3'} secondaryColor={'#ecebeb'}>
                    <Rect x={50} y={80} height={10} radius={5} width={300} />
                  </ContentLoader>
              </div>
          )
         }

        if (this.props.data.error) {
          return (<div>เกิดปัญหาในการโหลดข้อมูลโปรดลองใหม่ภายหลัง</div>)
         }

    return (
        <div>
            <NavbarComponent/>
            {this.props.data.listFreelanceWorks.map((data,key)=>{
               return( 
                    <div key={key}>
                      <Link to={{ pathname: '/editWork/'+ data._id }}>
                       <Col md={4} offset={1}>
                        <img src={data.CoverImage} width="100%" alt=""/>
                        <h3>{data.WorkName}</h3>
                        <p><span><Icon type="shopping"/>{"  "+data.Queue}</span></p>
                        <p><span><Icon type="shopping"/>{"  "+data.Verify}</span></p>
                       </Col>
                      </Link>
                   </div>
                   )
            })
            }
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