import { NEW_MESSAGE, NEW_USER, LOGIN_USER } from './ChatConstants';

export function newMessage(message) {
  return {
    type: NEW_MESSAGE,
    message: message
  };
}

export function newUser(user) {
	return {
		type: NEW_USER,
		user: user
	}; 
}


export function loginUser(login) {
	return {
		type: LOGIN_USER,
		login: login
	};
}