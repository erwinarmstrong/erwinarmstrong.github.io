// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App'; // Import the App component
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';
import NOMAD from './IRISComponents/NOMAD/NOMAD';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Topbar />
              <App />
              <Bottombar />
            </>
          }
        />
        <Route path="/nomad" element={<NOMAD />} />
        <Route path='/nineline' element={<NineLine />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
