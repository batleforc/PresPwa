import React from 'react';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Cat from './component/Cat';
import Home from './component/home';

const App = ()=> {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Cat />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
