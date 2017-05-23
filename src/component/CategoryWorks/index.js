import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import ContentLoader, { Rect } from 'react-content-loader';
import '../../../node_modules/antd/dist/antd.min.css';
import {Row , Col} from 'antd';
const CategoryWorksQuery = gql`
query {
     listCategory{
         Name
         Image
     }
}
`;
class CategoryWorksComponent extends Component{
   
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
                <br/>
                <br/>
                <Row>
               {this.props.data.listCategory.map((data,key) =>{
                  return( 
                     
                      <Col md={6} key={key}>
                       <Link to={{ pathname: '/UnitCategory/'+ data.Name.toString() }}>
                        <img src={data.Image} />
                       </Link>
                      </Col>
                   )
               })}
               </Row>
           </div>
        )
    }
}
const CategoryWorks = graphql(CategoryWorksQuery)(CategoryWorksComponent)
export default CategoryWorks