import React from 'react';

function Topbar({ onNavigateBack }) {
  return (
    <div className="Topbar">
      <div className='TopbarButtons' style={{ textAlign: 'end' }}>
        <button className='TopBarButtons' onClick={onNavigateBack} style={{
          height: '5vh', width: '5vw', margin: '5px',
          backgroundImage: "url:('../../public/icon512.png) "
        }}>
          Go Back to App
        </button>
      </div>
    </div >
  );
}

export default Topbar;
