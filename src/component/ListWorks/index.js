import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import {Grid,Row,Col,Thumbnail} from 'react-bootstrap';

const listWorksQuery = gql` 
      query GetWorks($CategoryName: String){
            listWorks(CategoryName: $CategoryName){
                  _id
                  WorkName
                  CoverImage
            }
      }
     `;

class listWorksComponent extends Component{
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
               {this.props.data.listWorks.map((data,key) =>{
                  return( 
                    <div key={key}>
                      <Link to={{ pathname: '/Works/'+ data.WorkName }}>
                       <Col xs={4} md={2}>
                        <Thumbnail alt="171x180" src={data.CoverImage} >
                        <h3>{data.WorkName}</h3>
                        </Thumbnail>
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

const ListWorks = graphql(listWorksQuery,{
  options: (CategoryName) => ({
      variables: {
        CategoryName: CategoryName.match.params.CategoryName
      }
    })
  })(listWorksComponent)
export default ListWorks