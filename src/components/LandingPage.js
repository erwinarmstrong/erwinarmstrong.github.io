import React from 'react';
import '../App.css';

function LandingPage({
  onNavigateNomad, // Add onNavigateNomad prop
  onNavigateNineLine, // Add onNavigateNineLine prop
}) {
  const handleButtonClick = (destination) => {
    console.log(`Button clicked: ${destination}`);
    if (destination === 'NOMAD') {
      onNavigateNomad(); // Call onNavigateNomad function
    } else if (destination === 'NineLine') {
      onNavigateNineLine(); // Call onNavigateNineLine function
    }
  };


  return (
    <div className="LandingPage">
      <div>
        <label className="LandingPageTitle">IRIS</label>
      </div>
      <div className="LandingPageButtonDiv">
        <button className="LandingPageButton" onClick={() => handleButtonClick('NOMAD')}>
          <div className="BackgroundImage"></div>
          <div className="ButtonText">NOMAD</div>
        </button>
        <button className="LandingPageButton" onClick={() => handleButtonClick('NineLine')}>
          <div className="BackgroundImage"></div>
          <div className="ButtonText">9-Line</div>
        </button>
      </div>
    </div >
  );
}

export default LandingPage;
