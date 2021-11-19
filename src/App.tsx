import React from 'react';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import TestDisplay from './component/Test';
import Home from './component/home';

const App = ()=> {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/test">Test</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestDisplay />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
