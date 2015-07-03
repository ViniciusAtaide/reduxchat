import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import { Provider } from 'redux/react';
import { createStore } from 'redux';
import * as reducers from '../reducers';
import TopBar from './TopBar';

const store = createStore(reducers);

export default class Layout {
  render() {
    return (
      <Provider store={store}>
        {() => showHandler()}
      </Provider>
    );
  }
}

function showHandler() {
  const style = {
    layout: {
      margin: '50px auto',
      width: "50%"
    }
  }
  return (
    <div style={style.layout}>
      <TopBar />
      <RouteHandler />
    </div>
  )
}
