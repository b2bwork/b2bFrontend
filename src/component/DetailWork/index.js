import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import {Grid,Row,Col,Carousel,Table} from 'react-bootstrap';
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
                  <img width={300} height={300} alt="900x500" src="http://i.imgur.com/mbatYYB.jpg"/>
                 </Carousel.Item>
                </Carousel>
               <h2 className="text-center">{this.props.data.DetailWork.WorkName}หหห</h2>
               <div>
                <h3>ข้อมูลเกี่ยวกับราคา</h3>
                <Table responsive hover border>
                 <thead>
                  <tr>
                    <th>ราคา</th>
                    <th>ระยะเวลา</th>
                    </tr>
                 </thead>
                 <tbody>
                  <tr>
                   <td>{this.props.data.DetailWork.Price} บาท</td>
                   <td>{this.props.data.DetailWork.Workdays} วัน</td>
                  </tr>
                 </tbody>
                </Table>
                <h3>ขอบเขตของงาน</h3>
                <p>{this.props.data.DetailWork.ScopeWork}</p>
                <h3>ประสบการณ์การทำงาน</h3>
                <p>{this.props.data.DetailWork.ExperienceWorker}</p>
               </div>
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