import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexPageComponent from './component/IndexPage/index';
import listWorksComponent from './component/Works/index';
import UnitCategoryWorksComponent from './component/CategoryWorks/unitCategory';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
const networkInterface = createNetworkInterface({  uri: 'http://localhost:3001/graphql' });
const client = new ApolloClient({  networkInterface});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
          <Switch>
          <Route exact={true} path="/" component={IndexPageComponent}/>
          <Route exact={true} path="/UnitCategory/:CategoryName" component={UnitCategoryWorksComponent}/>
          <Route exact={true} path="/listWork/:CategoryName" component={listWorksComponent}/>
          </Switch>
        </Router>
    </ApolloProvider>,
  document.getElementById('root')
);
