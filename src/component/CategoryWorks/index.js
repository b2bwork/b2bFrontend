import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import NavbarComponent from '../Navbar/index';
import {Grid,Row,Col,Thumbnail} from 'react-bootstrap';

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
          return (<div></div>)
         }

        if (this.props.data.error) {
          return (<div>เกิดปัญหาในการโหลดข้อมูลโปรดลองใหม่ภายหลัง</div>)
         }
        return(
            <div>
            <Grid>
             <Row>
               {this.props.data.listCategory.map((data,key) =>{
                  return( 
                    <div key={key}>
                    <Link to={{ pathname: '/UnitCategory/'+ data.Name.toString() }}>
                    <Col xs={6} md={4}>
                    <Thumbnail alt="171x180" src={data.Image.toString()} />
                   </Col>
                   </Link>
                   </div>
                   )
               })}
            </Row>
           </Grid>
           </div>
        )
    }
}
const CategoryWorks = graphql(CategoryWorksQuery)(CategoryWorksComponent)
export default CategoryWorks