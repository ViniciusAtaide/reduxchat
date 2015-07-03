import React, { Component } from 'react';

export default class NewMessage extends Component {

  _sendMessage(newMessage, evt) {

    evt.preventDefault();

    const msg = React.findDOMNode(this.refs.new);

    newMessage(msg.value);

    msg.value = "";

  }

  render() {

    const { newMessage, logged } = this.props;

    return (
      <form style={{display: logged ? 'block' : 'none'}}  onSubmit={this._sendMessage.bind(this, newMessage)}>
        <input ref="new" type="text" placeholder="Nova msg" />
        <input type="submit" value="Nova Msg" />
      </form>
    );
  }

}
