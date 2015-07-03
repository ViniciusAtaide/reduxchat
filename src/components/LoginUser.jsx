import React, { Component } from 'react';

export default class LoginUser extends Component {
	login(login, evt) {
		evt.preventDefault();

		const log =	React.findDOMNode(this.refs.log);
		login(log.value);

		log.value = "";
		
	}

	render() {
		const { logged, loginUser } = this.props;

		return (
			<form style={{display: logged ? 'none' : 'block'}} onSubmit={this.login.bind(this, loginUser)}>
				<input type="text" ref="log" />
				<input type="submit" value="Login" />
			</form>
		);
	}
}