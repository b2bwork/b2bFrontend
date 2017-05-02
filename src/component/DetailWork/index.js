import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import './index.css';

const DetailWorkQuery = gql`
      query GetDetailWork($WorkId: String){
          DetailWork(_id: $WorkId){
              CategoryName
              WorkName
              CoverImage
              WorkerName
              WorkerId
              ScopeWork
              Workdays 
              DetailWork
              ExperienceWorker
              Price
              Queue 
              Image
              TagWork
              
          }
      }
`;
class DetailWorkComponent extends Component {
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
           <div className="DetailWork">
            <Grid>
             <Row className="show-grid">
               <Col xs={12} md={6} bsClass="btn-detail">
               <div className="detail col-md-6 col-xs-12">
                <Carousel>
                 <Carousel.Item>
                  <img width={900} height={300}src="/assets/carousel.png" className="carouselImage"/>
                 </Carousel.Item>
                </Carousel>
               <h3 className="text-center">{this.props.data.DetailWork.WorkName}หหห</h3>
               </div>
               </Col>
             </Row>
            </Grid>
          </div>
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