import React from 'react';
import logo from './logo.svg';
import './App.css';
import PublishMessage from './components/PublishMessage';
import MessageBoard from './components/MessageBoard';
import SetUserName from './components/SetUserName';

function App() {
  return (
    <div className="App">
      <SetUserName />
      <h2>Reaction</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </div>
  );
}

export default App;
