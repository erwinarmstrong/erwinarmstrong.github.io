import React, { useState } from 'react';
import Topbar from './components/Topbar';
import BottomBar from './components/Bottombar';
import LandingPage from './components/LandingPage';
import NOMAD from './IRISComponents/NOMAD/NOMAD';
import NineLine from './IRISComponents/9Line/NineLine';

import './App.css'

function App() {
  const [showNomad, setShowNomad] = useState(false);

  const handleNavigate = () => {
    setShowNomad(true);
  }

  const handleNavigateBack = () => {
    setShowNomad(false);
  }


  return (
    <div className="App">
      <Topbar onNavigateBack={handleNavigateBack} /> {/* Updated */}
      {!showNomad ? (
        <LandingPage onNavigate={handleNavigate} />
      ) : (
        <NOMAD />
      )}
      <BottomBar onNavigateBack={handleNavigateBack} /> {/* Updated */}
    </div>
  );
}

export default App;
