import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';

import { Button , Input , Col , Row , Icon , Modal } from 'antd';
import DropzoneComponent from 'react-dropzone-component';
import TagsInput from 'react-tagsinput';

import '../../../node_modules/antd/dist/antd.min.css';
import './index.css';
import '../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../node_modules/react-tagsinput/react-tagsinput.css';

const addWorkMutation = gql`
       mutation addwork($CategoryName: String , 
                        $WorkName: String , 
                        $CoverImage: String , 
                        $WorkerName: String , 
                        $WorkerId: String , 
                        $ScopeWork: String , 
                        $Workdays : Int , 
                        $DetailWork: String , 
                        $ExperienceWorker: String , 
                        $Price: Int , 
                        $TagWork : [String]){

           InsertWork(CategoryName: $CategoryName ,
                      WorkName: $WorkName , 
                      CoverImage: $CoverImage , 
                      WorkerName: $WorkerName , 
                      WorkerId: $WorkerId , 
                      ScopeWork: $ScopeWork , 
                      Workdays : $Workdays , 
                      DetailWork: $DetailWork , 
                      ExperienceWorker: $ExperienceWorker , 
                      Price: $Price , 
                      TagWork : $TagWork ){
                          _id
                      }
       }
`;

class AddWorkComponent extends Component {

    constructor(props){
        super(props)

    this.state = {
        CategoryName: '' ,
        WorkName: '' , 
        CoverImage: '' , 
        WorkerName: '' , 
        WorkerId: '' , 
        ScopeWork: '' , 
        Workdays : '' , 
        DetailWork: '' , 
        ExperienceWorker: '' , 
        Price: '' , 
        TagWork : [] ,
        nullInput: '',
    }

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: '/uploadHandler'
        };

        this.dropzone = null;
}
   handlePost() {
        this.dropzone.processQueue();
    }
    addWork(){
        const {CategoryName ,
               WorkName , 
               CoverImage , 
               WorkerName , 
               WorkerId , 
               ScopeWork , 
               Workdays  , 
               DetailWork , 
               ExperienceWorker , 
               Price , 
               TagWork } = this.state;

        if(CategoryName != null && 
           WorkName != null &&
           CoverImage != null && 
           WorkerName != null && 
           WorkerId != null && 
           ScopeWork != null && 
           Workdays  != null &&
           DetailWork != null && 
           ExperienceWorker != null && 
           Price != null && 
           TagWork.length >= 0){

               this.props.mutate({
                    variables: {CategoryName, 
                                WorkName, 
                                CoverImage, 
                                WorkerName, 
                                WorkerId ,
                                ScopeWork ,
                                Workdays ,
                                DetailWork ,
                                ExperienceWorker ,
                                Price ,
                                TagWork }
                }
                ).then((data) =>{
                    this.setState({nullInput: 'เพิ่มงานเรียบร้อย'});
                   
               })

               } else {
                   this.setState({nullInput: 'กรอกข้อมูลไม่ครบ'});
               }
        
    }
    handleFileAdded(file) {
        console.log(file);
    }

    changeTaging(tags) {
    this.setState({TagWork: tags})
  }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const componentConfig = {
                        iconFiletypes: ['.jpg', '.png', '.gif'],
                        showFiletypeIcon: true,
                        postUrl: 'http://localhost:3001/upload/addwork'
                    };
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            addedfile: this.handleFileAdded.bind(this),
            sendingmultiple: null,
            successmultiple: null,
            completemultiple: null,
        }

       const djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            autoProcessQueue: false,
            params: {
                CategoryName: this.state.CategoryName ,
                WorkName: this.state.WorkName , 
                CoverImage: this.state.CoverImage , 
                WorkerName: this.state.WorkerName , 
                WorkerId: this.state.WorkerId , 
                ScopeWork: this.state.ScopeWork , 
                Workdays : this.state.Workdays , 
                DetailWork: this.state.DetailWork , 
                ExperienceWorker: this.state.ExperienceWorker , 
                Price: this.state.Price , 
                TagWork : this.state.TagWork ,
                    }
        };

        return (
            <Col md={10} offset={3}>
             <div>
                 <i className="fa fa-money fa-3x" aria-hidden="true"></i>
               <Input prefix={<Icon type="flag" style={{ fontSize: 16 }} />} 
                      placeholder="ขอบเขตงาน" type="textarea" onChange={(e) => this.setState({ScopeWork: e.target.value})} />
               <br/>    
             </div>
             <div>
             <Input prefix={<Icon type="paper-clip" style={{ fontSize: 16 }} />} 
                    placeholder="รายละเอียดงาน" type="textarea" onChange={(e) => this.setState({DetailWork: e.target.value})} />
             </div>
             <div>
             <Input prefix={<Icon type="paper-clip" style={{ fontSize: 16 }} />} 
                    placeholder="จำนวนวัน" onChange={(e) => this.setState({Workdays: e.target.value})} />
             </div>
             <div>
             <Input prefix={<Icon type="paper-clip" style={{ fontSize: 16 }} />} 
                    placeholder="ราคา" onChange={(e) => this.setState({Price: e.target.value})} />
             </div>
             <div className="clearfix">
              <DropzoneComponent config={componentConfig} eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
            </div>
            <TagsInput value={this.state.TagWork} onChange={this.changeTaging.bind(this)} />
            <Button type="primary" onClick={this.handlePost.bind(this)}>เพิ่มงาน</Button>
            </Col>
        )
    }
}

const addwork = graphql(addWorkMutation)(withRouter(AddWorkComponent));
export default addwork;