import React, { Component } from 'react';

export default class Subscribe extends Component {

	createUser(newUser, event) {

		event.preventDefault();
			
		const login = React.findDOMNode(this.refs.login);

		newUser({login: login.value});

		login.value = "";

  }


  render() {

  	const { newUser } = this.props;

    return (
    	<div>
    		<form onSubmit={this.createUser.bind(this, newUser)}>
    			<input type="text" ref="login" />
    			<input type="submit" value="cadastrar usuario" />
    		</form>
    	</div>
    );
  }
}
