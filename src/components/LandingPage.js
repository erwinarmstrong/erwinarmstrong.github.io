// src/components/LandingPage.js

import React from 'react';
import '../App.css'

function LandingPage({ onNavigate }) {
  const handleButtonClick = (destination) => {
    onNavigate(destination);
  };

  return (
    <div className="LandingPage">
      <div>
        <label className='LandingPageTitle'>
          IRIS
        </label>
      </div>
      <div className='LandingPageButtonDiv'>
        <button className='LandingPageButton' onClick={() => handleButtonClick('NOMAD')}>
          <div className='BackgroundImage'></div>
          <div className='ButtonText'>Navigate to Nomad</div>
        </button>
        <button className='LandingPageButton' onClick={() => handleButtonClick('9-Line')}>
          <div className='BackgroundImage'></div>
          <div className='ButtonText'>Navigate to 9-Line</div>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
