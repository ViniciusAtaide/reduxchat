import React from 'react'

class MessageList extends React.Component {
  
  showMessage(message, i) {
    return (
      <p key={i}>{i}: {message}</p>
    );
  }

  render () {
    return (
      <div>
        <h1>MessageList</h1>
        { this.props.messages.map(this.showMessage)}
      </div>
    )
  }
}

export default MessageList;
