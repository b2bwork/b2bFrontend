import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';

import { Button , Input , Col , Row , Icon , Modal , InputNumber} from 'antd';
import DropzoneComponent from 'react-dropzone-component';
import TagsInput from 'react-tagsinput';
import NavbarComponent from '../Navbar/index';

import '../../../node_modules/antd/dist/antd.min.css';
import './index.css';
import '../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../node_modules/react-tagsinput/react-tagsinput.css';

const addWorkMutation = gql`
       mutation addwork($CategoryName: String , 
                        $WorkName: String ,   
                        $WorkerId: String , 
                        $ScopeWork: String , 
                        $Workdays : Int , 
                        $DetailWork: String , 
                        $ExperienceWorker: String , 
                        $Price: Int , 
                        $TagWork : [String]){
           InsertWork(CategoryName: $CategoryName , 
                      WorkName: $WorkName , 
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
        WorkName: '',
        WorkerId: localStorage.getItem('UserID')  , 
        ScopeWork: '' , 
        Workdays : '' , 
        DetailWork: '' , 
        ExperienceWorker: '' , 
        Price: '' , 
        TagWork : [] ,
        WorkId: '',
        nullInput: '',
    }
    this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            uploadMultiple: true,
            autoProcessQueue: false,
            parallelUploads: 8,
            maxFiles: 8,
            params: {
                _id: this.state.WorkId
            }
            
        };

        this.dropzone = null;
}
    addWork(){
        const {CategoryName ,
               WorkName ,  
               WorkerId , 
               ScopeWork , 
               Workdays  , 
               DetailWork , 
               ExperienceWorker , 
               Price , 
               TagWork } = this.state;

        if(CategoryName.length > 0 && 
           WorkName.length > 0 &&
           WorkerId.length > 0 && 
           ScopeWork.length > 0 && 
           Workdays.toString().length > 0 &&
           DetailWork.length > 0 && 
           ExperienceWorker.length > 0 && 
           Price.toString().length > 0 && 
           TagWork.length >= 0){
               this.props.mutate({
                    variables: {CategoryName, 
                                WorkName, 
                                WorkerId,
                                ScopeWork ,
                                Workdays ,
                                DetailWork ,
                                ExperienceWorker ,
                                Price ,
                                TagWork }
                }
                ).then((data) =>{
                    this.setState({WorkId:data.data.InsertWork._id });
                    this.dropzone.processQueue();
                   
               })

               } else {
                   this.setState({nullInput: 'กรอกข้อมูลไม่ครบ'});
               }
        
    }

    changeTaging(tags) {
    this.setState({TagWork: tags})
  }

    render() {
        const componentConfig = {
                        iconFiletypes: ['.jpg', '.png', '.gif'],
                        showFiletypeIcon: true,
                        postUrl: 'http://128.199.68.65:3001/upload/addwork'
                    };
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            addedfile: null,
            sendingmultiple: null,
            processingmultiple: null,
            completemultiple: ()=> console.log('complete'),
        }


        return (
            <div>
                <NavbarComponent/>
                <br/><br/>
                <Col md={10} offset={3}>
                <div>
                    {this.state.WorkId}
               <Input placeholder="หมวดหมู่งาน" type="text" onChange={(e) => this.setState({CategoryName: e.target.value})} />
               <br/>    
             </div>
             <div>
               <Input placeholder="ชื่องาน" type="text" onChange={(e) => this.setState({WorkName: e.target.value})} />
               <br/>    
             </div>
             <div>
               <Input placeholder="ขอบเขตงาน" type="textarea" onChange={(e) => this.setState({ScopeWork: e.target.value})} />
               <br/>    
             </div>
             <div>
             <Input placeholder="รายละเอียดงาน" type="textarea" onChange={(e) => this.setState({DetailWork: e.target.value})} />
             </div>
             <div>
             <Input placeholder="ประสบการณ์การทำงาน" type="textarea" onChange={(e) => this.setState({ExperienceWorker: e.target.value})} />
             </div>
             <div>
             จำนวนวัน <InputNumber min={1}  defaultValue={1} placeholder="จำนวนวัน" onChange={(e) => {this.setState({Workdays: e})}} />
             ราคา <InputNumber min={1500}  defaultValue={1500} placeholder="ราคา" onChange={(e) => {this.setState({Price: e})}} />

             </div>
             <div className="clearfix">
              <DropzoneComponent config={componentConfig} eventHandlers={eventHandlers}
                       djsConfig={this.djsConfig} multiple/>
            </div>
            <TagsInput value={this.state.TagWork} onChange={this.changeTaging.bind(this)} />
            <Button type="primary" onClick={this.addWork.bind(this)}>เพิ่มงาน</Button>
            </Col>
            </div>
        )
    }
}

const addwork = graphql(addWorkMutation)(withRouter(AddWorkComponent));
export default addwork;