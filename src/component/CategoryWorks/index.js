import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import '../../Bulmacss/bulma.css';
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
                <br/>
                <br/>
            <div className="columns margin">
               {this.props.data.listCategory.map((data,key) =>{
                  return( 
                     
                      <div className="column is-2" key={key}>
                       <Link to={{ pathname: '/UnitCategory/'+ data.Name.toString() }}>
                        <img src="https://i.ytimg.com/vi/PhYXIuG0jZY/maxresdefault.jpg" />
                       </Link>
                      </div>
                   )
               })}
           </div>
           </div>
        )
    }
}
const CategoryWorks = graphql(CategoryWorksQuery)(CategoryWorksComponent)
export default CategoryWorks