import React from 'react';
import Quiz from './Quiz';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <h1 className='head'>Quiz App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Quiz />} />
         
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
