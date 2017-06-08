import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route ,Switch , Redirect} from 'react-router-dom';
import './index.css';
import { LocaleProvider } from 'antd';
import enUS from '../node_modules/antd/lib/locale-provider/en_US';


import IndexPageComponent from './component/IndexPage/index';
import listWorksComponent from './component/ListWorks/index';
import UnitCategoryWorksComponent from './component/CategoryWorks/unitCategory';
import DetailWork from './component/DetailWork/index';
import Register from './component/AuthenModal/register';
import registeredComponent from './component/AuthenModal/registerd';
import addWork from './component/AddWork/index';
import userProfileComponent from './component/userProfile/index';


import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
const networkInterface = createNetworkInterface({  uri: 'http://128.199.68.65:3001/graphql' });
const client = new ApolloClient({  networkInterface});
ReactDOM.render(
    <ApolloProvider client={client}>
       <LocaleProvider locale={enUS}>
        <Router>
          <Switch>
          <Route exact={true} path="/" component={IndexPageComponent}/>
          <Route exact={true} path="/UnitCategory/:CategoryName" component={UnitCategoryWorksComponent}/>
          <Route exact={true} path="/listWorks/:CategoryName" component={listWorksComponent}/>
          <Route exact={true} path="/DetailWork/:WorkId" component={DetailWork}/>
          <Route exact={true} path="/Register" component={Register}/>
          <Route exact={true} path="/addWork" component={addWork}/>
          <Route exact={true} path="/loged/:UserId" component={IndexPageComponent}/>
          <Route exact={true} path="/registered" component={registeredComponent}/>
          <Route exact={true} path="/myProfile" component={userProfileComponent}/>
          <Route exact={true} path="/NormalLoged" render={() => (<Redirect to="/"/>)}/>
          <Route exact={true} path="/logout" render={() => (<Redirect to="/"/>)}/>
          </Switch>
        </Router>
       </LocaleProvider>
    </ApolloProvider>,
  document.getElementById('root')
);
