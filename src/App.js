import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import Success from './Success';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/success" element={<Success />} />
        </Routes>
     
    </Router>
    // </GoogleOAuthProvider>
  );
}

export default App;