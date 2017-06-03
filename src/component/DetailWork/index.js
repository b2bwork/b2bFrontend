import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';


import {Row,Col,Carousel , Button} from 'antd';
import ContentLoader, { Rect } from 'react-content-loader';
import {Table} from 'react-bootstrap';


import AddReviewComponent from '../AddReview/index';
import NavbarComponent from '../Navbar/index';


import '../../../node_modules/antd/dist/antd.min.css';
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
           <div className="DetailWork">
             <Row>
               <Col md={24}>
                <Carousel effect="fade">
                    {this.props.data.DetailWork.Image.map((image,key) =>{
                        return(
                         <img src={image} width="100%" height="100%" alt=""/>
                        )
                    })}
                </Carousel>
                <Col md={16} offset={4}>
                <h2 className="text-center">{this.props.data.DetailWork.WorkName}หหห</h2>
               <br/>
               <div>
                <h3>ข้อมูลเกี่ยวกับราคา</h3>
                <table>
                  <tr>
                    <th>ราคา</th>
                    <th>ระยะเวลา</th>
                    </tr>
                 <tbody>
                  <tr>
                   <td>{this.props.data.DetailWork.Price} บาท</td>
                   <td>{this.props.data.DetailWork.Workdays} วัน</td>
                  </tr>
                 </tbody>
                </table>
                <h3>ขอบเขตของงาน</h3>
                <p>{this.props.data.DetailWork.ScopeWork}</p>
                <h3>ประสบการณ์การทำงาน</h3>
                <p>{this.props.data.DetailWork.ExperienceWorker}</p>
               </div>
                </Col>
               </Col>
               <Col md={10} offset={2}>
                  <Col md={6}>
                    <Col md={24}>
                        <AddReviewComponent/>
                        <h3>รีวิว</h3>
                        {this.props.data.listReview.map((data,key) => {
                           return(
                                   <p key={key}>
                                    <img width={50} height={50} src={data.ReviewerImage} alt=""/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{data.ReviewerName}<br/>
                                    &nbsp;&nbsp;{data.Reviewdata}
                                   </p>
                           )
                        })}                        
                </Col>
                </Col>
               </Col>
             </Row>
          </div>
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