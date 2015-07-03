import { NEW_MESSAGE } from '../actions/ChatConstants';
import { Map } from 'immutable';

const initialState = Map({messages: ['123', '124']);

export default function chat(state = initialState, action) {
  switch(action.type) {
    case NEW_MESSAGE:
      return state.get('messages').push(action.message);
    case NEW_USER:
    	return state.get()
    default :
      return state;
  }
}
