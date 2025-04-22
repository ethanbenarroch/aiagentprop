import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import Success from './pages/Success';
import './utils/animations.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/success" element={<Success />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;