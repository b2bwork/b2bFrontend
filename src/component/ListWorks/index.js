import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import ContentLoader, { Rect } from 'react-content-loader';

import NavbarComponent from '../Navbar/index';
import { Row , Col , Icon} from 'antd';
import '../../../node_modules/antd/dist/antd.min.css';


const listWorksQuery = gql` 
      query GetWorks($CategoryName: String){
            listWorks(CategoryName: $CategoryName){
                  _id
                  WorkName
                  CoverImage
                  Queue
            }
      }
     `;

class listWorksComponent extends Component{
   
    render(){
      
        if (this.props.data.loading) {
          return (
          <ContentLoader height={140} speed={1} primaryColor={'#f3f3f3'} secondaryColor={'#ecebeb'}>
           <Rect x={50} y={80} height={10} radius={5} width={300} />
          </ContentLoader>
          )
         }

        if (this.props.data.error) {
          return (<div>เกิดปัญหาในการโหลดข้อมูลโปรดลองใหม่ภายหลัง</div>)
         }
        return(
             <div>
              <NavbarComponent/>
             <br/>
             <br/>
             <Row>
               {this.props.data.listWorks.map((data,key) =>{
                  return( 
                    <div key={key}>
                      <Link to={{ pathname: '/DetailWork/'+ data._id }}>
                       <Col md={4} offset={1}>
                        <img src={data.CoverImage} width="100%" alt=""/>
                        <h3>{data.WorkName}</h3>
                        <p><span><Icon type="shopping"/>{"  "+data.Queue}</span></p>
                       </Col>
                      </Link>
                   </div>
                   )
               })}
            </Row>
            </div>
        )
    }
}

const ListWorks = graphql(listWorksQuery,{
  options: (CategoryName) => ({
      variables: {
        CategoryName: CategoryName.match.params.CategoryName
      }
    })
  })(listWorksComponent)
export default ListWorks