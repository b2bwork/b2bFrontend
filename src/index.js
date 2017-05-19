import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexPageComponent from './component/IndexPage/index';
import listWorksComponent from './component/ListWorks/index';
import UnitCategoryWorksComponent from './component/CategoryWorks/unitCategory';
import DetailWork from './component/DetailWork/index';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { LocaleProvider } from 'antd';
import enUS from '../node_modules/antd/lib/locale-provider/en_US';
import { ApolloProvider } from 'react-apollo';
const networkInterface = createNetworkInterface({  uri: 'http://localhost:3001/graphql' });
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
          </Switch>
        </Router>
       </LocaleProvider>
    </ApolloProvider>,
  document.getElementById('root')
);
