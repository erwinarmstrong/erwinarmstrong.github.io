import React, { useState } from 'react';
import Topbar from './components/Topbar';
import BottomBar from './components/Bottombar';
import LandingPage from './components/LandingPage';
import NOMAD from './IRISComponents/NOMAD/NOMAD';
import NineLine from './IRISComponents/NineLine/NineLine';

import './App.css'

function App() {
  const [showNomad, setShowNomad] = useState(false);
  const [showNineLine, setShowNineLine] = useState(false);

  const handleShowNomad = () => {
    setShowNomad(true);
    setShowNineLine(false); // Ensure NineLine is hidden
  }

  const handleShowNineLine = () => {
    setShowNomad(false); // Ensure Nomad is hidden
    setShowNineLine(true);
  }

  const handleNavigateBack = () => {
    setShowNomad(false);
    setShowNineLine(false);
  }

  return (
    <div className="App">
      <Topbar onNavigateBack={handleNavigateBack} />
      {!showNomad && !showNineLine && (
        <LandingPage
          onNavigateNomad={handleShowNomad} // Pass the functions to LandingPage
          onNavigateNineLine={handleShowNineLine}
        />
      )}
      {showNomad && (
        <NOMAD />
      )}
      {showNineLine && (
        <NineLine />
      )}
      <BottomBar onNavigateBack={handleNavigateBack} />
    </div>
  );
}

export default App;
