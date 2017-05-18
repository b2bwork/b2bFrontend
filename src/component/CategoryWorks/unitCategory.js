import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import ContentLoader, { Rect } from 'react-content-loader';
import NavbarComponent from '../Navbar/index';
import '../../Bulmacss/bulma.css';

const UnitCategoryWorksQuery = gql`
    query list($Name: String!){
              listUnitCategory(CategoryName: $Name){
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
          return (
          <ContentLoader height={140} speed={1} primaryColor={'#f3f3f3'} secondaryColor={'#ecebeb'}>
           <Rect x={50} y={80} height={10} radius={5} width={300} />
          </ContentLoader>)
         }

        if (this.props.data.error) {
          return (<div>เกิดปัญหาในการโหลดข้อมูลโปรดลองใหม่ภายหลัง</div>)
         }
        return(
           <div>
             <NavbarComponent/>
                <br/>
                <br/>
            <div className="columns margin">
               {this.props.data.listUnitCategory.map((data,key) =>{
                  return( 
                    <div key={key}>
                      <Link to={{ pathname: '/listWorks/'+ data.Name.toString() }}>
                       <div className="column is-2">
                        <img alt="171x180" src="https://i.ytimg.com/vi/PhYXIuG0jZY/maxresdefault.jpg" />
                       </div>
                      </Link>
                   </div>
                   )
               })}
           </div>
           </div>
        )
    }
}
const UnitCategoryWorks = graphql(UnitCategoryWorksQuery,{
  options: (CategoryName) => ({
      variables: {
        Name: CategoryName.match.params.CategoryName
      }
    })
  })(UnitCategoryWorksComponent)
export default UnitCategoryWorks