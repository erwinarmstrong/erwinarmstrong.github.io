import React from 'react';

function Topbar({ onNavigateBack }) {
  return (
    <div className="Topbar">
      <div className="TopbarButtons" style={{ textAlign: 'end' }}>
        <button
          className="TopbarButton"
          onClick={onNavigateBack}
        >
          Go Back to App
        </button>
      </div>
    </div>
  );
}

export default Topbar;
