import { connect } from 'react-redux';
import SidebarComponent from '../components/Sidebar';


export const MessagesLists = connect(state => ({
  users: state.users
}), {})(SidebarComponent)
