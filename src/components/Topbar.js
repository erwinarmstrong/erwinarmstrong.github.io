import React from 'react';

function Topbar({ onNavigateBack }) {
  return (
    <div className="Topbar">
      <div className="TopbarButtons" style={{ textAlign: 'end' }}>
        <div className="TopbarButtonDiv">
          <button className="TopbarButton" onClick={onNavigateBack}>
            <div className="BackgroundImage"></div>
            <div className="ButtonText">IRIS</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
