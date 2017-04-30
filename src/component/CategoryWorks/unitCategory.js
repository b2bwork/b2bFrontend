import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Grid,Row,Col,Thumbnail} from 'react-bootstrap';

const UnitCategoryWorksQuery = gql`
    query {
        listUnitCategory(CategoryName: "sa"){
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
          return (<div></div>)
         }

        if (this.props.data.error) {
          return (<div>เกิดปัญหาในการโหลดข้อมูลโปรดลองใหม่ภายหลัง</div>)
         }
        return(
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
        )
    }
}
const UnitCategoryWorks = graphql(UnitCategoryWorksQuery)(UnitCategoryWorksComponent)
export default UnitCategoryWorks