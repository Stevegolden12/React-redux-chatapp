import { connect } from 'react-redux';
import MessagesListComponent from '../components/MessagesList';


export const MessagesList = connect(state => ({
  users: state.users
}), {})(MessagesListComponent)
