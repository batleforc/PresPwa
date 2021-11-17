import React from 'react';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} className="App-logo" alt="logo" />
        <p>
          Wanna Learn PWA ?
        </p>
        <a
          className="App-link"
          href="https://github.com/batleforc/PresPwa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn PWA
        </a>
        <Routes>
          <Route path="/">
            <h1>HELLO WORLD</h1>
          </Route>
          <Route path="/test">
            <h1>HELLO WORLD</h1>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
