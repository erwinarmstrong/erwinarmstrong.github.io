import React, { useState } from 'react';
import ModalTable from './ModalTable';

function BottomBar({ onNavigateBack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileContent, setFileContent] = useState('');
  const [sendToModal, setSendToModal] = useState(''); // Corrected typo in variable name

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const pasteAndGo = () => {
    navigator.clipboard.readText().then(text => {
      setFileContent(text);
      openModal(true);
    }).catch(error => {
      console.error('Error reading from clipboard:', error);
    });
  };

  return (
    <div className="BottomBar">
      <div className="BottomBarButtons">
        <div className='BottombarButton'>
          <button className="BottombarButton" onClick={pasteAndGo}>
            <div className="BottomBackgroundImage"></div>
            <div className="ButtonText">Paste and Go</div>
            Paste and Go
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <ModalTable
              sendToModal={fileContent}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default BottomBar;
