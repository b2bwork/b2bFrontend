import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexPageComponent from './component/IndexPage/index';
import NavbarComponent from './component/Navbar/index';
import CategoryWorksComponent from './component/CategoryWorks/index';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
const networkInterface = createNetworkInterface({  uri: 'http://localhost:3001/graphql' });
const client = new ApolloClient({  networkInterface});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={IndexPageComponent}/>
        </Router>
    </ApolloProvider>,
  document.getElementById('root')
);
