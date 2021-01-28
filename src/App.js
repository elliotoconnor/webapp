import React from 'react';
import logo from './logo.svg';
import './App.css';
import OneSignal from 'react-onesignal';

OneSignal.initialize('2f4f9432-f62c-45f0-91a1-2d5ef683666f', {
  safari_web_id:"web.onesignal.auto.694eada3-a476-4a33-8c61-99aa6c1d60b0",
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
