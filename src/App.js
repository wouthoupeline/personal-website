import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/personal-website' element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;