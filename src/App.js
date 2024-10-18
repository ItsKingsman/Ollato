import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Component/Registration';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Reg from './Component/Reg';
import Registration1 from './Component/Registration1';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new" element={<Reg />} />
          <Route path="/new1" element={<Registration1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



