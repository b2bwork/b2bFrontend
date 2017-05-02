import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import {Grid,Row,Col,Carousel,Table,Button} from 'react-bootstrap';
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
        listReview(WorkId: $WorkId){
            WorkName
            WorkId
            ReviewerName
            ReviewerImage
            Reviewdata
            Star

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
         console.log(this.props.data.DetailWork);
        return(
           <div className="DetailWork">
            <Grid>
             <Row className="show-grid">
               <Col xs={12} md={6} bsClass="btn-detail">
               <div className="detail col-md-6 col-xs-12">
                <Carousel>
                    {this.props.data.DetailWork.Image.map((image,key) =>{
                        return(
                 <Carousel.Item key={key}>
                  <img className="text-center"width={300} height={300} alt="900x500" src={image}/>
                 </Carousel.Item>
                        )
                    })}
                </Carousel>
               <h2 className="text-center">{this.props.data.DetailWork.WorkName}หหห</h2>
               <div>
                <h3>ข้อมูลเกี่ยวกับราคา</h3>
                <Table responsive hover>
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
               <Col xs={12} md={6} bsClass="btn-detail">
                <div className="col-md-6 col-xs-12">
                    <div className="col-md-4 text-right">
                        <i className="fa fa-shopping-cart" aria-hidden="true">
                             {"  "+this.props.data.DetailWork.Queue}
                        </i>
                        </div><br/>
                    <Button bsStyle="primary">คุยกับ freelance</Button>
                    <div className="col-md-6">
                        <h3>รีวิว</h3>
                        <div className="col-md-12" >
                        {this.props.data.listReview.map((data,key) => {
                           return(
                                   <p key={key}>
                                    <img width={50} height={50} src={data.ReviewerImage}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{data.ReviewerName}<br/>
                                    &nbsp;&nbsp;{data.Reviewdata}
                                   </p>
                           )
                        })}
                        </div>
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