import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <section id="messages-list">Messagess List</section>
          <section id="new-message">New Messages</section> 
        </section>
       </div>
    );
  }
}

export default App;
