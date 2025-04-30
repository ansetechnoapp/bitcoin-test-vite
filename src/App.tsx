import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Portfolio from './pages/Portfolio';
import Markets from './pages/Markets';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-dark text-white">
        <div className="flex">
          <Sidebar />
          
          <div className="flex-1 min-h-screen">
            <Header />
            
            <main>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/markets" element={<Markets />} />
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;