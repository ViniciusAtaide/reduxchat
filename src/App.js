import React, { Component, PropTypes } from 'react';
import { RouteHandler, Router, Route } from 'react-router';
import Main from './components/Main';
import Subscribe from './components/Subscribe';
import ChatActions from './actions/ChatActions';
import { connect } from 'redux/react';
import * as stores from './stores';
import { createStore, bindActionCreators } from 'redux';
import { Provider } from 'redux/react';

const store = createStore(stores);

export default class App extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {

    return (
      <Provider store={store}>
        {() => <AppRoutes />}
      </Provider>
    )

  }
}


@connect(state => ({
  messages: state.messages
}))
class AppRoutes extends Component {

  render() {
    const { messages, dispatch } = this.props;

    return (
      <Router history={history} messages={messages} { ...bindActionCreators(ChatActions, dispatch) } >
        <Route handler={App}>
          <Route path="/" handler={Main}></Route>
          <Route path="subscribe" handler={Subscribe}></Route>
        </Route>
      </Router>
    );
  }
}
