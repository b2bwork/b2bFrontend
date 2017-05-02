import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import {Grid,Row,Col} from 'react-bootstrap';

const DetailWorkQuery = gql`
      query GetDetailWork($WorkId: String){
          DetailWork(_id: $WorkId){
              CategoryName
              WorkName
              CoverImage
              WorkerName
              
          }
      }
`;
class DetailWorkComponent extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Grid>
             <Row>
               <Col xs={12} md={6}>
               <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
               </Col>
             </Row>
            </Grid>
        )
    }
}
const DetailWork = graphql(DetailWorkQuery,{
  options: (WorkId) => ({
      variables: {
        WorkId: WorkId.match.params.WorkId
      }
    })
  })(DetailWorkComponent)
export default DetailWork