import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import ContentLoader, { Rect } from 'react-content-loader';
import NavbarComponent from '../Navbar/index';
import '../../../node_modules/antd/dist/antd.css';
import { Row , Col } from 'antd'

const UnitCategoryWorksQuery = gql`
    query list($Name: String!){
              listUnitCategory(CategoryName: $Name){
                   Name
                   Image
                 }
          }
`;
class UnitCategoryWorksComponent extends Component{
    constructor(props){
        super(props);
    }
    
   
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
               {this.props.data.listUnitCategory.map((data,key) =>{
                  return( 
                      <Link to={{ pathname: '/listWorks/'+ data.Name.toString() }}>
                        <Col md={6}>
                         <img src={data.Image} />
                        </Col>
                      </Link>
                   )
               })}
               </Row>
           </div>
        )
    }
}
const UnitCategoryWorks = graphql(UnitCategoryWorksQuery,{
  options: (CategoryName) => ({
      variables: {
        Name: CategoryName.match.params.CategoryName
      }
    })
  })(UnitCategoryWorksComponent)
export default UnitCategoryWorks