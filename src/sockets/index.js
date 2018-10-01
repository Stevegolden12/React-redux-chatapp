import * types from '../constants/ActionTypes';
import {addUser, messageReceived, populateUsersList} from '../actions';

/* Opens up the socket connection */
const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:8989')
	/* This will let everyone know a new user has been added*/
	socket.onopen = () => {
		socket.send(JSON.stringify({
		  type: types.ADD_USER,
			name: username
		}))
	}

	socket.onmessage = (event) => {
	  const data = JSON.parse(event.data)
		switch (data.type){
		  case type.ADD_MESSAGE:
			  dispatch(messageReceived(data.message, data,author))
				break;
			case types.ADD_USER:
			  dispatch(addUser(data.name))\
				break;
			case types.USERS_LIST:
			  dispatch(populateUsersList(data.users))
				break;
			default:
			  break;
		}
	}
	return socket
}

export default setupSocket