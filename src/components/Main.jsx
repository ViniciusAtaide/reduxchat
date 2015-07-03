import React, { Component } from 'react';
import { connect } from 'redux/react';
import NewMessage from './NewMessage';
import MessageList from './MessageList';
import LoginUser from './LoginUser';
import * as ChatActions from '../actions/ChatActions';
import { bindActionCreators } from 'redux';

@connect(state => ({
  chat: state.chat
}))
export default class Main {

  render() {

    const { chat, dispatch } = this.props;
    const user = chat.get('currentUser');

    var msg = user ? 
        <h2>Usuário logado: { chat.get('currentUser') } </h2>
      :
        <h2>Nenhum Usuário Logado</h2>

    return (
      <div>
        <LoginUser logged={user} {...bindActionCreators(ChatActions, dispatch)} />
        { msg }
        <NewMessage logged={user} {...bindActionCreators(ChatActions, dispatch)} />
        <MessageList messages={chat.get('messages')} />
      </div>
    );
  }
}
