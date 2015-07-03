import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import Layout from './components/Layout';
import Main from './components/Main';
import Subscribe from './components/Subscribe';
import { Provider } from 'redux/react';
import { createStore, bindActionCreators } from 'redux';
import * as reducers from './reducers';

const store = createStore(reducers);

var routes = (
  <Route path="/" handler={Layout}>
    <DefaultRoute name="main" handler={Main} />
    <Route name="subscribe" path="subscribe" handler={Subscribe}></Route>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.getElementById('root'));
});
