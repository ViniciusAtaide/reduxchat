import { NEW_MESSAGE, NEW_USER, LOGIN_USER } from '../actions/ChatConstants';
import { fromJS, Map } from 'immutable';

var initialState = fromJS({messages: ['abc','lolo'], users: [{login: 'vinny'}], currentUser: null});

export default function chat(state = initialState, action) {
  switch(action.type) {
    case NEW_MESSAGE:    
    	var msg = Map({messages: state.get('messages').push(state.get('currentUser') + ': ' + action.message)});
    	return state.merge(msg);
    case NEW_USER:
    	var usr = Map({users: state.get('users').push({login: action.user})});
    	return state.merge(usr);
    case LOGIN_USER:
    	const user = state.get('users').filter(usr => usr.get('login') === action.login);
    	debugger;
    	if (user.size === 0) return;
    	return state.set({currentUser: user});
    default :
      return state;
  }
}
